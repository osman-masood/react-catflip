import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

class FavoritesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        console.log("FavoritesPage render() with state: ", this.state);
        return <div>FavoritesPage</div>;
    }
}

export default FavoritesPage;