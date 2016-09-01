import React from 'react';
import { Link } from 'react-router';

/**
 * Dashboard styles taken from: https://startbootstrap.com/template-overviews/sb-admin/
 * */
class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("DashboardPage constructor");
    }

    render() {
        console.log("Rendering DashboardPage with props ", this.props, " and state ", this.state);

        var containerContents = this.props.children ? this.props.children : <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        Dashboard <small>Statistics Overview</small>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">

                    <form role="form">

                        <div className="form-group">
                            <label>Text Input with Placeholder</label>
                            <input className="form-control" placeholder="Enter text"/>
                        </div>

                        <div className="form-group">
                            <label>Skills</label>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>Python
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>PHP
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>JavaScript
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Skills</label>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>Python
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>PHP
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>JavaScript
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-default">Submit Button</button>
                        <button type="reset" className="btn btn-default">Reset Button</button>

                    </form>
                </div>
            </div>
        </div>;

        return <div id="wrapper">
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/dashboard">PadawanHire</Link>
                </div>

                <ul className="nav navbar-right top-nav">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-envelope"></i> <b className="caret"></b></a>
                        <ul className="dropdown-menu message-dropdown">
                            <li className="message-preview">
                                <a href="#">
                                    <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt="" />
                                    </span>
                                        <div className="media-body">
                                            <h5 className="media-heading"><strong>John Smith</strong>
                                            </h5>
                                            <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="message-preview">
                                <a href="#">
                                    <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt="" />
                                    </span>
                                        <div className="media-body">
                                            <h5 className="media-heading"><strong>John Smith</strong>
                                            </h5>
                                            <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="message-preview">
                                <a href="#">
                                    <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt="" />
                                    </span>
                                        <div className="media-body">
                                            <h5 className="media-heading"><strong>John Smith</strong>
                                            </h5>
                                            <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="message-footer">
                                <a href="#">Read All New Messages</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-bell"></i> <b className="caret"></b></a>
                        <ul className="dropdown-menu alert-dropdown">
                            <li>
                                <a href="#">Alert Name <span className="label label-default">Alert Badge</span></a>
                            </li>
                            <li>
                                <a href="#">Alert Name <span className="label label-primary">Alert Badge</span></a>
                            </li>
                            <li>
                                <a href="#">Alert Name <span className="label label-success">Alert Badge</span></a>
                            </li>
                            <li>
                                <a href="#">Alert Name <span className="label label-info">Alert Badge</span></a>
                            </li>
                            <li>
                                <a href="#">Alert Name <span className="label label-warning">Alert Badge</span></a>
                            </li>
                            <li>
                                <a href="#">Alert Name <span className="label label-danger">Alert Badge</span></a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">View All</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav side-nav">
                        <li>
                            <Link to="/dashboard"><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/jobs"><i className="fa fa-fw fa-file-text-o"></i> Jobs</Link>
                        </li>
                        <li>
                            <Link to="/favorites"><i className="fa fa-fw fa-heart"></i> Lists</Link>
                        </li>

                        {/*<li>*/}
                        {/*<a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></a>*/}
                        {/*<ul id="demo" className="collapse">*/}
                        {/*<li>*/}
                        {/*<a href="#">Dropdown Item</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*<a href="#">Dropdown Item</a>*/}
                        {/*</li>*/}
                        {/*</ul>*/}
                        {/*</li>*/}

                    </ul>
                </div>
            </nav>
            <div id="page-wrapper">
                <div className="container-fluid">

                    { containerContents }

                </div>
            </div>
        </div>;
    }
    }

    export default DashboardPage;