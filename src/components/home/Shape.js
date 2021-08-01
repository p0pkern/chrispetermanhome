import React from "react"

const Shape = () => {
    const backgroundColorList = ["626D71", "#DDBC95", "#CDCDCD", "#B38867"]
    const size = Math.floor(Math.random() * 100)

    const styleRandom = {
        left : `${Math.floor(Math.random() * 100)}%`,
        width : size,
        height : size,
        animationDelay: `${Math.floor(Math.random() * 3)}s`,
        animationDuration: `${Math.floor(Math.random() * 60 + 10)}s`,
        borderRadius: `50%`,
        backgroundColor: `${backgroundColorList[Math.floor(Math.random() * backgroundColorList.length)]}`,
    }

    return (
        <li style={styleRandom}></li>
    )
}

export default Shape