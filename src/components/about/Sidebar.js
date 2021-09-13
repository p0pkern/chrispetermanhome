import React from "react"
import me from "../../imgs/me.jpg"
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

/**
 * Contains the content that will be in the sidebar of the about page.
 * This includes the text, images, and correpsonding links.
 */
const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                    <img src={me} alt="This is me, Chris Peterman"></img>
                <ul>
                    <li className="list-title">Location:</li>
                        <li>Brooklyn, NY, 11201
                            <br></br>
                            Open to local and remote work!
                        </li>
                        <li className="list-title">Contact:</li>
                        <li><a href="mailto:chrispeterman1987@gmail.com"><AiOutlineMail/></a></li>
                        <li className="list-title">Links:</li>
                        <div className="icon-links">
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/p0pkern"><AiOutlineGithub/></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chris-peterman-464005ba/"><AiOutlineLinkedin/></a></li>
                        </div>
                </ul>
                
            </div>
        </>
    )
}

export default Sidebar