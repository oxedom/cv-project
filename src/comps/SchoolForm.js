import React, { Component } from "react";

class SchoolForm extends Component {
    constructor(props) {
        super();
        this.state = {};
    }

    handleClick = (e) => {
        let id = e.target.parentNode.getAttribute("a-id");
        this.props.removeEntry(id, "schools");
    };

    render() {
        const { schoolData } = this.props;
        const { school, school_title, school_date, id } = schoolData

        return (
            <section className="form-box" a-id={id} name='schools'>
                <p className="title"> Education</p>
                <div className="form-inputs">
                    <input value={school} name="school" />
                    <input value={school_title} name="school_title" />
                    <input value={school_date} name="school_date" />
                </div>

                <div onClick={this.handleClick} a-id={schoolData.id} className="btn">
                    {" "}
                    Delete{" "}
                </div>
            </section>
        );
    }
}

export default SchoolForm;
