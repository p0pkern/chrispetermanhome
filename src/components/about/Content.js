import React from "react"


const Content = () => {
    return (
        <div className="content-contents">
            <h3>Chris Peterman</h3>
            <dl>
                <dt className="list-title">About Me</dt>
                    <dd>I am a Brooklyn based college student projected to graduate June 2022. 
                        I am looking for the opportunity to join your team as an intern or junior/entry level software developer. 
                        Through my course work and personal project I have utilized React.js, JavaScript, Python, and MySQL.
                    </dd>
                <dt className="list-title">Education</dt>
                    <dd>Oregon State University, Remote - Bachelor of Science in Computer Science, Currently Enrolled</dd>
                <dt className="list-title">Volunteer Experience</dt>
                    <dd>Oregon State Hackathon: Summer 2021</dd>
                <dt className="list-title">Relevant Experience</dt>
                    <dt className="re-title">Oregon State University - Teaching Assistant: January 2021 - Current</dt>
                        <dd>Assisted with helping instructors in web development course.</dd>
                    <dt className="re-title">STS Staffing - Admin: January 2018 - June 2021</dt>
                        <dd>Handled the administrative.</dd> 
                <dt className="list-title">Languages</dt>
                    <dd>
                        <ul>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Python</li>
                        </ul>
                    </dd>
            </dl>
        </div>
    )
}

export default Content