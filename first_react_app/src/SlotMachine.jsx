export default function SlotMachine(params) {
    const food = ["a", "b", "c"]
    const slot_1 = food[Math.floor(Math.random() * food.length)];
    const slot_2 = food[Math.floor(Math.random() * food.length)];
    const slot_3 = food[Math.floor(Math.random() * food.length)];

    const isJackpot = slot_1 === slot_2 && slot_2 === slot_3;
    
    return (
        <>
        <h1>{slot_1} {slot_2} {slot_3}</h1>

        {isJackpot ? <h3 style={{color:"green"}}>축하합니다.</h3> : <h3 style={{color:"blue"}}>다시 도전하세요</h3>}
        {}        
        </>
    );
}

