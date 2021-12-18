import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

/**
 * The top navigation bar that appears on every page. Uses React Router to async
 * navigate to every page in the app.
 */
const Navbar = () => {
    return (
        <ul className="navlist">
            <li><Link   onClick={() => console.log("hello")}
                        className="nav-button"
                        alt="Go to home page"
                        to="/chrispetermanhome">Home</Link></li>
            <li><Link   onClick={() => console.log("hello 2")}
                        className="nav-button"
                        alt="A page of three projects"
                        to="/chrispetermanhome/projects">Projects</Link></li>
        </ul>
    )
}

export default Navbar
