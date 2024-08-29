import "./ColorBox.css"
import React, { useState, useEffct } from 'react';

export default function ColorBoxs({boxColor}) {
    const randomColor = boxColor[Math.floor(Math.random() * boxColor.length)]; 
    const [color, setColor] = useState(randomColor);
    const ChangeColor = () => {
        setColor(boxColor[Math.floor(Math.random() * boxColor.length)])
    }
        
    return (
        <>
        <div className="boxs" onClick={ChangeColor} style={{backgroundColor:color}}></div>        
        </>
    )
}