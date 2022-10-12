
import React, { Component, useState, useEffect } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import SchoolForm from './SchoolForm'
import CompanyForm from "./CompanyForm";
import Cv_Preview from "./Cv_preview";

const Cv = () => {


    const [personal, setPersonal] = useState({
        id: uniqid(),
        name: "Avi Cohen",
        title: "Software engineer",
        email: "bigdog@gmail.com",
        phone: "0542313112",
        city: "London, UK",
        bio: "Software engineer from Scotland, have 5 degrees from MIT and I love solving problems, HATE SQL but am a wizard at it",
    })

    const [schools, setSchools] = useState([
        {
            id: uniqid(),
            school: "Oxford Universty",
            school_title: 'B.SC in Computer Science',
            school_start: "2016",
            school_end: "2019"
        }])

    const [jobs, setJobs] = useState([{
        id: uniqid(),
        job: "Intel Corporation",
        job_title: "Software engineer",
        job_start: "2020",
        job_end: "2022",
        job_bio: "I maintained the ICP EU unit and was a a lead Dev ensuring that the team will hit all marks by deadlines"
    }])


    //Removes entry by from array by it's ID
    const removeEntry = (id, setter) => {
        setter((prevState) => {

            let filter = prevState.filter(e => { return e.id !== id })

            return (([...filter]))

        })

    }

    //Creates an object with an ID for adding a new section either education or work
    //updates the state by using spreadsyntax 
    const addEntry = (setter) => {

        let entry = { id: uniqid() }

        setter((prevState) => ([...prevState, entry]))

    };

    // setter([...oldSchools], entry)
    const handleAddClick = (setter) => { addEntry(setter) }

    //Handles State updating for objects in array
    const handleChange = (e, setter) => {

        const { value, name } = e.target

        let arrayID = e.target.parentNode.parentNode.getAttribute('a-id')

        // let arrayName = e.target.parentNode.parentNode.getAttribute('name')



        setter((prevState) => {

            let targetArray = prevState.filter(e => { return e.id === arrayID })
            let OtherArrays = prevState.filter(e => { return e.id !== arrayID })
            targetArray = targetArray[0]
            targetArray[name] = value

            return (([...OtherArrays, targetArray]))

        })


        // setState({ [arrayName]: [...OtherArrays, targetArray] })

    }
    //Handles State updating for the non array data in the state. 
    const handlePersonal = (e) => {

        let text = e.target.value
        let name = e.target.getAttribute('name')
        setPersonal((prevState) => ({ ...prevState, [name]: text, }))
    }

    const handlePrint = (e) => {
        //Quick easy Vanlia JS solution to handle Printing the CV, a bit expensive querying the DOM but because the app is so small
        //I will ALOW it. 

        let print = document.getElementsByClassName('printBtn')[0]
        let creator = document.getElementsByClassName('cv_creator')[0]
        let preview = document.getElementsByClassName('cv_preview')[0]
        let footer = document.getElementsByClassName('footer')[0]

        footer.classList.add('hide')
        creator.classList.add('hide')
        print.classList.add('hide')
        preview.parentNode.classList.remove('dvider')

        window.print();
        setTimeout(() => {
            footer.classList.remove('hide')
            creator.classList.remove('hide')
            print.classList.remove('hide')
            preview.parentNode.classList.add('dvider')
        }, 0);

    }



    return ((<div className="wrapper">

        <main className="dvider">
            <div className="cv_creator">
                <form className="page">

                    <Form key={personal.id} handler={handlePersonal} personalData={personal} />

                    <div >

                        {schools.map(s => <SchoolForm handleChange={(e) => handleChange(e, setSchools)} key={s.id} onChange={(e) => handleChange(e, setSchools)} removeEntry={(e) => { removeEntry(s.id, setSchools) }} schoolData={s} > </SchoolForm>)}

                        <div className="btn" onClick={(e) => handleAddClick(setSchools)} name="schools" > Add Education  </div>
                        {jobs.map(j => <CompanyForm handleChange={(e) => handleChange(e, setJobs)} key={j.id} onChange={(e) => { handleChange(e, setJobs) }} removeEntry={(e) => { removeEntry(j.id, setJobs) }} jobsData={j} > </CompanyForm>)}
                        <div className="btn" onClick={(e) => handleAddClick(setJobs)} name="jobs" > Add Work Experince  </div>
                    </div>


                </form>

            </div >
            <div className="cv_preview">
                <button className="printBtn" onClick={handlePrint}> Print </button>
                <Cv_Preview data={{ ...personal, schools, jobs }} />

            </div>
        </main>

        <footer className="footer">
            <a href="https://github.com/oxedom"> Github </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
        </footer>
    </div>));
}

export default Cv;
