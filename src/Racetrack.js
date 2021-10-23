import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./css/racetrack.css";
import {Car1Props, resetCar1} from './Car1Props';
import {Car2Props, resetCar2} from './Car2Props';
import {Car3Props, resetCar3} from './Car3Props';
import RenderCars from './Animations';
import Bet from './Bet';
import coin from "./img/coin.png";
import gasCanImg from "./img/gas can.png";
import turboImg from "./img/turbo.png";
import oilSpillImg from "./img/oil spill.png";
import home from "./img/home icon.png";
import rules from "./img/rulesIcon.png";


const Racetrack = () => {
    
    let interval;
    let carArray = [Car1Props, Car2Props, Car3Props];

    const [seconds, setSeconds] = useState(3);
    const [counting, setCounting] = useState(0);
    const [countdown, toggleCountdown] = useState(false);
    const [timer, toggleTimer] = useState(false)
    const [betDisplay, toggleBetDisplay] = useState(true);
    const [trackDisplay, toggleTrackDisplay] = useState(false);
    const [visible, setVisible] = useState(false);

    const [raceOver, setRaceOver] = useState(false)

    const [moneyWon, setMoneyWon] = useState(undefined);

    const [betCar, setBetCar] = useState(undefined);

    const [bank, setBank] = useState(500);
    const [betAmount, setBetAmount] = useState(undefined);


    const [winstreak, setWinstreak] = useState(0);
    const [winDisplay, toggleWinDisplay] = useState(false);

    const [first, setFirst] = useState(null);
    const [second, setSecond] = useState(null);
    const [third, setThird] = useState(null);
    const [firstPlaceTime, setFirstPlaceTime] = useState(null);
    const [secondPlaceTime, setSecondPlaceTime] = useState(null);
    const [thirdPlaceTime, setThirdPlaceTime] = useState(null);
    const [firstImg, setFirstImg] = useState(null);
    const [secondImg, setSecondImg] = useState(null);
    const [thirdImg, setThirdImg] = useState(null);

    const betGetter = (betPrice, car) => {
        setBetAmount(betPrice)
        setBetCar(car)
    }

    // stopwatch
    useEffect(() => {
        countdown && setTimeout(() => setSeconds(seconds - 1), 1000);
        !raceOver && timer && setTimeout(() => setCounting(counting + 1), 1000);
        timerDisplay();
    }, [seconds, counting, countdown, timer])

    // triggers race
    function onStart() {
        if (betCar !== undefined) {
            toggleBetDisplay(false)
            toggleTrackDisplay(true)
            toggleCountdown(true)
            setTimeout(() => toggleCountdown(false), 3000)
            setTimeout(() => toggleTimer(true), 3000)
            isRaceDone()
        }
    }

    const[padding, setPadding] = useState(0);
    function timerDisplay() {
        if (counting >= 10) {
            setPadding(null)
        }
    }
    // continuously checks if race is done

    let leaderboardInterval;
    function isRaceDone() {
        interval = setInterval(raceChecker, 100);
        leaderboardInterval = setInterval(liveLeaderboard, 500)
    }

    // checks for race end
    function raceChecker() {
        if (Car1Props.doneRace && Car2Props.doneRace && Car3Props.doneRace) {
            clearInterval(interval)
            setRaceOver(true)
            raceEnded()
        }
    }

    function liveLeaderboard() {
        carArray.sort((a,b)=>(a.leaderboard < b.leaderboard) ? 1 : ((b.leaderboard < a.leaderboard) ? -1 : 0));
        setFirst(carArray[0].name)
        setFirstImg(carArray[0].img)
        setSecond(carArray[1].name)
        setSecondImg(carArray[1].img)
        setThird(carArray[2].name)
        setThirdImg(carArray[2].img)

        highlightBetCar()
    }

    const [firstColor, setFirstColor] = useState('none')
    const [secondColor, setSecondColor] = useState('none')
    const [thirdColor, setThirdColor] = useState('none')
    function highlightBetCar() {
        if (betCar.name === carArray[0].name) {
            setFirstColor('#81FF95')
            setSecondColor('none')
            setThirdColor('none')
        } else if (betCar.name === carArray[1].name) {
            setFirstColor('none')
            setSecondColor('#81FF95')
            setThirdColor('none')
        } else if (betCar.name === carArray[2].name) {
            setFirstColor('none')
            setSecondColor('none')
            setThirdColor('#81FF95')
        }
    }

    // sorts cars by time and sets each place
    function raceEnded() {
        carArray.sort((a,b)=>(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
        
        setFirstPlaceTime(carArray[0].time)
        setSecondPlaceTime(carArray[1].time)
        setThirdPlaceTime(carArray[2].time)

        checkMoney()
        checkWinstreak()
        playerPlace()
        clearInterval(leaderboardInterval)
        
        setVisible(true)
    }

    const [place, setPlace] = useState(null);
    function playerPlace() {
        if (betCar.name === carArray[0].name) {
            setPlace('#1')
        } else if (betCar.name === carArray[1].name) {
            setPlace('#2')
        } else if (betCar.name === carArray[2].name) {
            setPlace('#3')
        }
    }

    // checks how much money was won
    function checkMoney() {
        if (carArray[0].name === betCar.name) {
            setBank(prevBank => prevBank + (betAmount * 2))
            setMoneyWon(betAmount * 2)
        } else if (carArray[1].name === betCar.name) {
            setBank(prevBank => prevBank + (betAmount * 1.25))
            setMoneyWon(betAmount * 1.25)
        } else if (carArray[2].name === betCar.name) {
            setBank(prevBank => prevBank - (betAmount * 0.5))
            setMoneyWon(betAmount * 0.5)
        }
    }

    function checkWinstreak() {
        if (carArray[0].name === betCar.name) {
            setWinstreak(winstreak + 1)
            if (winstreak > 1) {
                toggleWinDisplay(true)
            }
        } else {
            setWinstreak(0)
            toggleWinDisplay(false)
        }
    }

    function buyGasCan() {
        if (betCar.hasEffect === false) {
            setBank(prevBank => prevBank - 100)
            betCar.speed = 80;
            betCar.hasEffect = true;
            console.log('Gas Can picked up by', betCar.name);
    
            setTimeout(() => {
                betCar.speed = 100;
                betCar.hasEffect = false;
                console.log("Gas Can has worn off", betCar.name)
            }, 3000)
        } else {
            console.log(betCar.name, "has effect currently, please try again")
        }
    }

    function buyTurbo() {
        if (betCar.hasEffect === false) {
            setBank(prevBank => prevBank - 200)
            betCar.speed = 70;
            betCar.hasEffect = true;
            console.log('Turbo picked up by', betCar.name);
    
            setTimeout(() => {
                betCar.speed = 100;
                betCar.hasEffect = false;
                console.log("Turbo has worn off", betCar.name)
            }, 2000)
        } else {
            console.log(betCar.name, "has effect currently, please try again")
        }
    }


    // resets race
    function playAgain() {
        toggleBetDisplay(true)
        toggleTrackDisplay(false)
        setVisible(false)
        setSeconds(3)
        setCounting(0)
        toggleCountdown(false)
        toggleTimer(false)
        setFirstPlaceTime(null)
        setSecondPlaceTime(null)
        setThirdPlaceTime(null)
        setBetCar(undefined)
        setBetAmount(undefined)
        setMoneyWon(undefined)
        setRaceOver(false)
        setPadding(0)
        setFirstColor('none')
        setSecondColor('none')
        setThirdColor('none')
        setPlace(null)

        resetCar1()
        resetCar2()
        resetCar3()
    }

    return(
        <div className="racetrack-container">

            {betDisplay ? 
                <div>
                    <Bet betGetter={betGetter} bank={bank}/>
                    <div className='button-container'>
                        <Link to="/">
                            <button className='home-button'>Go Home</button>
                        </Link>
                        <button className='start-button' onClick={onStart}>Go to track!</button>
                    </div>
                </div>
            : null}

            {trackDisplay ?
            <div className="widgets">
                <div className="leaderboard">
                    <div className="headerbox">
                        <h2 className="header">Leaderboard</h2>
                        <hr />
                    </div>
                    <div className="carplace" style={{borderRadius: '53px', background: firstColor}}>
                        <h2 className="place">#1</h2>
                        <h2 className="car">{first}</h2>
                        <img className="carimg" src={firstImg} alt="First Place" />
                    </div>
                    <div className="carplace" style={{borderRadius: '53px', background: secondColor}}>
                        <h2 className="place">#2</h2>
                        <h2 className="car">{second}</h2>
                        <img className="carimg" src={secondImg} alt="Second Place" />
                    </div>
                    <div className="carplace" style={{borderRadius: '53px', background: thirdColor}}>
                        <h2 className="place">#3</h2>
                        <h2 className="car">{third}</h2>
                        <img className="carimg" src={thirdImg} alt="Third Place" />
                    </div>
                </div>

                <div className="betcar">
                    <h2 className="betheader">Bet Car</h2>
                    <h2 className="betdisplay">{betCar.name}</h2>
                    <img className="betcardisplay" src={betCar.img} alt={betCar.name} />
                </div>

                <div className="bank">
                    <h2 className="bankheader">Bank</h2>
                    <h2 className="bankdisplay">{bank}</h2>
                    <img className="coin" src={coin} alt="Coins" />
                </div>

                <div className="timer">
                    <h2 className="timerheader">Timer</h2>
                    <h2 className="timerdisplay">00:{padding}{counting}</h2>
                </div>

                <div className="lap">
                    <h2 className="lapheader">Lap</h2>
                    <h2 className="lapdisplay">{betCar.lap}/7</h2>
                </div>

                <div className="shop">
                    <div className="shopheaderbox">
                        <h2 className="shopheader">Shop</h2>
                        <hr />
                    </div>
                    <img className="itemimg" src={gasCanImg} alt="Gas Can" />
                    <h2 className="itemname">Gas Can</h2>
                    <button className="buybutton" onClick={buyGasCan}>100 <img className="shopcoin" src={coin} alt="Coin" /></button>
                    <img className="itemimg" src={turboImg} alt="Turbo" />
                    <h2 className="itemname">Turbo</h2>
                    <button className="buybutton" onClick={buyTurbo}>200 <img className="shopcoin" src={coin} alt="Coin" /></button>
                    <img className="itemimg" src={oilSpillImg} alt="Oil Spill" />
                    <h2 className="itemname">Oil Spill</h2>
                    <button className="buybutton">75 <img className="shopcoin" src={coin} alt="Coin" /></button>
                </div>
                <div className="homecontainer">
                    <Link to="/">
                        <button className="home" onClick={playAgain}><img className="homeimg" src={home} alt="Home!" /></button>
                    </Link>
                </div>
                <div className="rulescontainer">
                    <Link to="/howtoplay">
                        <button className="rules" onClick={playAgain}><img className="rulesimg" src={rules} alt="How to play!" /></button>
                    </Link>
                </div>
            </div>
            : null}


            {trackDisplay ? 
                <div className="rendercars">
                    <RenderCars/>
                </div>
            : null}

            {visible ? 
            <div className="popupcontainer">
                <div className="popup">
                    <h2 className="finalplace">You placed</h2>
                    <h1 className="numberplace">{place} <img className="popupcar" src={betCar.img} alt={betCar.name} /></h1>
                    <h2 className="won">You won</h2>
                    <h1 className="moneywon">{moneyWon} <img className="popupcoin" src={coin} alt="Coins" /></h1>
                    {winDisplay ? <h3>Winstreak: {winstreak}x</h3> : null}
                    <button className='play-again' onClick={playAgain}>Play Again!</button>
                </div>
            </div>
            : null}

        </div>
    )
}

export default Racetrack;