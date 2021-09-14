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

// car constructor
function car(name, speed, weight, acceleration, lane, isBet) {
    this.name = name;
    this.speed = speed;
    this.weight = weight;
    this.acceleration = acceleration;
    this.lane = lane;
    this.isBet = isBet;
}
// cars
const car1 = new car(1, 100, 200, 5, 1, true);

const car2 = new car(2, 120, 300, 2, 2, false);

const car3 = new car(3, 90, 150, 7, 3, false);

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

// start race & set interval speeds
const startRace = () => {
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
            console.log("Car1 has finished the race!");
            clearInterval(lane1Counter);
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
            console.log("Car2 has finished the race!");
            clearInterval(lane2Counter);
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
            console.log("Car3 has finished the race!");
            clearInterval(lane3Counter);
        }
        x = 0;
    }
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

export default Track;