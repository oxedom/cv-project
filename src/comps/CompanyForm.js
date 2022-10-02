import React, { Component } from "react";

import "../styles/styles.css";
class CompanyForm extends Component {
    constructor() {
        super();

        this.state = {};
    }
    handleClick = (e) => {
        let id = e.target.getAttribute("a-id");
        this.props.removeEntry(id, "jobs");
    };

    render() {
        const { jobsData } = this.props;
        const { job, job_title, job_start, job_end, id } = jobsData;

        return (
            <section className="form-box" a-id={id} name="jobs">
                <p className="title"> Work Experince </p>

                <div className="form-inputs">
                    <input name="job" value={job} />
                    <input name="job_title" value={job_title} />
                    <input name="job_start" value={job_start} />
                    <input name="job_end" value={job_end} />
                </div>

                <div onClick={this.handleClick} a-id={jobsData.id} className="btn">
                    {" "}
                    Delete{" "}
                </div>
            </section>
        );
    }
}

export default CompanyForm;
