import React from "react"

const Shape = ({keyValue}) => {
    const backgroundColorList = ["#626D71", "#DDBC95", "#B38867"]
    const size = Math.floor(Math.random() * 100 + 10)

    const styleRandom = {
        left : `${Math.floor(Math.random() * 200)}%`,
        width : size,
        height : size,
        animationDelay: `${Math.floor(Math.random() * 3)}s`,
        animationDuration: `${Math.floor(Math.random() * 60 + 10)}s`,
        borderRadius: `50%`,
        backgroundColor: `${backgroundColorList[Math.floor(Math.random() * backgroundColorList.length)]}`,
    }

    return (
        <li key={keyValue} style={styleRandom}></li>
    )
}

export default Shape