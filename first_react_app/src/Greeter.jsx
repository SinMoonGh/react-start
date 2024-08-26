function Hello({number2, number, number3}) {
    const list = number[1]
    return (        
        <>
        <h2>{console.log(number2, list, number3)}</h2>
        <h1>hello, wellcome!</h1>
        </>
    ); 
}

export function CoinGame(){
    const coin = Math.floor(Math.random() * 2) + 1;

    if (coin == 1){
        return(
            <h3>앞면</h3>
        );
    }else{
        return(
            <h3>뒷면</h3>
        );
    }   
    
}

export default Hello