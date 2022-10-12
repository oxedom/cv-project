
import React, { Component } from "react";

class Buttons extends Component {
    constructor(props) {
        super()
    }

    handleDeleteClick = (e) => { this.props.data.removeEntry(); };



    render() {
        const { data } = this.props
        const { id } = data

        return (
            <div>
                <div onClick={this.handleDeleteClick} a-id={id} className="btn danger" >
                    {" "}
                    Delete{" "}
                </div>



            </div>
        );
    }


}

export default Buttons
