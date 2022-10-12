import React, { Component } from "react";
import email from "./svgs/email.svg"
import phone from "./svgs/phone.svg"
import city from "./svgs/city.svg"

class Cv_Preview extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const { data } = this.props

        return (<div>
            <header className="header">
                <div>
                    <h1>{data.name}</h1>
                    <h3> {data.title} </h3>

                </div>
                <ul className="list">

                    <li>
                        <img className="icon" alt='phone' src={phone} />
                        <span> {data.phone} </span>
                    </li>
                    <li>
                        <span>
                            <img className="icon" alt='email' src={email} />
                            {data.email}
                        </span>

                    </li>
                    <li>

                        <span>
                            <img className="icon" alt='city' src={city} />
                            {data.city}
                        </span>
                    </li>
                </ul>
            </header>
            <p className="paragraph"> {data.bio}</p>

            <main className="experience">
                {data.jobs.length > 0 &&
                    <section>
                        <h2> Work Experience </h2>
                        {data.jobs.map(j =>
                            <div className="box">
                                <h3> {j.job}</h3>
                                <p> {j.job_title}</p>
                                <p> {j.job_start} - {j.job_end}</p>
                                <p> {j.job_bio} </p>
                            </div>)}

                    </section>}
                {data.schools.length > 0 &&
                    < section >
                        <h2> Education </h2>
                        {data.schools.map(s =>
                            <div className="box">
                                <h3> {s.school}</h3>
                                <p> {s.school_title}</p>
                                <p> {s.school_start} - {s.school_end} </p>

                            </div>)}

                    </section>
                }


            </main>


        </div>);
    }
}

export default Cv_Preview;