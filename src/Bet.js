import React, { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./css/bet.css";
import { Car1Props } from "./Car1.js";
import { Car2Props } from "./Car2.js";
import { Car3Props } from "./Car3.js";

const Bet = (props) => {
    const [betPrice, setBet] = useState(100)
    
    const [lockBet, setLockBet] = useState(false)
    const [button1Color, setButton1Color] = useState("#ff6868")
    const [button2Color, setButton2Color] = useState("#ff6868")
    const [button3Color, setButton3Color] = useState("#ff6868")


    // changes button color to show bet is locked
    function change1Color() {
        setButton1Color('#ff4646')
    }
    function change2Color() {
        setButton2Color('#ff4646')
    }
    function change3Color() {
        setButton3Color('#ff4646')
    }
    
    // locks bet
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

    function sliderValue(value) {
        setBet(value)
    }

    return (
        <div className="betWrapper">
            <div className="betModule">
                <h2>My Coins: {props.bank}</h2>
                <h2>Bet Price: {betPrice}</h2>
                <Slider 
                    className='slider' 
                    min={50} 
                    max={200} 
                    step={10} 
                    defaultValue={100}
                    trackStyle={{backgroundColor: '#ff4646', height: 10}}
                    handleStyle={{borderColor: '#ff6868',height: 28, width: 28, marginLeft: -14, marginTop: -9}}
                    railStyle={{backgroundColor: '#ff9e9e', height: 10}}
                    disabled={lockBet}
                    onChange={sliderValue}/>
            </div>
            <div className="chooseCar">
                <h1>Choose a car!</h1>
                <div className="displayCards">
                    <img className="displayCars" src={Car1Props.img} alt="Car 1"/>
                    <button className="betButton" style={{backgroundColor: button1Color}} onClick={setCar1}>Bet Car 1</button>
                </div>
                <div className="displayCards">
                    <img className="displayCars" src={Car2Props.img} alt="Car 2"/>
                    <button className="betButton" style={{backgroundColor: button2Color}} onClick={setCar2}>Bet Car 2</button>
                </div>
                <div className="displayCards">
                    <img className="displayCars" src={Car3Props.img} alt="Car 3"/>
                    <button className="betButton" style={{backgroundColor: button3Color}} onClick={setCar3}>Bet Car 3</button>
                </div>
            </div>
        </div>
    )
}


export default Bet;
