import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

class JobsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        console.log("JobsPage render() with state: ", this.state);
        return <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        Jobs <small>Statistics Overview</small>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Visa Status</th>
                                <th>Skills</th>
                                <th>Experience</th>
                                <th>Favorites</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Software Engineer</td>
                                <td>San Francisco, CA</td>
                                <td>Citizen</td>
                                <td>Python</td>
                                <td>3 yrs</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Software Engineer</td>
                                <td>San Francisco, CA</td>
                                <td>Citizen</td>
                                <td>Python</td>
                                <td>3 yrs</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Software Engineer</td>
                                <td>San Francisco, CA</td>
                                <td>Citizen</td>
                                <td>Python</td>
                                <td>3 yrs</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Software Engineer</td>
                                <td>San Francisco, CA</td>
                                <td>Citizen</td>
                                <td>Python</td>
                                <td>3 yrs</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Software Engineer</td>
                                <td>San Francisco, CA</td>
                                <td>Citizen</td>
                                <td>Python</td>
                                <td>3 yrs</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Software Engineer</td>
                                <td>San Francisco, CA</td>
                                <td>Citizen</td>
                                <td>Python</td>
                                <td>3 yrs</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Software Engineer</td>
                                <td>San Francisco, CA</td>
                                <td>Citizen</td>
                                <td>Python</td>
                                <td>3 yrs</td>
                                <td>9</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default JobsPage;