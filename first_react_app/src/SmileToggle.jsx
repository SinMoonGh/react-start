import React, { useState } from 'react';

export default function SmileTogle(params) {
    // countenance 값이 true 일 때 ^^
    // countenance 값이 false 일 때 ><
    const [countenance, setCountenance] = useState("true");
    const ChangeCountenance = () => setCountenance(!countenance)

    // + 버튼 누르면 count 값 1씩 증가시키기
    const [count, setCount] = useState(0);
    const CountUp = () => setCount(count => count +1)
    
    return (
        <>
        <button onClick={ChangeCountenance}>
            click me {countenance ? "^^" : "><"}
        </button>

        <h3>{count}</h3>
        <button onClick={CountUp}>Click me</button>
        </>
    )
}