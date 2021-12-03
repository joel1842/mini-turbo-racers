import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./css/racetrack.css";
import {Car1Props, resetCar1} from './Car1Props';
import {Car2Props, resetCar2} from './Car2Props';
import {Car3Props, resetCar3} from './Car3Props';
import RenderGame from './Animations';
import Bet from './Bet';
import coin from "./img/coin.png";
import gasCanImg from "./img/gas can.png";
import turboImg from "./img/turbo.png";
import oilSpillImg from "./img/oil spill.png";
import home from "./img/home icon.png";
import rules from "./img/rulesIcon.png";
import { Popover, ArrowContainer } from 'react-tiny-popover';


const Racetrack = (props) => {

    
    let carArray = [Car1Props, Car2Props, Car3Props];
    const [betDisplay, toggleBetDisplay] = useState(true);
    const [trackDisplay, toggleTrackDisplay] = useState(false);

    // gets bet amount & bet car
    const [betAmount, setBetAmount] = useState(undefined);
    const [betCar, setBetCar] = useState(undefined);
    const betGetter = (betPrice, car) => {
        setBetAmount(betPrice)
        setBetCar(car)
    }

    // stopwatch
    const [seconds, setSeconds] = useState(3);
    const [counting, setCounting] = useState(0);
    const [countdown, toggleCountdown] = useState(false);
    const [timer, toggleTimer] = useState(false)
    useEffect(() => {
        countdown && setTimeout(() => setSeconds(seconds - 1), 1000);
        !raceOver && timer && setTimeout(() => setCounting(counting + 1), 1000);
        timerDisplay();
    }, [seconds, counting, countdown, timer])

    // triggers race
    const onStart = () => {
        if (betCar !== undefined) {
            console.log(Car1Props.name, Car1Props.speed)
            console.log(Car2Props.name, Car2Props.speed)
            console.log(Car3Props.name, Car3Props.speed)
            props.setBank(-betAmount)
            toggleBetDisplay(false)
            toggleTrackDisplay(true)
            toggleCountdown(true)
            setTimeout(() => toggleCountdown(false), 3000)
            setTimeout(() => toggleTimer(true), 3000)
            raceIntervals()
        }
    }

    const[padding, setPadding] = useState(0);
    function timerDisplay() {
        if (counting >= 10) {
            setPadding(null)
        }
    }

    let interval;
    let leaderboardInterval;
    function raceIntervals() {
        interval = setInterval(raceChecker, 100);
        leaderboardInterval = setInterval(liveLeaderboard, 500)
    }

    // continuously checks for end of race
    const [raceOver, setRaceOver] = useState(false)
    function raceChecker() {
        if (Car1Props.doneRace && Car2Props.doneRace && Car3Props.doneRace) {
            clearInterval(interval)
            setRaceOver(true)
            raceEnded()
        }
    }

    // live leaderboard
    const [first, setFirst] = useState(null);
    const [second, setSecond] = useState(null);
    const [third, setThird] = useState(null);
    const [firstImg, setFirstImg] = useState(null);
    const [secondImg, setSecondImg] = useState(null);
    const [thirdImg, setThirdImg] = useState(null);
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

    // highlights bet car on leaderboard
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

    // sorts cars by time & triggers other race end functions
    const [visible, setVisible] = useState(false);

    const [firstPlaceTime, setFirstPlaceTime] = useState(null);
    const [secondPlaceTime, setSecondPlaceTime] = useState(null);
    const [thirdPlaceTime, setThirdPlaceTime] = useState(null);
    function raceEnded() {
        carArray.sort((a,b)=>(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
        
        setFirstPlaceTime(carArray[0].time)
        setSecondPlaceTime(carArray[1].time)
        setThirdPlaceTime(carArray[2].time)

        checkMoney()
        checkWinstreak()
        playerPlace()
        clearInterval(leaderboardInterval)

        if (!isBankrupt) {
            setVisible(true)
        }
        
    }

    // sets place display at the end of race
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

    // checks player place and how much money was won
    const [moneyWon, setMoneyWon] = useState(undefined);
    const [outcome, setOutcome] = useState(undefined)
    function checkMoney() {
        if (carArray[0].name === betCar.name) {
            if (winstreak >= 2) {
                setMoneyWon(Math.round((betAmount * 2) * winstreak))
                props.setBank(Math.round((betAmount * 2) * winstreak))
            } else {
                setMoneyWon(Math.round(betAmount * 2))
                props.setBank(Math.round(betAmount * 2))
            }
            setOutcome('won')
        } else if (carArray[1].name === betCar.name) {
            setMoneyWon(Math.round(betAmount * 1.25))
            props.setBank(Math.round(betAmount * 1.25))
            setOutcome('won')
        } else if (carArray[2].name === betCar.name) {
            setMoneyWon(Math.round(betAmount * 0.5))
            if (props.globalBank >= moneyWon) {
                props.setBank(-Math.round(betAmount * 0.5))
            } else {
                bankrupt()
            }
            setOutcome('lost')
        }
    }

    // tracks winstreak and displays winstreak
    const [winstreak, setWinstreak] = useState(0);
    const [winDisplay, toggleWinDisplay] = useState(false);
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

    const [isGasPopoverOpen, setIsGasPopoverOpen] = useState(false);

    function buyGasCan() {
        if (betCar.hasEffect === false) {
            if (props.globalBank >= 100) {
                props.setBank(-100)
                betCar.speed = 80;
                betCar.hasEffect = true;
                console.log('Gas Can picked up by', betCar.name);
        
                setTimeout(() => {
                    if (betCar.name === Car1Props.name) {
                        betCar.speed = 95;
                    } else if (betCar.name === Car2Props.name){
                        betCar.speed = 100;
                    } else if (betCar.name === Car3Props.name) {
                        betCar.speed = 105;
                    }
                    betCar.hasEffect = false;
                    console.log("Gas Can has worn off", betCar.name)
                }, 3000)
            } else {
                bankrupt()
            }

        } else {
            setIsGasPopoverOpen(true)
            setTimeout(() => {
                setIsGasPopoverOpen(false)
            }, 2000)
        }
    }
    const [isTurboPopoverOpen, setIsTurboPopoverOpen] = useState(false);
    function buyTurbo() {
        if (betCar.hasEffect === false) {
            if (props.globalBank >= 200) { 
                props.setBank(-200)
                betCar.speed = 70;
                betCar.hasEffect = true;
                console.log('Turbo picked up by', betCar.name);
        
                setTimeout(() => {
                    if (betCar.name === Car1Props.name) {
                        betCar.speed = 95;
                    } else if (betCar.name === Car2Props.name){
                        betCar.speed = 100;
                    } else if (betCar.name === Car3Props.name) {
                        betCar.speed = 105;
                    }
                    
                    betCar.hasEffect = false;
                    console.log("Turbo has worn off", betCar.name)
                }, 2000)
            } else {
                bankrupt()
            }

        } else {
            setIsTurboPopoverOpen(true)
            setTimeout(() => {
                setIsTurboPopoverOpen(false)
            }, 2000)
        }
    }

    function buyOilSpill() {
        if (Car1Props.name === first) {
            if (Car1Props.hasEffect === false) {
                if (props.globalBank >= 75) {
                    props.setBank(-75)
                    Car1Props.speed = 115;
                    Car1Props.hasEffect = true;
                    console.log("Oil Spill picked up by", Car1Props.name)
                    
                    setTimeout(() => {
                        Car1Props.speed = 95;
                        Car1Props.hasEffect = false;
                        console.log("Oil Spill has worn off", Car1Props.name)
                    }, 2000)
                } else {
                    bankrupt()
                }
            } else {
                console.log(Car1Props.name, "has effect, try again.")
            }    
        } else if (Car2Props.name === first) {
            if (Car2Props.hasEffect === false) {
                if (props.globalBank >= 75) {
                    props.setBank(-75)
                    Car2Props.speed = 115;
                    Car2Props.hasEffect = true;
                    console.log("Oil Spill picked up by", Car2Props.name)
                    
                    setTimeout(() => {
                        Car2Props.speed = 100;
                        Car2Props.hasEffect = false;
                        console.log("Oil Spill has worn off", Car2Props.name)
                    }, 2000)
                } else {
                    bankrupt()
                }
            } else {
                console.log(Car2Props.name, "has effect, try again.")
            }
        } else if (Car3Props.name === first) {
            if (Car3Props.hasEffect === false) {
                if (props.globalBank >= 75) { 
                    props.setBank(-75)
                    Car3Props.speed = 115;
                    Car3Props.hasEffect = true;
                    console.log("Oil Spill picked up by", Car3Props.name)
                    
                    setTimeout(() => {
                        Car3Props.speed = 105;
                        Car3Props.hasEffect = false;
                        console.log("Oil Spill has worn off", Car3Props.name)
                    }, 2000)
                } else {
                    bankrupt()
                }

            } else {
                console.log(Car3Props.name, "has effect, try again.")
            }
        }
    }

    // shows bankrupt popup and restarts the game
    const [isBankrupt, setBankrupt] = useState(false)
    function bankrupt() {
        setBankrupt(true)
        setTimeout(() => {
            refresh()
        }, 4000)
    }

    function refresh() {
        window.location.reload()
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
        setBankrupt(false)

        resetCar1()
        resetCar2()
        resetCar3()
    }

    return(
        <div className="racetrack-container">

            {betDisplay ? 
                <div>
                    <Bet betGetter={betGetter} onStart={onStart} {...props}/>
                </div>
            : null}

            {trackDisplay ?
            <div className="widgets">
                <div className="leaderboard">
                    <div className="headerBox">
                        <h2 className="header">Leaderboard</h2>
                        <hr />
                    </div>
                    <div className="carPlace" style={{borderRadius: '53px', background: firstColor}}>
                        <h2 className="place">#1</h2>
                        <h2 className="car">{first}</h2>
                        <img className="carImg" src={firstImg} alt="First Place" />
                    </div>
                    <div className="carPlace" style={{borderRadius: '53px', background: secondColor}}>
                        <h2 className="place">#2</h2>
                        <h2 className="car">{second}</h2>
                        <img className="carImg" src={secondImg} alt="Second Place" />
                    </div>
                    <div className="carPlace" style={{borderRadius: '53px', background: thirdColor}}>
                        <h2 className="place">#3</h2>
                        <h2 className="car">{third}</h2>
                        <img className="carImg" src={thirdImg} alt="Third Place" />
                    </div>
                </div>

                <div className="betCar">
                    <h2 className="betHeader">Bet Car</h2>
                    <h2 className="betDisplay">{betCar.name}</h2>
                    <img className="betCarDisplay" src={betCar.img} alt={betCar.name} />
                </div>

                <div className="bank">
                    <h2 className="bankHeader">Bank</h2>
                    <h2 className="bankDisplay">{props.globalBank}</h2>
                    <img className="coin" src={coin} alt="Coins" />
                </div>

                <div className="timer">
                    <h2 className="timerHeader">Timer</h2>
                    <h2 className="timerDisplay">00:{padding}{counting}</h2>
                </div>

                <div className="lap">
                    <h2 className="lapHeader">Lap</h2>
                    <h2 className="lapDisplay">{betCar.lap}/7</h2>
                </div>

                <div className="shop">
                    <div className="shopHeaderBox">
                        <h2 className="shopHeader">Shop</h2>
                        <hr />
                    </div>
                    <img className="itemImg" src={gasCanImg} alt="Gas Can" />
                    <h2 className="itemName">Gas Can</h2>
                    <Popover
                    isOpen={isGasPopoverOpen}
                    positions={['right']}
                    onClickOutside={() => setIsGasPopoverOpen(false)}
                    content={({ position, childRect, popoverRect }) => (
                        <ArrowContainer
                            position={position}
                            childRect={childRect}
                            popoverRect={popoverRect}
                            arrowColor={'#FFFA8A'}
                            arrowSize={10}
                            arrowStyle={{ opacity: 1, top: "auto", borderTop: "1vw solid transparent", borderBottom: "1vw solid transparent", borderRight: "1vw solid rgb(255, 250, 138)"}}
                            className='popover-arrow-container'
                            arrowClassName='popover-arrow'
                        >
                            <div className="popoverBody">
                                Your car already has a power-up!
                            </div>
                        </ArrowContainer>
                    )}
                    >
                    <button className="buyButton" onClick={buyGasCan}>100 <img className="shopCoin" src={coin} alt="Coin" /></button>
                    </Popover>
                    
                    <img className="itemImg" src={turboImg} alt="Turbo" />
                    <h2 className="itemName">Turbo</h2>
                    <Popover
                    isOpen={isTurboPopoverOpen}
                    positions={['right']}
                    onClickOutside={() => setIsTurboPopoverOpen(false)}
                    content={({ position, childRect, popoverRect }) => (
                        <ArrowContainer
                            position={position}
                            childRect={childRect}
                            popoverRect={popoverRect}
                            arrowColor={'#FFFA8A'}
                            arrowSize={10}
                            arrowStyle={{ opacity: 1, top: "auto", borderTop: "1vw solid transparent", borderBottom: "1vw solid transparent", borderRight: "1vw solid rgb(255, 250, 138)"}}
                            className='popover-arrow-container'
                            arrowClassName='popover-arrow'
                        >
                            <div className="popoverBody">
                                Your car already has a power-up!
                            </div>
                        </ArrowContainer>
                    )}
                    >
                    <button className="buyButton" onClick={buyTurbo}>200 <img className="shopCoin" src={coin} alt="Coin" /></button>
                    </Popover>
                    <img className="itemImg" src={oilSpillImg} alt="Oil Spill" />
                    <h2 className="itemName">Oil Spill</h2>
                    <button className="buyButton" onClick={buyOilSpill}>75 <img className="shopCoin" src={coin} alt="Coin" /></button>
                </div>
                <div>
                
                </div>
                <div className="homeContainer">
                    <Link to="/">
                        <button className="home" onClick={playAgain}><img className="homeImg" src={home} alt="Home!" /></button>
                    </Link>
                </div>
                <div className="ruleButtonContainer">
                    <Link to="/howtoplay">
                        <button className="rules" onClick={playAgain}><img className="rulesImg" src={rules} alt="How to play!" /></button>
                    </Link>
                </div>
            </div>
            : null}


            {trackDisplay ? 
                <div className="renderCars">
                    <RenderGame/>
                </div>
            : null}

            {visible ? 
            <div className="popupContainer">
                <div className="popup">
                    <h2 className="finalPlace">You placed</h2>
                    <h1 className="numberPlace">{place} <img className="popupCar" src={betCar.img} alt={betCar.name} /></h1>
                    {winDisplay ? <h3 className='winstreak'>Winstreak: {winstreak}x</h3> : null}
                    <h2 className="won">You {outcome}</h2>
                    <h1 className="moneyWon">{moneyWon} <img className="popupCoin" src={coin} alt="Coins" /></h1>
                    <button className='playAgain' onClick={playAgain}>Play Again!</button>
                </div>
            </div>
            : null}


            {countdown ? 
                <div className="countdownContainer">
                    <div className="countdownPopup">
                        <h2 className="starting">Starting in...</h2>
                        <h1 className="seconds">{seconds}</h1>
                    </div>
                </div>
            : null}

            {isBankrupt ?
            <div className="popupContainer">    
                <div className="popup">
                    <h1 className="gameOver">Game Over!</h1>
                    <h2 className="bankrupt">Oh no! YOU'RE BANKRUPT!</h2>
                    <h3 className="repo">The bank had to repossess your house!</h3>
                    <button className="tryAgain" onClick={refresh}>Try again!</button>
                </div>
            </div>
            : null }

        </div>
    )
}

export default Racetrack;