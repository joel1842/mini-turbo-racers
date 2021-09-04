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

setTimeout(start, 1000);

let i = 0;
let lapNumber = 0;

function start() {
    setInterval(Car, 500);
  }

const Car = () => {

    if (i < 10) {
        i++;
        console.log("car position =", i);
    } else {
        i = 0;
        if (lapNumber < 3) {
            lapNumber += 1;
        } else {
            console.log("Race has ended!");
            lapNumber = 0;
        }
        console.log("lap =", lapNumber);
    }
}

export default Track;