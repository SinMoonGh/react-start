import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToggleClone() {
    // 토글 화면에 띄우기
    // 객체 복사하기
    //
    const TogleArr = [
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗",
        "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥",
        "😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😛", "😜",
        "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️"
    ];
    const randomTogle = ()=>{
        
        return TogleArr[Math.floor(Math.random() * TogleArr.length)]
    } 
    const [togle, setTogle] = useState([{ id: uuidv4(), emoji: randomTogle() }])
    const AddTogle = () => {
        // 새로운 이모티콘 객체 생성 (예시로 😁 추가)
        const newEmoji = { id: uuidv4(), emoji: randomTogle() };

        // 기존 배열에 새로운 이모티콘 추가
        setTogle([...togle, newEmoji]);
    };
    
    const PrintKey = (id) => {
        console.log(id)
        setTogle(togle.filter(emoji => emoji.id !== id));
        console.log(emoji => emoji.id !== id)        
    }
    
    return (
        <>
        {togle.map((emoji) => (            
            <h1 key={emoji.id} onClick={() => PrintKey(emoji.id)}>{emoji.emoji}</h1>
        ))}
        <button onClick={AddTogle}>이모티콘 추가</button>
        </>
    )
}