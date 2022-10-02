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

    handleChange = (e) => { this.props.handleChange(e) }

    render() {
        const { jobsData } = this.props

        console.log(jobsData);
        return (<section className="form-box">
            <p className="title"> Work Experince </p>
            <div className="form-inputs">
                <div className="form-inputs">
                    <input name="job" defaultValue={`${jobsData.job}`} onChange={this.handleChange} />
                    <input name="job_title" defaultValue={jobsData.job_title} onChange={this.handleChange} />
                    <input name="job_start" defaultValue={jobsData.job_start} onChange={this.handleChange} />
                    <input name="job_end" defaultValue={jobsData.job_end} onChange={this.handleChange} />

                </div>
            </div>
            <div onClick={this.handleClick} a-id={jobsData.id} className="btn"> Delete </div>


        </section>)
    }
}

export default CompanyForm;