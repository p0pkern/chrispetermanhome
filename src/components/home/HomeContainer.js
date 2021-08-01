import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Shapes from "./Shapes"
import "../../styles/home.css"

const HomeContainer = ({ color }) => {

    return (
        <div className="container">
            <Shapes color={color} />
            <Header color={color} />
            <Footer color={color} />
        </div>
    )
}

export default HomeContainer