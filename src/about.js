import React from 'react';

class AboutPage extends React.Component {

    constructor(props) {
        super(props);
        console.log("AboutPage constructor");
    }

    render() {
        return <div>
            About us.
        </div>
    }
}

export default AboutPage;