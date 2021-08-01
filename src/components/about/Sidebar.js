import React from "react"

const Sidebar = ({ color }) => {

    return (
        <>
            <div className="sidebar"
                style={{backgroundColor : color}}><img alt="This is me, Chris Peterman"></img>
                <ul style={{backgroundColor : color}}>
                    <li className="list-title">Location:</li>
                        <li>Brooklyn, NY, 11201
                            <br></br>
                            Open to local and remote work!
                        </li>
                        <li className="list-title">Contact:</li>
                        <li>Email Placeholder</li>

                        <li className="list-title">Links:</li>
                        <div className="icon-links">
                            <li>Github</li>
                            <li>Linkedin</li>
                        </div>
                </ul>
                
            </div>
        </>
    )
}

export default Sidebar