import React from "react"
import Shape from "./Shape"

const Shapes = () => {
    let shapeList = []
    for (let i=0; i < 50; i++) {
        shapeList.push(<Shape keyValue={i}/>)
    }
    return (
        <ul className="shapes">
            {shapeList.map(circle => circle)}
        </ul>
    )
}

export default Shapes