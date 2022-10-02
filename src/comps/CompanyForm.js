import React, { Component } from "react";
import Buttons from "./buttons";

import "../styles/styles.css";
class CompanyForm extends Component {
    constructor() {
        super();

        this.state = {};
    }




    render() {
        const { jobsData, removeEntry } = this.props;
        const { job, job_title, job_start, job_end, id } = jobsData;
        const buttonData = { id: id, removeEntry }
        return (
            <section className="form-box" a-id={id} name="jobs">
                <p className="title"> Work Experince </p>

                <div className="form-inputs">
                    <input name="job" value={job} />
                    <input name="job_title" value={job_title} />
                    <input name="job_start" value={job_start} />
                    <input name="job_end" value={job_end} />
                </div>

                <Buttons data={buttonData}></Buttons>
            </section>
        );
    }
}

export default CompanyForm;
