import React, {Component, useState} from 'react';
import Car from "./Cars";
import Leaderboard from './Leaderboard';
let carArray;

const Racetrack = (props) => {
    


    function startRace() {
        props.car1.carInterval();
        props.car2.carInterval();
        props.car3.carInterval();
    }

    function raceSorter() {
        if (props.car1.time & props.car2.time & props.car3.time) {
            carArray = [props.car1, props.car2, props.car3].sort((a,b)=>(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
        } 
    }

    return(
        <div>
            <h1>Racetrack</h1>
            <button onClick={startRace}>Start Race!</button>
            <button onClick={raceSorter}>Sort times</button>
            <ShowLeaderboard/>
        </div>
    )
}

const ShowLeaderboard = () => {
    const [visible, setVisible] = React.useState(false)
    let display = () => setVisible(true)
    return(
        <div>
            <button onClick={display}>Show Leaderboard</button>
            {visible ? <Leaderboard carArray={carArray}/> : null}
        </div>
    )
}

export default Racetrack;