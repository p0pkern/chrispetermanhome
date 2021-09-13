import React from "react"
import { Link } from "react-router-dom"

/**
 * The top navigation bar that appears on every page. Uses React Router to async
 * navigate to every page in the app.
 */
const Navbar = ({ color }) => {
    return (
        <ul className="navlist" style={{backgroundColor: color}}>
            <li><Link className="btn-one" 
                        onClick={() => console.log("hello")}
                        style={{backgroundColor: color}}
                        alt="Go to home page"
                        to="/chrispetermanhome">Home</Link></li>
            <li><Link className="btn-two" 
                        onClick={() => console.log("hello 2")}
                        style={{backgroundColor: color}}
                        alt="A page of three projects"
                        to="/chrispetermanhome/projects">Projects</Link></li>
            <li><Link className="btn-three" 
                        onClick={() => console.log("hello 3")}
                        style={{backgroundColor: color}}
                        alt="about the author"
                        to="/chrispetermanhome/about">About</Link></li>
        </ul>
    )
}

export default Navbar