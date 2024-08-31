import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Scoreboard({user, winScore}) {
    // 1번 유저 출력
    // 1번 유저의 점수 출력
    // 1번 유저의 점수 증가 버튼 만들기
    // 버튼 클릭 시 유저 점수 1증가

    // ToDo : 1 ~ 10번 유저 만들기
    // 1 ~ 10번까지 배열?
    // 유저를 10번까지 화면에 출력하기
    // user를 1 -> 2 -> 3 씩 담기
    // 각 index에 접근해서 score를 어떻게 올릴 것인가?
    // 배열의 모든 원소에 접근해서 값을 초기화

    // 일정 점수를 획득하면 win 출력
    // 점수 도달을 어떻게 알지?
    // 누군가가 win 스코어를 달성하면 모든 점수 초기화

    const initializeScores = (userCount) => {
        return Array(userCount).fill(0);
    }    
    
    // const UserArr = Array(user).fill(0);    
    const [scores, setScore] = useState(initializeScores(user))
    const ScoreUp = (index) =>{
        const newScores = [...scores];
        newScores[index] += 1;        
        setScore(newScores);
    }
    const resetScore = () => {
        setScore(initializeScores(user));
    };    

    return (
        <>        
        {scores.map((score, index) => (
            <div key={index}>
                <h2>{index + 1}번 유저 : {score}</h2>
                {score >= winScore && <h3>You win!</h3>}
                <button onClick={() => ScoreUp(index)}>+1 점수 올리기</button>
            </div>
        ))}
        <button onClick={resetScore}>reset</button>
        </>
    )
}