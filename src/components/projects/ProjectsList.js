import React from "react"
import ProjectItem from "./ProjectItem"
import homepage from "../../imgs/homepagegif.gif"
import mybabies from "../../imgs/mybabies.gif"
import megahive from "../../imgs/megahive.gif"

const ProjectsList = ({color}) => {
    return (
        <ul>
            <ProjectItem number="1"
                         title="Personal Website" 
                         image={homepage} 
                         alt="Home screen of my portfolio website"
                         description="This is my homepage portfolio website. It is a single page multi-route app that links to a home page, about me section, and a projects page."
                         lang1="React.js"
                         lang2="JavaScript"
                         lang3="HTML/CSS"
                         color={color}
                         github="https://github.com/p0pkern/chrispetermanhome"
                         demo="/"/>
            <ProjectItem number="2"
                         title="My Babies" 
                         image={mybabies} 
                         alt="A gif of My Babies web game"
                         description="This is a small game created for the Oregon State University summer hackathon. The premise of the game is you are a mother beaver trying to keep your scrambling children from wandering into the pools of fire."
                         lang2="HTML/CSS"
                         lang3="JavaScript"
                         color={color}
                         github="https://github.com/p0pkern/myBabies"
                         demo="https://p0pkern.github.io/myBabies/"/>
            <ProjectItem number="3"
                         title="Mega Hive" 
                         image={megahive}
                         alt="A gif of the endgame of MegaHive"
                         description="An idle clicker genre game. I wanted to experiment with the math and timing involved with an idle clicker and get some experience with React. You progress through harvesting and eventually fighting bigger bugs for meat. Once you reach a certain point you can sacrifice your units to gain boosts on the next run."
                         lang1="React.js"
                         lang2="HTML/CSS"
                         lang3="JavaScript"
                         color={color}
                         github="https://github.com/p0pkern/Mega-Hive"
                         demo="https://p0pkern.github.io/Mega-Hive/"/>
        </ul>
    )
}

export default ProjectsList