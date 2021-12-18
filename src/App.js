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
//import "./styles/about.css"

// Home Page Route Components
import HomeContainer from "./components/Home/HomeContainer"

// About Page Route Components
import AboutContainer from "./components/about/AboutContainer"

// Projects Page Route Components
import ProjectsList from "./components/Projects/ProjectsList"

// Navigation.
import Navbar from "./components/Navbar/Navbar"

// Footer
import Footer from "./components/Footer/Footer"

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
            <Home />
          </Route>
          <Route path="/chrispetermanhome/projects">
            <Projects />
          </Route>
          <Route path="/chrispetermanhome">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
       <Navbar />
       <HomeContainer/>
       <Footer />
    </div>
)
}

function About() {
  return (
     <div>
        <Navbar />
        <AboutContainer />
     </div>
  )
}

function Projects() {
  return (
     <div>
        <Navbar />
        <ProjectsList />
     </div>
  )
}

export default App;
