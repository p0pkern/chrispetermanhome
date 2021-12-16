import React from "react"
import CenterText from "./CenterText"
import Footer from "./Footer"
import Shapes from "./Shapes"
import './home.css'

/**
 * Container object taht produces the homepage. Shapes generates the floating shapes in the background.
 * Header provides the top header portion of the page. Footer contains the bottom bar of color.
 */

const HomeContainer = ({ color }) => {

    return (
        <div className="container">
            <Shapes />
            <CenterText color={color} />
            <Footer color={color} />
        </div>
    )
}

export default HomeContainer
