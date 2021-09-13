import React from "react"

/**
 * This contains the text content of the About Me page that is placed in the right middle
 * section of the document.
 */
const Content = () => {
    return (
        <div className="content-contents">
            <h3>Chris Peterman</h3>
            <dl>
                <dt className="list-title">About Me</dt>
                    <dd>I am a Brooklyn based college student projected to graduate June 2022.
                        When I'm not coding. I enjoy running, reading, writing, and exploring the city.
                    </dd>
                <dt className="list-title">Education</dt>
                    <dd>Oregon State University - Bachelor of Science in Computer Science, Currently Enrolled</dd>
                <dt className="list-title">Relevant Experience</dt>
                    <dt className="re-title">Oregon State University - Teaching Assistant: January 2021 - Current</dt>
                        <dd>Assisted with helping instructors in web development course.</dd>
                <dt className="list-title">Skills</dt>
                    <dt>Languages</dt>
                        <dd>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                                <li>Python</li>
                            </ul>
                        </dd>
                    <dt>Utilities</dt>
                        <dd>
                            <ul>
                                <li>Visiual Studio Code</li>
                                <li>Pycharm</li>
                                <li>Git/Github</li>
                            </ul>
                        </dd>
                
            </dl>
        </div>
    )
}

export default Content