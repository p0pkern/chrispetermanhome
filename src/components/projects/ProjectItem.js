import React from "react"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"

const ProjectItem = ({ color, number, title, image, alt, description, lang1, lang2, lang3, github, demo }) => {
    let colorOne = "#CDCDCD";
    let colorTwo = "#626D71";

    return (
       <div className="proj-container" style={{backgroundColor: number % 2 === 0 ? colorTwo: colorOne}}>
        <li>
            <div className="top-portion">
                <h3 className="item-title">{title}</h3>

                <div className="icons-container">
                    <div className="icons-titles">
                        <p>Github</p>
                        {demo ? <p>Demo</p> : ""}
                    </div>
                    <div className="icons">
                        <a target="_blank" href={github}><AiFillGithub /></a>
                        {demo ? <a target="_blank" href={demo}><AiOutlineLink /></a> : ""}
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

export default ProjectItem