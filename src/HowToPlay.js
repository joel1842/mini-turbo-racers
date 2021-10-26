import React from "react";
import "./css/howtoplay.css";
import howToPlayTitle from "./img/how to play.png";
import {
    Link
  } from "react-router-dom";

const HowToPlay = () => {
    return(
        <div>
            <div className="howToPlay">
                <img src={howToPlayTitle} alt="How To Play" />
                <div className="rulesContainer">

                    <h3>Place a bet!</h3>
                    <p>Place a bet on the car you think will win! or you can bet on the car you like the most!</p>

                    <h3>Power-ups</h3>
                    <p>Power ups randomly spawn on the track for cars to pick up, or you can buy power-ups for your car! Buying a power-up will give your car a boost, but don’t spend all your money!</p>

                    <h3>Roadblocks</h3>
                    <p>Oil spills spawn on the track to slow down your car and other cars! You can buy an oil spill to slow down the car in first place!</p>

                    <h3>How do I win coins?</h3>
                    <p>You win or lose coins based on what place your car comes in!</p>
                    <div className='positionEarnings'>
                        <h4>#1 – the coins you bet are doubled!</h4>
                    </div>
                    <div className='positionEarnings'>
                        <h4>#2 – you win 1.25x the coins you bet!</h4>
                    </div>
                    <div className='positionEarnings'>
                        <h4>#3 – you get back half of the coins you bet</h4>
                    </div>
                    
                    <h3>Win Streak!</h3>
                    <p>If you win more than twice in a row, you will start a win streak! The more you win in a row, the more coins you make per win!</p>
                </div>

                <div className='buttonContainer'>
                        <Link to="/">
                            <button className='homeButton'>Go Home</button>
                        </Link>
                        <Link to="/track">
                            <button className='start-Button'>Start Game!</button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default HowToPlay;