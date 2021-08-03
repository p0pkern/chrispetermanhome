import React from "react"
import me from "../../imgs/me.jpg"
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const Sidebar = ({ color }) => {
    const email = "chrispeterman1987@gmail.com"

    return (
        <>
            <div className="sidebar"
                style={{backgroundColor : color}}>
                    <img src={me} alt="This is me, Chris Peterman"></img>
                <ul style={{backgroundColor : color}}>
                    <li className="list-title">Location:</li>
                        <li>Brooklyn, NY, 11201
                            <br></br>
                            Open to local and remote work!
                        </li>
                        <li className="list-title">Contact:</li>
                        <li><a href="mailto:chrispeterman1987@gmail.com"><AiOutlineMail/></a></li>
                        <li>chrispeterman1987@gmail.com</li>
                        <li className="list-title">Links:</li>
                        <div className="icon-links">
                            <li><a target="_blank" href="https://github.com/p0pkern"><AiOutlineGithub/></a>Github</li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/chris-peterman-464005ba/"><AiOutlineLinkedin/></a>Linkedin</li>
                        </div>
                </ul>
                
            </div>
        </>
    )
}

export default Sidebar