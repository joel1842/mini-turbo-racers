import React, { useEffect, useState } from 'react';
import './Leaderboard.css'
import crown from "./img/crown.png"
import coin from "./img/coin.png"
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import {ArrowBackIos} from '@mui/icons-material'

export const Leaderboard = () => {

    const [scores, setScores] = useState()
    const { user, isAuthenticated } = useAuth0()

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

    const [place, setPlace] = useState()
    const [name, setName] = useState()
    const [wins, setWins] = useState()
    const [coins, setCoins] = useState()

    useEffect(() => {
        if (scores && user) {
            scores.forEach((score, index) => {
                if (score.sub === user.sub) {
                    setPlace(index + 1)
                    setName(score.name)
                    setWins(score.wins)
                    setCoins(score.coins)
                }
            })
        }
    }, [scores, user])
    

    return (
        <div className='globalLeaderboard'>
            <Button variant="contained" color="primary">
                <ArrowBackIos fontSize='small'/>
                Go Back
            </Button>
            <h1>Global Leaderboard</h1>
            {scores && scores.slice(0, 10).map((score, index) => {
                return (
                    <div className="score">
                        <div>
                            <p className='info'>#{index + 1}</p>
                        </div>
                        <div>
                            <p className='info'>@{score.name}</p>
                        </div>
                        <div className='leaderboardWins'>
                            <img src={crown} alt="Wins" />
                            <p className='info'>{score.wins}</p>
                        </div>
                        <div className='coins'>
                            <img src={coin} alt="Coins" />
                            <p className='info'>{score.coins}</p>
                        </div>
                    </div>
                )
            })}
            
            {isAuthenticated &&
            <div>
                <p className='myScoreHead'>My Score</p>
                <div className='myScore'>
                    <div>
                        <p className='info'>#{place}</p>
                    </div>
                    <div>
                        <p className='info'>@{name}</p>
                    </div>
                    <div className='leaderboardWins'>
                        <img src={crown} alt="Wins" />
                        <p className='info'>{wins}</p>
                    </div>
                    <div className='coins'>
                        <img src={coin} alt="Coins" />
                        <p className='info'>{coins}</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}