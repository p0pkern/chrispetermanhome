// Standard imports
import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// App page style
import "./styles/app.css"
import "./styles/about.css"
//import "./styles/projects.css"

// Home Page Route Components
import HomeContainer from "./components/Home/HomeContainer"

// About Page Route Components
import AboutContainer from "./components/about/AboutContainer"

// Projects Page Route Components
import ProjectsList from "./components/projects/ProjectsList"

// Navigation.
import Navbar from "./components/Navbar/Navbar"

function App() {

  const color = "#626D71"
    
  // Cursor animation
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = {damping: 30, stiffness: 1000};
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
  }, [cursorX, cursorY])

   return (
    <Router>
      <div>
          <motion.div className="cursor" style={{translateX: cursorXSpring, translateY: cursorYSpring,
                                      backgroundColor: "white"}}/>
        <Switch>
          <Route path="/chrispetermanhome/about">
            <Navbar color={color} />
            <About color={color} />
          </Route>
          <Route path="/chrispetermanhome/projects">
            <Navbar color={color} />
            <Projects color={color} />
          </Route>
          <Route path="/chrispetermanhome">
            <Navbar color={color} />
            <Home color={color} />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

function Home({color}) {
  return <HomeContainer/>
}

function About({color}) {
  return <AboutContainer color={color}/>
}

function Projects({color}) {
  return <ProjectsList color={color}/>
}

export default App;
