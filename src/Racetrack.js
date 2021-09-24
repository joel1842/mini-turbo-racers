import React, {Component, useState} from 'react';
import "./css/racetrack.css";
import Car from './Cars';
import PowerUp from './Items';
import Leaderboard from './Leaderboard';
import Bet from "./Bet";
import track from "./img/track.png";
import Car1 from './Car1';

const car1 = new Car("Car 1", 92, null, 1, 0, 0);
const car2 = new Car("Car 2", 98, null, 2, 0, 0);
const car3 = new Car("Car 3", 95, null, 3, 0, 0);

const supremeFuel = new PowerUp("Supreme Fuel", 1.5, 500, 100, null, 1000);

let carArray;
let display;

const Racetrack = () => {
    let checkItems;

    function startRace() {
        checkItems = setInterval(checkPowerUp, 100);  
        car1.carStartTime();
        car2.carStartTime();
        car3.carStartTime();
        car1.carInterval();
        car2.carInterval();
        car3.carInterval();
        supremeFuel.powerUpInterval();
    }

    function checkPowerUp() {
        if (supremeFuel.position === car1.position && supremeFuel.lane === 1) {
            if (car1.doneRace === false) {
                console.log(car1.name, "collected", supremeFuel.name, "!")
                car1.resetCarInterval();
            }
        } else if (supremeFuel.position === car2.position && supremeFuel.lane === 2) {
            if (car2.doneRace === false) {
                console.log(car2.name, "collected", supremeFuel.name, "!")
                car2.resetCarInterval();
            }
        } else if (supremeFuel.position === car3.position && supremeFuel.lane === 3) {
            if (car3.doneRace === false) {
                console.log(car3.name, "collected", supremeFuel.name, "!")
                car3.resetCarInterval();
            }
        } else if (car1.doneRace === true && car2.doneRace === true && car3.doneRace === true) {
            clearInterval(checkItems);
            supremeFuel.clearPowerUpInterval();
        }
    }

    function raceSorter() {
        carArray = [car1, car2, car3].sort((a,b)=>(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
    } 
    

    function onClick() {
        if (car1.doneRace === true && car2.doneRace === true && car3.doneRace === true) {
            raceSorter();
            display();
        }
    }

    return(
        <div>
            <div className="wrapper">
                <h1 className="header">Racetrack</h1>
                <button className="button" onClick={startRace}>Start Race!</button>
                <button className="button" onClick={onClick}>Show Leaderboard</button>
                <ShowLeaderboard/>
                <Car1></Car1>
            </div>
            <div className='track-container'>
                <img className="track" src={track} />
            </div>
            
            <Bet carArray={carArray}/>
        </div>
    )
}

const ShowLeaderboard = () => {
    const [visible, setVisible] = React.useState(false)
    display = () => setVisible(true)
    return(
        <div>
            {visible ? <Leaderboard carArray={carArray}/> : null}
        </div>
    )
}

export default Racetrack;