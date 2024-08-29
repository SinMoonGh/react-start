import React, { useState } from 'react';

function Hello({number}) {
    const list = number.map((number) => <h3 style={{color:number}}>{number}</h3>)
    return (        
        <>        
        <h1>hello, wellcome!</h1>
        {list}
        </>
    ); 
}

export function CoinGame(){
    const coin = Math.floor(Math.random() * 3);
    const text_list = [<h1>안녕하세요</h1>, <h1>반가워요</h1>, <h1>잘 있어요</h1>]
    const color_list = ['green', 'yellow', "blue"]
    const fontSize_list = ["20px", '30px', '40px']
    const change_color = {
        color: color_list[coin],
        fontSize: fontSize_list[coin],
    };
    
    return (
        <>
        <h3 style={change_color}>{text_list}</h3>
        
        </>
    );       
}

function ClickEvent(num) {
    num += 1
    console.log(num)    
}

export function Click() {
    const [num, setNum] = useState(0);
    
    const NumberUp = () => {
        // num += 1
        setNum(num => num + 1)
        console.log(num)
    }

    return (
        <>
        <button onClick={NumberUp}>Click me {num}</button>
        </>
    );
}

function SubmitEvent(params) {
    params.preventDefault();
    console.log("새로고침")
}

export function Submit(params) {
    
    return (
        <form onSubmit={SubmitEvent}>
            <button>Submit</button>
        </form>        
    );
}

export default Hello