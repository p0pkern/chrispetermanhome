import React from "react"
import { Link } from "react-router-dom"

const Navbar = ({ color, changeColor }) => {
    return (
        <ul className="navlist" style={{backgroundColor: color}}>
            <li><Link className="btn-one" 
                        onClick={() => console.log("hello")}
                        style={{backgroundColor: color}}
                        onMouseEnter={() => changeColor("btn-one")}
                        onMouseLeave={() => changeColor("")}
                        alt="Go to home page"
                        to="/chrispetermanhome">Home</Link></li>
            <li><Link className="btn-two" 
                        onClick={() => console.log("hello 2")}
                        style={{backgroundColor: color}}
                        onMouseEnter={() => changeColor("btn-two")}
                        onMouseLeave={() => changeColor("")}
                        alt="A page of three projects"
                        to="/chrispetermanhome/projects">Projects</Link></li>
            <li><Link className="btn-three" 
                        onClick={() => console.log("hello 3")}
                        style={{backgroundColor: color}}
                        onMouseEnter={() => changeColor("btn-three")}
                        onMouseLeave={() => changeColor("")}
                        alt="about the author"
                        to="/chrispetermanhome/about">About</Link></li>
        </ul>
    )
}

export default Navbar