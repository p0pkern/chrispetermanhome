import React from "react"
import "../../styles/projectitem.css"

const ProjectItem = ({ color, number, title, image, alt, description, lang1, lang2, lang3 }) => {
        let colorOne = "red";
        let colorTwo = "blue";
        let colorText = "white";
    // Hover Home
    if (color === "#626D71") {
        colorOne = "#626D71";
        colorTwo = "#CDCDCD";
        colorText = "white";
    } else if (color === "#DDBC95") {
        colorOne = "#DDBC95";
        colorTwo = "#B38867";
        colorText = "white";
    } else if (color === "#B38867") {
        colorOne = "#B38867";
        colorTwo = "#DDBC95";
        colorText = "white";
    }

    return (
       <div style={{backgroundColor: number % 2 == 0 ? colorOne: colorTwo}}>
        <li>
            <h3 className="item-title">{title}</h3>
            <div className="image-desc">
                <img src={image} alt={alt}></img>
                <p>{description}</p>
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