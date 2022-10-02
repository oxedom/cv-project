import React, { Component } from "react";

class Buttons extends Component {
    constructor(props) {
        super()
    }

    handleDeleteClick = (e) => {

        let id = e.target.getAttribute("a-id");
        let name = e.target.parentNode.parentNode.getAttribute('name')
        this.props.data.removeEntry(id, `${name}`);
    };



    render() {
        const { data } = this.props
        const { id } = data

        return (
            <div>
                <div onClick={this.handleDeleteClick} a-id={id} className="btn">
                    {" "}
                    Delete{" "}
                </div>

                <div className="btn" onClick={this.handleAddClick}> Add  </div>

            </div>
        );
    }


}

export default Buttons
