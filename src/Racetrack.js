import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import "./css/racetrack.css";
import track from "./img/track.png";
import Car1 from './Car1.js';
import RenderCars from './Car1spring';
import Car2 from './Car2.js';
import Car3 from './Car3.js';

const Racetrack = () => {

    let carArray = [];
    let interval; 

    const [visible, setVisible] = useState(false)
    const [firstPlace, setFirstPlace] = useState(undefined)
    const [firstPlaceTime, setFirstPlaceTime] = useState(null)
    const [secondPlace, setSecondPlace] = useState(undefined)
    const [secondPlaceTime, setSecondPlaceTime] = useState(null)
    const [thirdPlace, setThirdPlace] = useState(undefined)
    const [thirdPlaceTime, setThirdPlaceTime] = useState(null)
    const [moneyWon, setMoneyWon] = useState(undefined)

    function startRace() {
        checker()
        Car1.carInterval()
        Car2.carInterval()
        Car3.carInterval()
    }
    
    function carChecker() {
        if (Car1.doneRace && Car2.doneRace && Car3.doneRace) {
            clearInterval(interval)
            carArray = [Car1, Car2, Car3];
            raceEnded()
            console.log("The race is over!")
        }
    }

    function checker() {
        interval = setInterval(carChecker, 100);
    }

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
            <div className="wrapper">
                <h1 className="header">Racetrack</h1>
                <button className="button" onClick={startRace}>Start Race!</button>
                {visible ? <div>
                    <h2>First Place: {firstPlace} in {firstPlaceTime} seconds!</h2>
                    <h2>Second Place: {secondPlace} in {secondPlaceTime} seconds!</h2>
                    <h2>Third Place: {thirdPlace} in {thirdPlaceTime} seconds!</h2>
                    <h1>You made {moneyWon} coins!</h1>

                    <Link to="/bet">
                      <button>
                        <a href="/bet">Play Again!</a>
                      </button>
                    </Link>  
                </div> : null}
            </div>

            <div className='track-container'>
                <RenderCars /> 
                <img className="track" src={track} />
            </div>
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

