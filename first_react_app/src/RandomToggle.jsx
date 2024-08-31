import React, { useState } from 'react';

function randomEmoji(Rtogle) {
    const randomIdx = Math.floor(Math.random() * Rtogle.length)
    return randomIdx
}

export default function RandomTogle({TogleArr}) {
    // 이모티콘 화면에 띄우기
    // 클릭 할 때마다 이모티콘 변경
    // 이모티콘은 무작위로 
    // 무작위로 이모티콘 하나를 뽑기  
    
    const [togle, setTogle] = useState(randomEmoji(TogleArr))
    const ChangeTogle = () => {
        setTogle(randomEmoji(TogleArr))
    }
    
    return (
        <>
        <h1 onClick={ChangeTogle}>{TogleArr[togle]}</h1>
        </>
    )
}