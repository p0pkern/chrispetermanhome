import React from "react"
import Logo from "../Logo/Logo"
import Footer from "../Footer/Footer"
import Shapes from "../Shapes/Shapes"
import "./Home.css"

/**
 * Container object taht produces the homepage. Shapes generates the floating shapes in the background.
 * Header provides the top header portion of the page. Footer contains the bottom bar of color.
 */

const HomeContainer = ({ color }) => {

    return (
        <div className="container">
            <Shapes />
            <Logo  />
            <Footer />
        </div>
    )
}

export default HomeContainer
