import React from 'react';
import firebase from 'firebase';
import facebookAuthProvider from './main';
import database from './main';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSignedIn: false, currentCourses: []};
        this.handleFBSignIn = this.handleFBSignIn.bind(this);
        this.setIsSignedIn = this.setIsSignedIn.bind(this);
    }

    componentDidMount() {
        var thisComponent = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("User is now logged in", user);
                thisComponent.setIsSignedIn(true);
            } else {
                // No user is signed in.
            }
        });
    }

    setIsSignedIn(inputIsSignedIn) {
        this.setState({isSignedIn: inputIsSignedIn});
    }

    render() {
        console.log("AppPage render() with state: ", this.state);
        var body;
        if (this.state.isSignedIn) {
            console.log("AppPage: Is signed in, going to show FormPage");
            body = <FormPage />;
            // Location autocomplete
            // var input = document.getElementById('inputLocationGroup');
            // var options = {};
            // new google.maps.places.Autocomplete(input, options);
        } else {
            body = this.renderLoginBody();
        }

        return <div>
            <TopNav setIsSignedIn={ this.setIsSignedIn } isSignedIn={ this.state.isSignedIn } />

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

    /**
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
            thisComponent.setIsSignedIn(true);
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

var heroStyle = {
    padding: '80px 15px',
    textAlign: 'center'
};

export default LoginPage;