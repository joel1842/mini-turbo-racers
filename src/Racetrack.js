import React, {Component, useState} from 'react';
import "./css/racetrack.css";
import Bet from "./Bet";
import track from "./img/track.png";
import Car1 from './Car1.jsx';
import Car2 from './Car2';
import Car3 from './Car3';

// let display;

const Racetrack = () => {

    let carArray = [];
    let interval; 

    const [visible, setVisible] = useState(false)
    const [firstPlace, setFirstPlace] = useState(null)
    const [firstPlaceTime, setFirstPlaceTime] = useState(null)
    const [secondPlace, setSecondPlace] = useState(null)
    const [secondPlaceTime, setSecondPlaceTime] = useState(null)
    const [thirdPlace, setThirdPlace] = useState(null)
    const [thirdPlaceTime, setThirdPlaceTime] = useState(null)

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
            raceSorter()
            console.log("The race is over!")
        }
    }

    function checker() {
        interval = setInterval(carChecker, 100);
    }

    function raceSorter() {
        if (Car1.time && Car2.time && Car3.time) {
            carArray.sort((a,b)=>(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
            setFirstPlaceTime(carArray[0].time)
            setSecondPlaceTime(carArray[1].time)
            setThirdPlaceTime(carArray[2].time)
            setFirstPlace(carArray[0].name)
            setSecondPlace(carArray[1].name)
            setThirdPlace(carArray[2].name)
            setVisible(true)
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
                </div> : null}
            </div>

            <div className='track-container'>
                <img className="track" src={track} />
            </div>
                    
            <div>
                <Bet firstPlace={firstPlace} secondPlace={secondPlace} thirdPlace={thirdPlace}/>
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

