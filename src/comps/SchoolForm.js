import React, { Component } from "react";
import Buttons from "./buttons";

class SchoolForm extends Component {
    constructor(props) {
        super();
        this.state = {};
    }



    render() {
        const { schoolData, removeEntry, addEntry } = this.props;

        const { school, school_title, school_start, school_end, id } = schoolData
        let today = new Date()
        const buttonData = { id: id, removeEntry, addEntry }

        return (
            <section className="form-box" a-id={id} name='schools'>
                <p className="title"> Education</p>
                <div className="form-inputs">
                    <input placeholder="School Name" value={school} name="school" />
                    <input placeholder="Subject Title" value={school_title} name="school_title" />
                    <input type="number" min="1940" placeholder="Starting Year" value={school_start} name="school_start" />
                    <input placeholder="Ending Year" type="number" min="1940" max={today.getFullYear() + 5} value={school_end} name="school_end" />
                </div>
                <Buttons data={buttonData}></Buttons>


            </section>
        );
    }
}

export default SchoolForm;
