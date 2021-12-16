import React from "react"

/**
    This will produce a stylized shape for use in the react homepage. The shape will start below
    the page and slowly drift upward at a random speed and random size. 

    @param {The key of the current shape}
    @returns {A list JSX with with the @param as the key and the style}

    Currently only a circle is implemented. I have left room to expand to more shapes as I upgrade
    the website if I want. However, I like the look of the rising circles at the moment.

 */
const Circle = ({shapeNumber}) => {
    /**
        Creates a random style component used to assign to the list item that will be the shape.
        The colors are designated on the below theme. 
     */
    const shapeColorList = ["#0000FF", "#FF0000", "#FFFF00", "FF6600", "#00FF00", "#6600FF", "#000000", "#FFFFFF"] 
    const size = Math.floor(Math.random() * 100 + 10)
    const styleRandom = {
        left : `${Math.floor(Math.random() * 200)}%`,
        width : size,
        height : size,
        animationDelay: `${Math.floor(Math.random() * 3)}s`,
        animationDuration: `${Math.floor(Math.random() * 60 + 10)}s`,
        borderRadius: `50%`,
        backgroundColor: `${shapeColorList[Math.floor(Math.random() * shapeColorList.length)]}`,
        mixedBlendMode: 'difference'
    }

    return (
        <li key={shapeNumber} style={styleRandom}></li>
    )
}

export default Circle
