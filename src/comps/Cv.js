import React, {Component} from "react"
import uniqid from "uniqid";
import Header from "./header";
import Form from "./Form";
class Cv extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {
        return (<div className="wrapper">
            <Header></Header>
            <main className="dvider">
                <div className="cv_creator">
                    <Form></Form>
                    <Form></Form>
                    <Form></Form>
                </div >
                <div className="cv_preview">


                </div>
         

            </main>

            <footer className="footer"> </footer>
        </div>)
    }
}


export default Cv;

// school: "",
// school_title: "",
// school_date: "",
// company: "",
//     company_title: "",
//         skills: [],
//             company_date: ""

//             name: "Sam",
//             mail: "bigdog@gmail.com",
//             number: "0542313112",           

                      
//             schools: [
//                 {
//                     // school: "Croford",
//                     // school_title: 'Software Engginer',
//                     // school_date: "2014-2016",
//                     // id: uniqid()
//                 }
//             ],
//             jobs: [
//                 {}
//             ],