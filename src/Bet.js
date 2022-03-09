import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./css/bet.css";
import { Car1Props } from "./Car1Props.js";
import { Car2Props } from "./Car2Props.js";
import { Car3Props } from "./Car3Props.js";
import coin from "./img/coin.png";
import car1Speed from './img/car1speed.png';
import car2Speed from './img/car2speed.png';
import car3Speed from './img/car3speed.png';
import { AuthenticationButton } from './buttons/Authentication';
import { useAuth0 } from "@auth0/auth0-react";
import crown from "./img/crown.png"
import { Leaderboard } from "./Leaderboard";

const Bet = (props) => {

    // get user
    const { user, isAuthenticated } = useAuth0()

    // default bet amount
    const [betPrice, setBet] = useState(250)

    const [lockBet, setLockBet] = useState(false)
    const [button1Color, setButton1Color] = useState("#98ff8f")
    const [button2Color, setButton2Color] = useState("#98ff8f")
    const [button3Color, setButton3Color] = useState("#98ff8f")

    // card switches
    const [showInfo, setShowInfo] = useState(true)
    const [showBet, setShowBet] = useState(false)
    const [showCars, setShowCars] = useState(false)

    const betSwitch = () => {
        setShowInfo(false)
        setShowBet(true)
    }

    const carSwitch = () => {
        setShowBet(false)
        setShowCars(true)
    }

    // changes button color to show bet is locked
    function change1Color() {
        setButton1Color('#15ff00')
    }
    function change2Color() {
        setButton2Color('#15ff00')
    }
    function change3Color() {
        setButton3Color('#15ff00')
    }
    
    // sets bet car & amount, locks bet & changes button color
    function setCar1() {
        if (lockBet === false) {
            setLockBet(true)
            change1Color()
            props.betGetter(betPrice, Car1Props)
        }
    }

    function setCar2() {
        if (lockBet === false) {
            setLockBet(true)
            change2Color()
            props.betGetter(betPrice, Car2Props)
        }
    }

    function setCar3() {
        if (lockBet === false) {
            setLockBet(true)
            change3Color()
            props.betGetter(betPrice, Car3Props)
        }
    }

    // changes bet value as slider is moved
    function sliderValue(value) {
        setBet(value)
    }

    // unlocks bet and resets button colors
    function resetBet() {
        setLockBet(false)
        setButton1Color("#98ff8f")
        setButton2Color("#98ff8f")
        setButton3Color("#98ff8f")
    }

    return (
        <div className="betWrapper">

            {showInfo &&
            <div className="playerInfo">
                <h1>Player Info</h1>
                {isAuthenticated &&
                <div className="profile">
                    <img className="profilePic" src={user.picture} alt="Profile" />
                    <p className="profileName">{user.name}</p>
                    <div className="wins">
                        <h3>Wins</h3>
                        <img src={crown} alt="Crown" />
                        <p>{props.userWins}</p>
                    </div>
                </div>
                }
                {!isAuthenticated && <p>Login below to continue!</p>}

                <AuthenticationButton />

                <Leaderboard />

                {isAuthenticated && <button className="next" onClick={betSwitch}>Next</button>}
            </div>}
            
            {showBet &&
            <div className="betModule">
                <h1 className="betprompt">Select bet!</h1>
                <div className="betbankcontainer">
                    <h2 className="mybank">My Bank:</h2>
                    <h1 className="bankamount">{props.globalBank}</h1>
                    <img className="bankcoin" src={coin} alt="Coins" />
                </div>
                <div className="slidercontainer">
                    <Slider 
                        className='slider' 
                        min={50} 
                        max={500} 
                        step={10} 
                        defaultValue={250}
                        trackStyle={{backgroundColor: '#ff4646', height: 10}}
                        handleStyle={{borderColor: '#ff6868',height: 28, width: 28, marginLeft: -14, marginTop: -9}}
                        railStyle={{backgroundColor: '#ff9e9e', height: 10}}
                        disabled={lockBet}
                        onChange={sliderValue}/>
                        <h2 className="betprice">{betPrice}</h2>
                        <img className="betcoin" src={coin} alt="Coins" />
                </div>
                <button className="next" onClick={carSwitch}>Next</button>
            </div>}

            {showCars &&
            <div className="chooseCar">
                <h1 className="chooseCarPrompt">Choose a car!</h1>
                <div className="displayCar1">
                    <h1 className='carHeader'>CAR 1</h1>
                    <img className="displayCars" src={Car1Props.img} alt="Car 1"/>
                    <div className='speedContainer'>
                        <h3 className='speed'>Speed</h3>
                        <img className='speedDisplay' src={car1Speed} alt="Car 1 Speed" />
                    </div>
                    <h4 className="desc">shortest lasting power-ups</h4>
                    <button className="betButton" style={{backgroundColor: button1Color, textShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'}} onClick={setCar1}>Bet Car 1</button>
                </div>
                <div className="displayCar2">
                    <h1 className='carHeader'>CAR 2</h1>
                    <img className="displayCars" src={Car2Props.img} alt="Car 2"/>
                    <div className='speedContainer'>
                        <h3 className='speed'>Speed</h3>
                        <img className='speedDisplay' src={car2Speed} alt="Car 2 Speed" />
                    </div>
                    <h4 className="desc">shorter oil spill effect</h4>
                    <button className="betButton" style={{backgroundColor: button2Color, textShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'}} onClick={setCar2}>Bet Car 2</button>
                </div>
                <div className="displayCar3">
                    <h1 className='carHeader'>CAR 3</h1>
                    <img className="displayCars" src={Car3Props.img} alt="Car 3"/>
                    <div className='speedContainer'>
                        <h3 className='speed'>Speed</h3>
                        <img className='speedDisplay' src={car3Speed} alt="Car 3 Speed" />
                    </div>
                    <h4 className="desc">longest lasting power-ups</h4>
                    <button className="betButton" style={{backgroundColor: button3Color, textShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'}} onClick={setCar3}>Bet Car 3</button>
                </div>
                <div className="changebetcontainer">
                    <button className="changebet" onClick={resetBet}>Change Bet</button>
                </div>
            </div>}

            {showCars &&
            <div className='buttonContainer'>
                <Link to="/">
                    <button className='homeButton'>Go Home</button>
                </Link> 
                <button className='start-Button' onClick={props.onStart}>Go to track!</button>
            </div>}
        </div>
    )
}


export default Bet;
