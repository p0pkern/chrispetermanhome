import React, {useState} from "react"
import { AiFillGithub, AiOutlineLink, AiOutlineVerticalAlignMiddle, AiOutlineVerticalAlignBottom } from "react-icons/ai"
import {Link} from "react-router-dom"

const ProjectCard = (props) => {
    /* 
     * Provides all the formatting to generate an individual card for a project item.
     * Each item will have a number which associates their placement and coloration.
     * A title displayed in the upper left hand corner.
     * An image on the left hand side which is a Gif of the project.
     * A description of the project.
     * A list of the languages used for the project.
     * A link to the Github and Demo of the project if they exist.
    */
    
    const [expand, setExpand] = useState(false) 
    
    const expandCard = () => {
        setExpand(!expand)
    }   

    return (
      <div>
      {expand ? 
       <div className="proj-container" style={{backgroundColor: props.number % 2 !== 0 ? "#FFFFFF": "#F8F0E3"}}>
        <li>
            <div className="top-portion">
                <h3 className="expand-title" onClick={expandCard}>{props.title}</h3>
                <div className="icons-container">
                    <div className="icons">
                        {props.github ?<a target="_blank" rel="noreferrer" href={props.github}><AiFillGithub /></a> : ""}
                        {props.demo ? <a target="_blank" rel="noreferrer" href={props.demo}><AiOutlineLink /></a> : ""}
                    </div>
                </div>
            </div>

            <div className="image-desc">
                <img className="project-img" src={props.image} alt={props.alt}></img>
                <div className="project-desc">
                    <h4>About</h4>
                    <p>{props.description}</p>
                </div>
                <div className="languages-used">
                    <div className="languages-used-title">
                        <h4>Languages Used</h4>
                    </div>
                        {props.lang1 ? <p>{props.lang1}</p> : ""}
                        {props.lang2 ? <p>{props.lang2}</p> : ""}
                        {props.lang3 ? <p>{props.lang3}</p> : ""}
                </div>
           </div>
           
        </li>
        </div> :
        <div className="closed-card"  onClick={expandCard} style={{backgroundColor: props.number % 2 !== 0 ? "#FFFFFF": "#F8F0E3"}}>
           <h3 className="closed-card-title"  onClick={expandCard}>{props.title}</h3>
      </div>}
     </div>
    )
}

export default ProjectCard
