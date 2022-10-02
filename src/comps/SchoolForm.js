import React, { Component } from "react";
import Buttons from "./buttons";

class SchoolForm extends Component {
    constructor(props) {
        super();
        this.state = {};
    }



    render() {
        console.log(this.props);
        const { schoolData, removeEntry } = this.props;
        const { school, school_title, school_date, id } = schoolData
        const buttonData = { id: id, removeEntry }
        return (
            <section className="form-box" a-id={id} name='schools'>
                <p className="title"> Education</p>
                <div className="form-inputs">
                    <input value={school} name="school" />
                    <input value={school_title} name="school_title" />
                    <input value={school_date} name="school_date" />
                </div>
                <Buttons data={buttonData}></Buttons>


            </section>
        );
    }
}

export default SchoolForm;
