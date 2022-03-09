import React, { useEffect, useState } from 'react';

export const Leaderboard = () => {

    const [scores, setScores] = useState()

    useEffect(() => {

        const getLeaderboard = async () => {
            const response = await fetch('http://localhost:8800/score/leaderboard/', {
                method: 'GET', 
                          headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }
            })
            const responseData = (response.json())
            responseData.then((data) => {
                setScores(data)
            })
        }
        getLeaderboard()

    }, [])    

    return (
        <div>
            <h1>Global Leaderboard</h1>
            {scores && scores.map((score) => {
                return (
                    <h3>user {score.sub}, wins {score.wins}</h3>
                )
            })}
        </div>
    )
}