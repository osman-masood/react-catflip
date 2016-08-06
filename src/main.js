import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// var bootstrap = require('bootstrap');
import FormPage from './form';
import 'whatwg-fetch';

/* Initialize Firebase and Facebook */

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5avai5R2hz6SmQRLJ0E_-h1ABwSz2w3M",
    authDomain: "reacttest-d7787.firebaseapp.com",
    databaseURL: "https://reacttest-d7787.firebaseio.com",
    storageBucket: "reacttest-d7787.appspot.com",
});
var database = firebase.database();

var facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.addScope('public_profile, email, user_birthday');
var emailAuthProvider = firebase.auth.EmailAuthProvider();

// Need to get the UI for this fixed (pressing Down button doesn't make it go down, doesn't remove suggestions on blur)
// var GeoSuggest = require('react-geosuggest').default;

/* Define Components */

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSignedIn: [false], currentCourses: []};
        this.handleFBSignIn = this.handleFBSignIn.bind(this);
    }

    componentDidMount() {
        var thisComponent = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("User is now logged in", user);
                thisComponent.setState({isSignedIn: [true]});
            } else {
                // No user is signed in.
            }
        });
    }

    render() {
        console.log("LandingPage render() with state: ", this.state);
        var body;
        if (this.state.isSignedIn[0]) {
            console.log("Going to show FormPage");
            body = <FormPage />;
            // Location autocomplete
            // var input = document.getElementById('inputLocationGroup');
            // var options = {};
            // new google.maps.places.Autocomplete(input, options);
        } else {
            body = this.renderLoginBody();
        }

        return <div>
            <TopNav isSignedIn={ this.state.isSignedIn } />

            <div className="container-fluid">
                <div style={ heroStyle }>
                    <h1>Get a career.</h1>
                    <p className="lead">
                        Enter your information and our clients will take a look.
                        <br />
                        Simple as that.
                    </p>
                    { body }
                </div>
            </div>
        </div>;
    }

    renderLoginBody() {
        return <div>
            <div>
                <a className="btn btn-lg btn-social btn-facebook" onClick={this.handleFBSignIn}>
                    <span className="fa fa-facebook"></span>Login with Facebook
                </a>
            </div>
            <div style={{ marginTop: "20px" }}>
                <a className="btn btn-lg btn-social btn-linkedin" onClick={this.handleFBSignIn}>
                    <span className="fa fa-linkedin"></span>Login with LinkedIn
                </a>
            </div>
        </div>
    }

    /**
     * When the input receives focus
     */
    locationOnFocus() {
        console.log('onFocus'); // eslint-disable-line
    }

    /**
     * When the input loses focus
     */
    locationOnBlur() {
        console.log('onBlur'); // eslint-disable-line
    }

    /**6
     * When the input got changed
     * @param {String} value The new value
     */
    locationOnChange(value) {
        console.log('input changes to :' + value); // eslint-disable-line
    }

    /**
     * When a suggest got selected
     * @param  {Object} suggest The suggest
     */
    locationOnSuggestSelect(suggest) {
        console.log(suggest); // eslint-disable-line
    }

    handleFBSignIn() {
        console.log("Clicked Signed in with FB");
        var thisComponent = this;
        firebase.auth().signInWithPopup(facebookAuthProvider).then(function(result) {
            console.log("FB signin successful, response from FB: ", result);
            var token = result.credential.accessToken;
            var user = result.user;
            var userId = user.providerData[0].uid;

            // Do Facebook API call to get user's data
            fetch('https://graph.facebook.com/v2.7/' + userId + '&access_token=' + token)
                .then(function(response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    } else {
                        console.log("ERROR from FB API for user " + userId);
                        var error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                }).then(function(body) {
                    console.log("Received response from FB GET call for user " + userId, body);
                    database.ref('users/' + userId).set({
                        email: user.email
                    });
            });

            thisComponent.setState({isSignedIn: [true]});
        }).catch(function(error) {
            console.log("ERROR from FB signin", error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            //noinspection JSUnresolvedVariable
            var email = error.email;  // The email of the user's account used.

            //noinspection JSUnresolvedVariable
            var credential = error.credential;  // The firebase.auth.AuthCredential type that was used.
            console.error("Response from FB: ", error);
        });
    }

}

class TopNav extends React.Component {
    constructor(props) {
        console.log("TopNav props: ", props);
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {isSignedIn: props.isSignedIn};
    }

    render() {
        var rightNav;
        if (this.state.isSignedIn[0]) {
            rightNav = <div></div>;
        } else {
            rightNav = <ul className="nav navbar-nav navbar-right">
                <li><a href="#logout" onClick={this.handleLogout}>Logout</a></li>
            </ul>
        }

        return <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">PadawanHire</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    { rightNav }
                </div>
            </div>
        </nav>
    }

    handleLogout(event) {
        console.log("Logout clicked");
        var thisComponent = this;
        firebase.auth().signOut().then(function() {
            thisComponent.state['isSignedIn'][0] = true;
            // thisComponent.setState({isSignedIn: [false], currentCourses: []});
        });
    }
}

var heroStyle = {
    padding: '80px 15px',
    textAlign: 'center'
};


ReactDOM.render(
    <LandingPage />,
    document.getElementById('example')
);
