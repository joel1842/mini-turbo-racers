import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/bet.css";
import Car1 from "./Car1.js";
import Car2 from "./Car2.js";
import Car3 from "./Car3.js";

function Bet(props) {
    const [betPrice, setBet] = useState(100)
    const [bank, setBank] = useState(500)
    const [betCar, setBetCar] = useState(null)
    const [lockBet, setLockBet] = useState(false)
    const [button1Color, setButton1Color] = useState("#ff6868")
    const [button2Color, setButton2Color] = useState("#ff6868")
    const [button3Color, setButton3Color] = useState("#ff6868")


    function change1Color() {
        setButton1Color('#ff4646')
    }
    function change2Color() {
        setButton2Color('#ff4646')
    }
    function change3Color() {
        setButton3Color('#ff4646')
    }

    function setCar1() {
        if (lockBet === false) {
            setBetCar(Car1.name)
            Car1.setBet(betPrice)
            setLockBet(true)
            change1Color()
        }
    }

    function setCar2() {
        if (lockBet === false) {
            setBetCar(Car2.name)
            Car2.setBet(betPrice)
            setLockBet(true)
            change2Color()
        }
    }

    function setCar3() {
        if (lockBet === false) {
            setBetCar(Car3.name)
            Car3.setBet(betPrice)
            setLockBet(true)
            change3Color()
        }
    }

    function increaseBet() {
        if (lockBet === false) {
            setBet(betPrice + 10)
        }
    }

    function decreaseBet() {
        if (lockBet === false) {
            setBet(betPrice - 10)
        }
    }

    return (
        <div className="betWrapper">
            <div className="betModule">
                <h2>My Coins: {bank}</h2>
                <h2>Bet Price: {betPrice}</h2>
                <button onClick={increaseBet}>Increase Bet</button>
                <button onClick={decreaseBet}>Decrease Bet</button>
            </div>
            <div className="chooseCar">
                <h1>Choose a car!</h1>
                <div className="displayCards">
                    <img className="displayCars" src={Car1.image} />
                    <button className="betButton" style={{backgroundColor: button1Color}} onClick={setCar1}>Bet Car 1</button>
                </div>
                <div className="displayCards">
                    <img className="displayCars" src={Car2.image} />
                    <button className="betButton" style={{backgroundColor: button2Color}} onClick={setCar2}>Bet Car 2</button>
                </div>
                <div className="displayCards">
                    <img className="displayCars" src={Car3.image} />
                    <button className="betButton" style={{backgroundColor: button3Color}} onClick={setCar3}>Bet Car 3</button>
                </div>
            </div>
            <div>
            <div className="bankButtons">
                <Link to="/track">
                    <button className="startButton">
                        <a href="/track">Start Race!</a>
                    </button>
                </Link>
                <Link to="/">
                    <button className="backButton">
                        <a href="/">Go back</a>
                    </button>
                </Link>
            </div>  
            </div>
        </div>
    )
}


export default Bet;
