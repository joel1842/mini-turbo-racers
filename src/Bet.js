import React, { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./css/bet.css";
import { Car1Props } from "./Car1Props.js";
import { Car2Props } from "./Car2Props.js";
import { Car3Props } from "./Car3Props.js";
import coin from "./img/coin.png";

const Bet = (props) => {
    // default bet amount
    const [betPrice, setBet] = useState(250)

    const [lockBet, setLockBet] = useState(false)
    const [button1Color, setButton1Color] = useState("#81FF95")
    const [button2Color, setButton2Color] = useState("#81FF95")
    const [button3Color, setButton3Color] = useState("#81FF95")


    // changes button color to show bet is locked
    function change1Color() {
        setButton1Color('#1fff44')
    }
    function change2Color() {
        setButton2Color('#1fff44')
    }
    function change3Color() {
        setButton3Color('#1fff44')
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
        setButton1Color("#81FF95")
        setButton2Color("#81FF95")
        setButton3Color("#81FF95")
    }

    return (
        <div className="betWrapper">
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
                        defaultValue={100}
                        trackStyle={{backgroundColor: '#ff4646', height: 10}}
                        handleStyle={{borderColor: '#ff6868',height: 28, width: 28, marginLeft: -14, marginTop: -9}}
                        railStyle={{backgroundColor: '#ff9e9e', height: 10}}
                        disabled={lockBet}
                        onChange={sliderValue}/>
                        <h2 className="betprice">{betPrice}</h2>
                        <img className="betcoin" src={coin} alt="Coins" />
                </div>
            </div>

            <div className="chooseCar">
                <h1 className="choosecarprompt">Choose a car!</h1>
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
                <div className="changebetcontainer">
                    <button className="changebet" onClick={resetBet}>Change Bet</button>
                </div>
            </div>
        </div>
    )
}


export default Bet;
