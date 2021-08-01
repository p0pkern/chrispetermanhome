// Standard imports
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// App page style
import "./styles/app.css"

// Home Page Route Components
import HomeContainer from "./components/home/HomeContainer"

// About Page Route Components
import AboutContainer from "./components/about/AboutContainer"

// Projects Page Route Components
import ProjectsContainer from "./components/projects/ProjectsContainer"

// Navigation.
import Navbar from "./components/Navbar"

function App() {
  const [color, setColor] = useState("626D71")

    const handleColorChange = (id) => {
        if (id === "btn-one") {
        setColor("#626D71");
        } else if (id === "btn-two") {
        setColor("#DDBC95");
        } else if (id === "btn-three") {
        setColor("#B38867");
        } 
    }
  
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    
    const springConfig = {damping: 50, stiffness: 400};
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 9)
        cursorY.set(e.clientY - 9)
      }
      window.addEventListener('mousemove', moveCursor)
      return () => {
        window.removeEventListener('mousemove', moveCursor)
      }
    }, [])

  return (
    <Router>
      <div>
        <Navbar color={color} changeColor={handleColorChange} />
        <motion.div className="cursor" style={{translateX: cursorXSpring, translateY: cursorYSpring,
                                        backgroundColor: "white"}}/>
        <Switch>
          <Route path="/about">
            <About color={color}/>
          </Route>
          <Route path="/projects">
            <Projects color={color}/>
          </Route>
          <Route path="/">
            <Home color={color}/>
            
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

function Home({color}) {
  return <HomeContainer color={color}/>
}

function About({color}) {
  return <AboutContainer color={color}/>
}

function Projects({color}) {
  return <ProjectsContainer color={color}/>
}

export default App;
