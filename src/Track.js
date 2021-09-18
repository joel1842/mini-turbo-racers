import React, { Component, useState } from "react";
import {
    Link
  } from "react-router-dom";


// car constructor
class Car extends Component {
    constructor(name, speed, time, weight, acceleration, lane, isBet) {
        super();
        this.name = name;
        this.speed = speed;
        this.time = time;
        this.weight = weight;
        this.acceleration = acceleration;
        this.lane = lane;
        this.isBet = isBet;
        this.setBet = this.setBet.bind(this);
    }

    setBet() {
        this.isBet = true;
        console.log(this.name, this.isBet);
    }
} 

// cars
const car1 = new Car("Car 1", 100, 0, 200, 5, 1, true);

const car2 = new Car("Car 2", 120, 0, 300, 2, 2, false);

const car3 = new Car("Car 3", 90, 0, 150, 7, 3, false);

// powerup constructor
function powerUp(boost, duration, price) {
    this.boost = boost;
    this.duration = duration;
    this.price = price;
}
// powerups
const supremeFuel = new powerUp(1.25, 2000, 50);

const turboBoost = new powerUp(1.5, 4000, 100);


let lane1Counter;
let lane2Counter;
let lane3Counter;
let interval1Speed;
let interval2Speed;
let interval3Speed;
let powerUpInterval;
let startTime;

// start race & set interval speeds
const startRace = () => {
    startTime = Date.now();
    interval1Speed = 10000 / car1.speed;
    interval2Speed = 10000/ car2.speed;
    interval3Speed = 10000/ car3.speed;
    lane1Counter = setInterval(car1Counter, interval1Speed);
    lane2Counter = setInterval(car2Counter, interval2Speed);
    lane3Counter = setInterval(car3Counter, interval3Speed);
    powerUpInterval = setInterval(powerUpPosition, 100);
}


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
    }
}

let carTimes = [];
let firstPlace;
let secondPlace;
let thirdPlace;
let display;

const Leaderboard = () => {
    const [visible, setVisible] = React.useState(false)
    display = () => setVisible(true)
    return(
        <div>
            {visible ? <Scoreboard /> : null}
        </div>
    )
}

 const Scoreboard = () => {
    firstPlace = carTimes[0];
    secondPlace = carTimes[1];
    thirdPlace = carTimes[2];
     return (
         <div>
            <h1>Leaderboard</h1>
            <p>First place: {firstPlace.name}  ={">"}  Time: {firstPlace.time} seconds!</p>
            <p>Second place: {secondPlace.name}  ={">"}  Time: {secondPlace.time} seconds!</p>
            <p>Third place: {thirdPlace.name}  ={">"}  Time: {thirdPlace.time} seconds!</p>
         </div>
     )
 }


// powerup rng
let positionSpawn = () => {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

let laneSpawn = () => {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

// powerup position & usage
const powerUpPosition = () => {
    let randPosition = positionSpawn();
    let randLane = laneSpawn();

    if (randPosition === i && randLane === 1) {
        console.log("Car1 collected SUPREME FUEL!");
        clearInterval(lane1Counter);
        lane1Counter = setInterval(car1Counter, 70);
        setTimeout(lane1Counter, 200);
    
    } if (randPosition === c && randLane === 2) {
        console.log("Car2 collected SUPREME FUEL!");
        clearInterval(lane2Counter);
        lane2Counter = setInterval(car2Counter, 70);
        setTimeout(lane2Counter, 200);
  
    } if (randPosition === x && randLane === 3) {
        console.log("Car3 collected SUPREME FUEL!");
        clearInterval(lane3Counter);
        lane3Counter = setInterval(car3Counter, 70);
        setTimeout(lane3Counter, 200);
    }
} 

const Track = () => {
    return(
        <div>
            <h1>TRACK!</h1>
            <button onClick={startRace}>Start Race!</button>
            <div>
                <Leaderboard />
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