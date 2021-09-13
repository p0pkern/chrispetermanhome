import React from "react"
import Sidebar from "../about/Sidebar"
import Content from "./Content"

const AboutContainer = ({ color }) => {
    /**
     * Container that links to the About page. This will house the components of the main page and
     * Sidebar navigation.
     */
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