import React, { Component, useState } from "react";
import Car from "./Cars";
import PowerUp from "./Items";
import Leaderboard from "./Leaderboard";
import { Link } from "react-router-dom";

// cars
const car1 = new Car("Car 1", 100, 0, 200, 5, 1, true);

const car2 = new Car("Car 2", 120, 0, 300, 2, 2, false);

const car3 = new Car("Car 3", 90, 0, 150, 7, 3, false);


let lane1Counter;
let lane2Counter;
let lane3Counter;
let interval1Speed;
let interval2Speed;
let interval3Speed;
let startTime;


// start race & set interval speeds
const startRace = () => {
    startTime = Date.now();
    interval1Speed = 10000 / car1.speed;
    interval2Speed = 10000 / car2.speed;
    interval3Speed = 10000 / car3.speed;
    lane1Counter = setInterval(car1Counter, interval1Speed);
    lane2Counter = setInterval(car2Counter, interval2Speed);
    lane3Counter = setInterval(car3Counter, interval3Speed);
}

const supremeFuel = new PowerUp(1.25, 2000, 50);

const turboBoost = new PowerUp(1.5, 4000, 100);

let lapCount = 0;
let i = 0;

let lapCount2 = 0;
let c = 0;

let lapCount3 = 0;
let x = 0;

// car timers

const car1Counter = () => {
    if (i < 10) {
        i++;
        console.log("Car1 Position:", i);
    } else if (i === 10) {
        if (lapCount < 3) {
            lapCount += 1;
            console.log("Car1 Lap:", lapCount);
        } else if (lapCount === 3) {
            clearInterval(lane1Counter);
            car1.time = (Date.now() - startTime) / 1000;
            console.log("Car1 has finished the race in", car1.time,"seconds");
            carTimes.push(car1);
            raceOver();
        }
        i = 0;
    }
}

const car2Counter = () => {
    if (c < 10) {
        c++;
        console.log("Car2 Position:", c);
    } else if (c === 10) {
        if (lapCount2 < 3) {
            lapCount2 += 1;
            console.log("Car2 Lap:", lapCount2);
        } else if (lapCount2 === 3) {
            clearInterval(lane2Counter);
            car2.time = (Date.now() - startTime) / 1000;
            console.log("Car2 has finished the race in", car2.time,"seconds");
            carTimes.push(car2);
            raceOver();
        }
        c = 0;
    }
}

const car3Counter = () => {
    if (x < 10) {
        x++;
        console.log("Car3 Position:", x);
    } else if (x === 10) {
        if (lapCount3 < 3) {
            lapCount3 += 1;
            console.log("Car3 Lap:", lapCount3);
        } else if (lapCount3 === 3) {
            clearInterval(lane3Counter);
            car3.time = (Date.now() - startTime) / 1000;
            console.log("Car3 has finished the race in", car3.time,"seconds");
            carTimes.push(car3);
            raceOver();
        }
        x = 0;
    }
}

let a = 0;
const raceOver = () => {
    if (a < 3) {
        a++;
    } if (a === 3) {
        display();
        console.log(PowerUp.lane);
    }
}

let carTimes = [];


// // powerup position & usage
// const powerUpPosition = () => {
    
//     let randPosition = positionSpawn();
//     let randLane = laneSpawn();

//     if (randPosition === i && randLane === 1) {
//         console.log("Car1 collected SUPREME FUEL!");
//         clearInterval(lane1Counter);
//         lane1Counter = setInterval(car1Counter, 70);
//         setTimeout(lane1Counter, 200);
    
//     } if (randPosition === c && randLane === 2) {
//         console.log("Car2 collected SUPREME FUEL!");
//         clearInterval(lane2Counter);
//         lane2Counter = setInterval(car2Counter, 70);
//         setTimeout(lane2Counter, 200);
  
//     } if (randPosition === x && randLane === 3) {
//         console.log("Car3 collected SUPREME FUEL!");
//         clearInterval(lane3Counter);
//         lane3Counter = setInterval(car3Counter, 70);
//         setTimeout(lane3Counter, 200);
//     }
// } 

let display;

const ShowLeaderboard = () => {
    const [visible, setVisible] = React.useState(false)
    display = () => setVisible(true)
    return(
        <div>
            {visible ? <Leaderboard carTimes={carTimes}/> : null}
        </div>
    )
}

const Track = () => {
    return(
        <div>
            <h1>TRACK!</h1>
            <button onClick={startRace}>Start Race!</button>
            <div>
                <ShowLeaderboard />
            </div>
            <div>
                <PowerUp />
            </div>
            <Link to="/">
                <button>
                    Go back!
                </button>
            </Link>
        </div>
        
    )
}

export default Track;