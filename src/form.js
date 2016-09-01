import React from 'react';

// Need to get the UI for this fixed (pressing Down button doesn't make it go down, doesn't remove suggestions on blur)
// var GeoSuggest = require('react-geosuggest').default;


class FormPage extends React.Component {
    
    constructor(props) {
        super(props);
        console.log("FormPage constructor");
        this.handleEnterNewCurrentCourse = this.handleEnterNewCurrentCourse.bind(this);
    }
    
    render() {
        return <div className="col-md-10 col-md-offset-2">
            <div className="form-horizontal">
                <div className="form-group">
                    <label for="inputNameGroup" className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-3">
                        <input className="form-control" type="text" id="inputNameGroup" placeholder="First name" />
                    </div>
                    <div className="col-sm-3">
                        <input className="form-control" type="text" id="inputNameGroup" placeholder="Last name" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmailGroup" className="col-sm-2 control-label">Email address</label>
                    <div className="col-sm-6">
                        <input className="form-control" type="email" id="inputEmailGroup" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputPhoneGroup" className="col-sm-2 control-label">Phone number</label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" id="inputPhoneGroup" placeholder="Phone" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputLocationGroup" className="col-sm-2 control-label">Location</label>
                    <div className="col-sm-3">
                        <input className="form-control" type="text" id="inputLocationGroup" placeholder="City, State" />
                    </div>
                    <label for="willingToRelocateGroup" className="col-sm-2 control-label">Willing to Relocate?</label>
                    <div className="col-sm-1 checkbox">
                        <input type="checkbox" id="willingToRelocateGroup" />
                    </div>
                </div>
                { this.renderCurrentCourses() }
            </div>
        </div>;
    }

    renderCurrentCourses() {
        return  <div className="form-group" ref={(ref) => this._currentCoursesGroup = ref}>
            <label for="coursesCompleteGroup" className="col-sm-2 control-label">Current courses</label>
            <div className="col-sm-6">
                <input className="form-control" type="text" id="coursesCompleteGroup"
                       placeholder="Course name"
                       onChange={this.handleEnterNewCurrentCourse} />
            </div>
        </div>
    }

    handleEnterNewCurrentCourse(event) {
        // When a user begins entering a new Current Course, create a new text input field
        console.info("handleEnterNewCurrentCourse: ", event);
        // this.setState({})
    }
}

export default FormPage;