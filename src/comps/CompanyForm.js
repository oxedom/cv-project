import React, { Component } from "react";

import '../styles/styles.css'
class CompanyForm extends Component {
    constructor() {
        super()

        this.state = {


        }

    }
    handleClick = (e) => {
        let id = e.target.getAttribute('a-id')
        this.props.removeEntry(id, 'jobs')
    }

    render() {
        const { jobsData } = this.props

        console.log(jobsData);
        return (<div className="form-box">
            <p className="title"> Work Experince </p>
            <div className="form-inputs">
                <div className="form-inputs">
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
            </div>
            <button onClick={this.handleClick} a-id={jobsData.id} className="btn"> Delete </button>


        </div>)
    }
}

export default CompanyForm;