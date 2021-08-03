import React from "react"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"

const ProjectItem = ({ color, number, title, image, alt, description, lang1, lang2, lang3, github, demo }) => {
        let colorOne = "DDBC95";
        let colorTwo = "B38867";
    // Hover Home
    if (color === "#626D71") {
        colorOne = "#626D71";
        colorTwo = "#CDCDCD";

    // Hover Projects
    } else if (color === "#DDBC95") {
        colorOne = "#DDBC95";
        colorTwo = "#B38867";

    // Hover About
    } else if (color === "#B38867") {
        colorOne = "#B38867";
        colorTwo = "#DDBC95";
    }

    return (
       <div className="proj-container" style={{backgroundColor: number % 2 === 0 ? colorOne: colorTwo}}>
        <li>
            <div className="top-portion">
                <h3 className="item-title">{title}</h3>

                <div className="icons-container">
                    <div className="icons-titles">
                        <p>Github</p>
                        <p>Demo</p>
                    </div>
                    <div className="icons">
                        <a target="_blank" href={github}><AiFillGithub /></a>
                        <a target="_blank" href={demo}><AiOutlineLink /></a>
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