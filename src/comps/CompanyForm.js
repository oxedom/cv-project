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
        const { job, job_title, job_start, job_end } = jobsData

        return (<section className="form-box">
            <p className="title"> Work Experince </p>
            <div className="form-inputs">
                <div className="form-inputs">
                    <input name="job" value={job} onChange={this.handleChange} />
                    <input name="job_title" value={job_title} onChange={this.handleChange} />
                    <input name="job_start" value={job_start} onChange={this.handleChange} />
                    <input name="job_end" value={job_end} onChange={this.handleChange} />
                </div>
            </div>
            <div onClick={this.handleClick} a-id={jobsData.id} className="btn"> Delete </div>


        </section>)
    }
}

export default CompanyForm;