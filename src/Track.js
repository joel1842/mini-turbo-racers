import {
    Link
  } from "react-router-dom";

const Track = () => {
    return(
        <div>
            <h1>TRACK!</h1>
            <Link to="/">
                <button>
                    Go back!
                </button>
            </Link>
        </div>
        
    )
}

let i = 0;
let lapCount = 0;

const carPosition = () => {
    if (i < 10) {
        i++;
        console.log("Car Position =", i);
    } else if (i === 10) {
        lapCounter();
        i = 0;
    }
}

let carInterval = setInterval(carPosition, 500);

const lapCounter = () => {
    if (i === 10) {
        if (lapCount < 3) {
            lapCount += 1;
            console.log("Lap:", lapCount);
        } else if (lapCount === 3) {
            console.log("Race has ended!");
            clearInterval(carInterval);
        }
    }
}

function powerUp(boost, duration, price) {
    this.boost = boost;
    this.duration = duration;
    this.price = price;
}

const supremeFuel = new powerUp(1.25, 2000, 50);

const turboBoost = new powerUp(1.5, 4000, 100);

let positionSpawn = () => {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

// for when lanes are added
// let laneSpawn = () => {
//     return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// }

const powerUpPosition = () => {
    let randPosition = positionSpawn();
    // for when lanes are added
    // let randLane = laneSpawn();
    if (randPosition === i) {
        console.log("SUPREME FUEL COLLECTED!");
        carInterval = setInterval(carPosition, 200);
    } 
}

let powerUpInterval = setInterval(powerUpPosition, 5000);

function car(speed, weight, acceleration, lane) {
    this.speed = speed;
    this.weight = weight;
    this.acceleration = acceleration;
    this.lane = lane;
}

const car1 = new car(100, 200, 5, 1);

const car2 = new car(120, 300, 2, 2);

const car3 = new car(90, 150, 7, 3);

export default Track;