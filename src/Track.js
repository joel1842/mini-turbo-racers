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

const Car = () => {
    if (i < 10) {
        i++;
        console.log("Car Position =", i);
    } else if (i === 10) {
        lapCounter();
        i = 0;
    }
}

let carInterval = setInterval(Car, 500);

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

const supremeFuel = new Object();
supremeFuel.boost = 1.25;
supremeFuel.price = 50;

let randomInteger = () => {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

const powerUpPosition = () => {
    let randNum = randomInteger();
    if (randNum === i) {
        console.log("SUPREME FUEL COLLECTED!");
        carInterval = setInterval(Car, 200);
    }
}

let powerUpInterval = setInterval(powerUpPosition, 5000);

console.log("random number:", randomInteger());

export default Track;