import React from "react"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"

const ProjectCard = ({number, title, image, alt, description, lang1, lang2, lang3, github, demo }) => {
    /** 
     * Provides all the formatting to generate an individual card for a project item.
     * Each item will have a number which associates their placement and coloration.
     * A title displayed in the upper left hand corner.
     * An image on the left hand side which is a Gif of the project.
     * A description of the project.
     * A list of the languages used for the project.
     * A link to the Github and Demo of the project if they exist.
    */
    return (
       <div className="proj-container" style={{backgroundColor: number % 2 === 0 ? "#626D71": "#CDCDCD"}}>
        <li>
            <div className="top-portion">
                <h3 className="item-title">{title}</h3>
                <div className="icons-container">
                    <div className="icons-titles">
                        {github ? <p>Github</p> : ""}
                        {demo ? <p>Demo</p> : ""}
                    </div>
                    <div className="icons">
                        {github ? <a target="_blank"  rel="noreferrer" href={github}><AiFillGithub /></a> : ""}
                        {demo ? <a target="_blank" rel="noreferrer" href={demo}><AiOutlineLink /></a> : ""}
                    </div>
                </div>
            </div>

            <div className="image-desc">
                <img className="project-img" src={image} alt={alt}></img>
                <div className="project-desc">
                    <h4>About</h4>
                    <p>{description}</p>
                </div>
                <div className="languages-used">
                    <div className="languages-used-title">
                        <h4>Languages Used</h4>
                    </div>
                        {lang1 ? <p>{lang1}</p> : ""}
                        {lang2 ? <p>{lang2}</p> : ""}
                        {lang3 ? <p>{lang3}</p> : ""}
                </div>
           </div>
           
        </li>
        </div>
    )
}

export default ProjectCard