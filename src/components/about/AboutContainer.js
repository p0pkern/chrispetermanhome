import React from "react"
import Sidebar from "../about/Sidebar"
import Content from "./Content"
// import "../../styles/about.css"

const AboutContainer = ({ color }) => {

    return (
        <>
            <div className="content-sidebar">
                <Sidebar color={color}/>
                <Content />
            </div>
        </>
    )
}

export default AboutContainer