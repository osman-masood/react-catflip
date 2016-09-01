import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// var bootstrap = require('bootstrap');
import FormPage from './form';
import AboutPage from './about';
import LoginPage from './login';
import DashboardPage from './dashboard';
import JobsPage from './jobs';
import FavoritesPage from './favorites';
import 'whatwg-fetch';
import { browserHistory, withRouter, Router, Route, Link } from 'react-router';

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

/* Define Components */

class AppPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSignedIn: false }
    }

    setIsSignedIn(inputIsSignedIn) {
        this.setState({isSignedIn: inputIsSignedIn});
    }

    render() {
        console.log("AppPage render() with state: ", this.state);
        if (this.props.children) {
            return <div>{ this.props.children }</div>;
        }
        else {
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
                    </div>
                </div>
            </div>;
        }
    }
}

class TopNav extends React.Component {
    constructor(props) {
        console.log("TopNav props: ", props);
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {isSignedIn: props.isSignedIn};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isSignedIn: nextProps.isSignedIn});
    }

    render() {
        console.log("TopNav render() with state: ", this.state, ", props: ", this.props);
        var rightNav;
        if (! this.state.isSignedIn) {
            rightNav = <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>;
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
                    <Link to="/" className="navbar-brand">PadawanHire</Link>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/get-hired">Get hired</Link></li>
                        <li><Link to="/find-hires">Find hires</Link></li>
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
            thisComponent.props.setIsSignedIn(false);
        });
    }
}

var heroStyle = {
    padding: '80px 15px',
    textAlign: 'center'
};


function requireAuth(nextState, replace) {
    // if (!auth.loggedIn()) {
    if (false) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

/**
 * Taken from https://github.com/reactjs/react-router/blob/master/examples/auth-flow/app.js
 * Just here as an example in case we use withRouter's login.
 */
const Login = withRouter(
    React.createClass({

        getInitialState() {
            return {
                error: false
            }
        },

        handleSubmit(event) {
            event.preventDefault();

            const email = this.refs.email.value;
            const pass = this.refs.pass.value;

            if (email === 'joe@example.com' && pass === 'password1') {
                const { location } = this.props;

                if (location.state && location.state.nextPathname) {
                    this.props.router.replace(location.state.nextPathname)
                } else {
                    this.props.router.replace('/')
                }
            }
            else {
                return this.setState({ error: true });
            }

            // auth.login(email, pass, (loggedIn) => {
            //     if (!loggedIn)

            // })
        },

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
                    <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
                    <button type="submit">login</button>
                    {this.state.error && (
                        <p>Bad login information</p>
                    )}
                </form>
            )
        }
    })
);


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={AppPage}>
            <Route path="login" component={LoginPage} />
            <Route path="about" component={AboutPage} />
            <Route path="get-hired" component={AboutPage} />
            <Route path="find-hires" component={AboutPage} />
        </Route>
        <Route path="/dashboard" component={DashboardPage} onEnter={requireAuth} >
            <Route path="/jobs" component={JobsPage} />
            <Route path="/favorites" component={FavoritesPage} />
        </Route>

    </Router>,
    document.getElementById('app')
);

export default facebookAuthProvider;
export default emailAuthProvider;
export default database;
