

import React, { Component } from "react";

import uniqid from "uniqid";
class SchoolForm extends Component {
    constructor(props) {
        super()
        this.state = {

        }



    }



    handleClick = (e) => {
        let id = e.target.parentNode.getAttribute('a-id')
        this.props.removeEntry(id, 'schools')
    }




    render() {
        const { schoolData } = this.props

        return (<div className="form-box" a-id={schoolData.id}>
            <p className="title"> Education</p>
            <div className="form-inputs">
                <input name="school" ></input>
                <input name="school_title"></input>
                <input name="school_date"></input>
            </div>

            <button onClick={this.handleClick} a-id={schoolData.id} className="btn"> Delete </button>


        </div>)
    }
}

export default SchoolForm;

