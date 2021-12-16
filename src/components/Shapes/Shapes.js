import React from "react"
import Circle from "./Circle"
import "./Shapes.css"

/**
 *  Calls the circle JSX a predetermined amount of times and adds them to a list for
 *  processing.
 */
const Shapes = () => {

    let totalShapes = 50

    let shapeList = []
    for (let i=0; i < totalShapes; i++) {
        shapeList.push(<Circle shapeNumber={i}/>)
    }

    return (
        <ul className="shapes">
            {shapeList.map(circle => circle)}
        </ul>
    )
}

export default Shapes
