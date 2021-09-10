import {
    Link
  } from "react-router-dom";

const Track = () => {
    return(
        <div>
            <h1>TRACK!</h1>
            <button onClick={startRace}>Start Race!</button>
            <Link to="/">
                <button>
                    Go back!
                </button>
            </Link>
        </div>
        
    )
}

function car(name, speed, weight, acceleration, lane, isBet) {
    this.name = name;
    this.speed = speed;
    this.weight = weight;
    this.acceleration = acceleration;
    this.lane = lane;
    this.isBet = isBet;
}

const car1 = new car(1, 100, 200, 5, 1, true);

const car2 = new car(2, 120, 300, 2, 2, false);

const car3 = new car(3, 90, 150, 7, 3, false);

let lane1Counter;
let lane2Counter;
let lane3Counter;

const startRace = () => {
    let interval1Speed = 10000 / car1.speed;
    let interval2Speed = 10000/ car2.speed;
    let interval3Speed = 10000/ car3.speed;
    lane1Counter = setInterval(car1Counter, interval1Speed);
    lane2Counter = setInterval(car2Counter, interval2Speed);
    lane3Counter = setInterval(car3Counter, interval3Speed);
}

let lapCount = 0;
let i = 0;

const car1Counter = () => {

    if (i < 10) {
        i++;
        console.log("Car1 Position:", i);
    } else if (i === 10) {
        if (i === 10) {
            if (lapCount < 3) {
                lapCount += 1;
                console.log("Car1 Lap:", lapCount);
            } else if (lapCount === 3) {
                console.log("Car1 has finished the race!");
                clearInterval(lane1Counter);
            }
            i = 0;
        }
    }
}

let lapCount2 = 0;
let c = 0;

const car2Counter = () => {

    if (c < 10) {
        c++;
        console.log("Car2 Position:", c);
    } else if (c === 10) {
        if (c === 10) {
            if (lapCount2 < 3) {
                lapCount2 += 1;
                console.log("Car2 Lap:", lapCount2);
            } else if (lapCount2 === 3) {
                console.log("Car2 has finished the race!");
                clearInterval(lane2Counter);
            }
            c = 0;
        }
    }
}

let lapCount3 = 0;
let x = 0;

const car3Counter = () => {

    if (x < 10) {
        x++;
        console.log("Car3 Position:", x);
    } else if (x === 10) {
        if (x === 10) {
            if (lapCount3 < 3) {
                lapCount3 += 1;
                console.log("Car3 Lap:", lapCount3);
            } else if (lapCount3 === 3) {
                console.log("Car3 has finished the race!");
                clearInterval(lane3Counter);
            }
            x = 0;
        }
    }
}

// function powerUp(boost, duration, price) {
//     this.boost = boost;
//     this.duration = duration;
//     this.price = price;
// }

// const supremeFuel = new powerUp(1.25, 2000, 50);

// const turboBoost = new powerUp(1.5, 4000, 100);

// let positionSpawn = () => {
//     return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// }

// // for when lanes are added
// // let laneSpawn = () => {
// //     return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// // }

// const powerUpPosition = () => {
//     let randPosition = positionSpawn();
//     // for when lanes are added
//     // let randLane = laneSpawn();
//     if (randPosition === i) {
//         console.log("SUPREME FUEL COLLECTED!");
//         carInterval = setInterval(carPosition, 200);
//     } 
// }

// let powerUpInterval = setInterval(powerUpPosition, 5000);


export default Track;