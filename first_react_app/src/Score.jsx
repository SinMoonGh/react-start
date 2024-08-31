import React, { useState, useEffct } from 'react';

export default function Score(params) {
    const [score, setScore] = useState({score1P:0, score2P:0})
    
    const Score1pUp = () => {        
        setScore((prevScore) => ({
            ...prevScore,
            score1P: prevScore.score1P + 1,
        }));
    }

    const Score2pUp = () => {        
        setScore((prevScore) => ({
            ...prevScore,
            score2P: prevScore.score2P + 1,
        }));
    }
    
    return (
        <>
        <h3>Score 1p : {score.score1P}</h3>
        <h3>Score 2p : {score.score2P}</h3>

        <button onClick={Score1pUp}>Score 1p</button>
        <button onClick={Score2pUp}>Score 2p</button>
        </>
    )
}