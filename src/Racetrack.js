import React, {useState, useEffect} from 'react';
import "./css/racetrack.css";
import {Car1Props, resetCar1} from './Car1.js';
import {Car2Props, resetCar2} from './Car2.js';
import {Car3Props, resetCar3} from './Car3.js';
import RenderCars from './CarAnimations';
import Bet from './Bet';

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

    const [firstPlace, setFirstPlace] = useState(undefined);
    const [firstPlaceTime, setFirstPlaceTime] = useState(null);
    const [secondPlace, setSecondPlace] = useState(undefined);
    const [secondPlaceTime, setSecondPlaceTime] = useState(null);
    const [thirdPlace, setThirdPlace] = useState(undefined);
    const [thirdPlaceTime, setThirdPlaceTime] = useState(null);
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

    const betGetter = (betPrice, car) => {
        setBetAmount(betPrice)
        setBetCar(car)
    }

    // stopwatch
    useEffect(() => {
        countdown && setTimeout(() => setSeconds(seconds - 1), 1000);
        !raceOver && timer && setTimeout(() => setCounting(counting + 1), 1000);

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

    // continuously checks if race is done
    function isRaceDone() {
        interval = setInterval(raceChecker, 100);
        let leaderboardInterval = setInterval(liveLeaderboard, 100)
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
        setSecond(carArray[1].name)
        setThird(carArray[2].name)
    }

    // sorts cars by time and sets each place
    function raceEnded() {
        carArray.sort((a,b)=>(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
        
        setFirstPlace(carArray[0].name)
        setFirstPlaceTime(carArray[0].time)

        setSecondPlace(carArray[1].name)
        setSecondPlaceTime(carArray[1].time)

        setThirdPlace(carArray[2].name)
        setThirdPlaceTime(carArray[2].time)

        checkMoney()
        checkWinstreak()
        
        setVisible(true)
    }

    // checks how much money was won
    function checkMoney() {
        if (carArray[0].name === betCar.name) {
            setBank(bank + (betAmount * 2))
            setMoneyWon(betAmount * 2)
        } else if (carArray[1].name === betCar.name) {
            setBank(bank + (betAmount * 1.25))
            setMoneyWon(betAmount * 1.25)
        } else if (carArray[2].name === betCar.name) {
            setBank(bank - (betAmount * 0.5))
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

    // resets race
    function playAgain() {
        toggleBetDisplay(true)
        toggleTrackDisplay(false)
        setVisible(false)
        setSeconds(3)
        setCounting(0)
        toggleCountdown(false)
        toggleTimer(false)
        setFirstPlace(undefined)
        setFirstPlaceTime(null)
        setSecondPlace(undefined)
        setSecondPlaceTime(null)
        setThirdPlace(undefined)
        setThirdPlaceTime(null)
        setBetCar(undefined)
        setBetAmount(undefined)
        setMoneyWon(undefined)
        setRaceOver(false)

        resetCar1()
        resetCar2()
        resetCar3()
    }

    return(
        <div>

            {betDisplay ? 
                <div>
                    <Bet betGetter={betGetter} bank={bank}/>
                    <div className='button-container'>
                        <button className='start-button' onClick={onStart}>Go to track!</button>
                    </div>
                </div>
            : null}

            {trackDisplay ? 
                <div className='track-container'>
                    <h1 className="header">Racetrack</h1>
                    <div className='betDisplay'>
                        <h2>Bet Car: {betCar.name}</h2>
                        <h3>Lap: {betCar.lap}</h3>
                        <h3>My bank: {bank}</h3>
                    </div>
                                      
                    {countdown ? <h3>Starting in: {seconds}!</h3> : null}
                    {timer ? <h3>Race Timer: {counting} seconds</h3> : null}
                
                    <div>
                        <h3>1st: {first} </h3>
                        {visible ? <h3>in {firstPlaceTime} seconds!</h3> : null}
                        <h3>2nd: {second} </h3>
                        {visible ? <h3>in {secondPlaceTime} seconds!</h3> : null}
                        <h3>3rd: {third} </h3>
                        {visible ? <h3>in {thirdPlaceTime} seconds!</h3> : null}
                        {winDisplay ? <h3>Winstreak: {winstreak}x</h3> : null}
                    </div>

                    {visible ? 
                        <div>
                            <div className='container'>
                                <h2>You made {moneyWon} coins!</h2>
                                <button className='play-again' onClick={playAgain}>Play Again!</button>
                            </div>
                        </div> 
                    : null}
                </div>
            : null}

            {trackDisplay ? 
                <div>
                    <RenderCars/>
                </div>
            : null}
        </div>
    )
}

export default Racetrack;