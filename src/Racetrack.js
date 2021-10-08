import React, {useState, useEffect} from 'react';
import "./css/racetrack.css";
import track from "./img/track v5.png";
import Car1 from './Car1.js';
import Car2 from './Car2.js';
import Car3 from './Car3.js';
import RenderCars from './CarAnimations';
import Bet from './Bet';

const Racetrack = () => {
    
    let interval;
    let carArray = [];

    const [seconds, setSeconds] = useState(3);
    const [active, toggleActive] = useState(false)
    const [betDisplay, toggleBetDisplay] = useState(true)
    const [trackDisplay, toggleTrackDisplay] = useState(false)
    const [visible, setVisible] = useState(false)

    // const [lap, setLap] = useState(0)

    const [firstPlace, setFirstPlace] = useState(undefined)
    const [firstPlaceTime, setFirstPlaceTime] = useState(null)
    const [secondPlace, setSecondPlace] = useState(undefined)
    const [secondPlaceTime, setSecondPlaceTime] = useState(null)
    const [thirdPlace, setThirdPlace] = useState(undefined)
    const [thirdPlaceTime, setThirdPlaceTime] = useState(null)

    const [moneyWon, setMoneyWon] = useState(undefined)

    const [betCar, setBetCar] = useState(undefined)

    // sets bet car
    function checkBetCar() {
        if (Car1.isBet) {
            setBetCar(Car1)
        } if (Car2.isBet) {
            setBetCar(Car2)
        } if (Car3.isBet) {
            setBetCar(Car3)
        }
    }

    // triggers race
    function onStart() {
        toggleBetDisplay(false)
        toggleTrackDisplay(true)
        toggleActive(true)
        setTimeout(() => toggleActive(false), 3000)
        startRace()
        checkBetCar()
    }

    // resets race
    function playAgain() {
        toggleBetDisplay(true)
        toggleTrackDisplay(false)
        setVisible(false)

        Car1.reset()
        Car2.reset()
        Car3.reset()
    }

    //starts countdown timer
    useEffect(() => {
        active && seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
    }, [seconds, active])
    
    // continuously checks if race is done
    function startRace() {
        interval = setInterval(carChecker, 100);
    }

    // updates lap & checks for race end
    function carChecker() {
        if (Car1.doneRace && Car2.doneRace && Car3.doneRace) {
            clearInterval(interval)
            carArray = [Car1, Car2, Car3];
            raceEnded()
        }
    }

    // sorts cars by time and sets each place
    function raceEnded() {
        carArray.sort((a,b)=>(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
        setCar1()
        setCar2()
        setCar3()
        checkMoney()

        setFirstPlaceTime(carArray[0].time)
        setSecondPlaceTime(carArray[1].time)
        setThirdPlaceTime(carArray[2].time)
        setFirstPlace(carArray[0].name)
        setSecondPlace(carArray[1].name)
        setThirdPlace(carArray[2].name)
        setVisible(true)

        Car1.reset()
        Car2.reset()
        Car3.reset()
    }

    // checks how much money was won
    function checkMoney() {
        if (Car1.isBet === true) {
            Car1.betMultiplier()
            setMoneyWon(Car1.moneyMade)
        } if (Car2.isBet === true) {
            Car2.betMultiplier()
            setMoneyWon(Car2.moneyMade)
        } if (Car3.isBet === true) {
            Car3.betMultiplier()
            setMoneyWon(Car3.moneyMade)
        }
    }
    
    // sets place of car within component
    function setCar1() {
        if (carArray[0].name === Car1.name) {
            Car1.setPlace(1)
            console.log(Car1.place)
        } else if (carArray[1].name === Car1.name) {
            Car1.setPlace(2)
            console.log(Car1.place)
        } else if (carArray[2].name === Car1.name) {
            Car1.setPlace(3)
            console.log(Car1.place)
        }
    }

    function setCar2() {
        if (carArray[0].name === Car2.name) {
            Car2.setPlace(1)
            console.log(Car2.place)
        } else if (carArray[1].name === Car2.name) {
            Car2.setPlace(2)
            console.log(Car2.place)
        } else if (carArray[2].name === Car2.name) {
            Car2.setPlace(3)
            console.log(Car2.place)
        }
    }

    function setCar3() {
        if (carArray[0].name === Car3.name) {
            Car3.setPlace(1)
            console.log(Car3.place)
        } else if (carArray[1].name === Car3.name) {
            Car3.setPlace(2)
            console.log(Car3.place)
        } else if (carArray[2].name === Car3.name) {
            Car3.setPlace(3)
            console.log(Car3.place)
        }
    }

    return(
        <div>

            {betDisplay ? 
                <div>
                    <Bet />
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
                        {/* <img className='betCar' src={betCar.image} alt="Bet Car" />  */}
                    </div>
                                      
                    {active ? <h3>Starting in: {seconds}</h3>: null}
                
                    {visible ? 
                        <div>
                            <div className='leaderboard'>
                                <h3>First Place: {firstPlace} in {firstPlaceTime} seconds!</h3>
                                <h3>Second Place: {secondPlace} in {secondPlaceTime} seconds!</h3>
                                <h3>Third Place: {thirdPlace} in {thirdPlaceTime} seconds!</h3>
                            </div>
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
                    <img className="track" src={track} alt="track"/>
                </div>
            : null}
        </div>
    )
}

export default Racetrack;

    // function checkPowerUp() {
    //     if (supremeFuel.position === car1.position && supremeFuel.lane === 1) {
    //         if (car1.doneRace === false) {
    //             console.log(car1.name, "collected", supremeFuel.name, "!")
    //             car1.resetCarInterval();
    //         }
    //     } else if (supremeFuel.position === car2.position && supremeFuel.lane === 2) {
    //         if (car2.doneRace === false) {
    //             console.log(car2.name, "collected", supremeFuel.name, "!")
    //             car2.resetCarInterval();
    //         }
    //     } else if (supremeFuel.position === car3.position && supremeFuel.lane === 3) {
    //         if (car3.doneRace === false) {
    //             console.log(car3.name, "collected", supremeFuel.name, "!")
    //             car3.resetCarInterval();
    //         }
    //     } else if (car1.doneRace === true && car2.doneRace === true && car3.doneRace === true) {
    //         clearInterval(checkItems);
    //         supremeFuel.clearPowerUpInterval();
    //     }
    // }



// const ShowLeaderboard = () => {
//     const [visible, setVisible] = React.useState(false)
//     display = () => setVisible(true)
//     return(
//         <div>
//             {visible ? <Leaderboard carArray={carArray}/> : null}
//         </div>
//     )
// }

            /* {visible ? <div>
                    <h2>First Place: {firstPlace} in {firstPlaceTime} seconds!</h2>
                    <h2>Second Place: {secondPlace} in {secondPlaceTime} seconds!</h2>
                    <h2>Third Place: {thirdPlace} in {thirdPlaceTime} seconds!</h2>
                    <h1>You made {moneyWon} coins!</h1>

                    <Link to="/bet">
                      <button>
                        <a href="/bet">Play Again!</a>
                      </button>
                    </Link>  
                </div> : null} */
