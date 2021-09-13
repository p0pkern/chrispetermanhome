import React from "react"
import ProjectCard from "./ProjectCard"
import homepage from "../../imgs/homepagegif.gif"
import mybabies from "../../imgs/mybabies.gif"
import megahive from "../../imgs/megahive.gif"
import mazeHunter from "../../imgs/mazeHunter.gif"

const ProjectsList = ({color}) => {
    /**
     * Imports and creates all the necessary information to generate a project card.
     * Returns an organized list of project cards for display on the projects page.
     */
    return (
        <ul>
            <ProjectCard number="1"
                         title="Maze Hunter"
                         alt="A Gif of a maze being solved"
                         description="A maze solving program. The user chooses a start and end point on the grid with the option of adding 'barriers'. After hitting the search algorithm button the Maze Hunter will show every spot it checked and the end point. I wanted to get more familiar with the process of creating a GUI, Tests, and then linking the front and back end with Python. Since I'm TAing a data structures class I wanted to show a visualization of Breadth First Seach and Depth First Search. 
                                      I also wanted to create a program that could be expanded upon and scalable. With the possibilty of adding more features and search algorithms."
                         lang1="Python"
                         lang2="tkinter"
                         color={color}
                         github="https://github.com/p0pkern/mazeHunter"
                         image={mazeHunter}/> 
            <ProjectCard number="2"
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
            <ProjectCard number="3"
                         title="My Babies" 
                         image={mybabies} 
                         alt="A gif of My Babies web game"
                         description="This is a small game created for the Oregon State University summer hackathon. The premise of the game is you are a mother beaver trying to keep your scrambling children from wandering into the pools of fire."
                         lang2="HTML/CSS"
                         lang3="JavaScript"
                         color={color}
                         github="https://github.com/p0pkern/myBabies"
                         demo="https://p0pkern.github.io/myBabies/"/>
            <ProjectCard number="4"
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