import React, { Component } from "react";
import Buttons from "./buttons";

import "../styles/styles.css";
class CompanyForm extends Component {
    constructor() {
        super();

        this.state = {};
    }




    render() {
        const { jobsData, removeEntry, addEntry } = this.props;
        const { job, job_title, job_start, job_end, id } = jobsData;
        const buttonData = { id: id, removeEntry, addEntry }
        let today = new Date()
        return (
            <section className="form-box" a-id={id} name="jobs">
                <p className="title"> Work Experience </p>

                <div className="form-inputs">
                    <input placeholder="Job Company" name="job" value={job} />
                    <input placeholder="Job title" name="job_title" value={job_title} />
                    <input placeholder="Job start" min="1950" name="job_start" value={job_start} />
                    <input placeholder="Job end" type="number" min="1950" max={today.getFullYear()} name="job_end" value={job_end} />

                </div>

                <Buttons data={buttonData}></Buttons>
            </section>
        );
    }
}

export default CompanyForm;
