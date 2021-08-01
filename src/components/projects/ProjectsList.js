import React from "react"
import ProjectItem from "./ProjectItem"

const ProjectsList = ({color}) => {
    return (
        <ul>
            <ProjectItem number="1"
                         title="Project 1" 
                         image="" 
                         alt="Project 1 image"
                         description="This is the first project"
                         lang1="JavaScript"
                         lang2="HTML/CSS"
                         color={color}/>
            <ProjectItem number="2"
                         title="Project 2" 
                         image="" 
                         alt="Project 2 image"
                         description="This is the second project"
                         lang1="React.js"
                         lang2="HTML/CSS"
                         lang3="JavaScript"
                         color={color}/>
            <ProjectItem number="3"
                         title="Project 3" 
                         image="" 
                         alt="Project 3 image"
                         description="This is the third project"
                         lang1="React.js"
                         lang2="HTML/CSS"
                         lang3="JavaScript"
                         color={color}/>
        </ul>
    )
}

export default ProjectsList