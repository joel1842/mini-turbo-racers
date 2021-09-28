import React, { useState } from "react";

function Bet(props) {
    const [betPrice, setBet] = useState(100)
    const [bank, setBank] = useState(500)
    const [betCar, setBetCar] = useState(null)

    let interval;

    function betMultiplier(){
        if (props.firstPlace === betCar) {
            setBank(bank + (betPrice * 2))
            clearInterval(interval)
        } else if (props.secondPlace === betCar) {
            setBank(bank + (betPrice * 1.25))
            clearInterval(interval)
        } else if (props.thirdPlace === betCar) {
            setBank(bank - (betPrice * 0.5))
            clearInterval(interval)
        }
    }

    function setCar1() {
        setBetCar('Car1')
        interval = setInterval(betMultiplier, 100)
    }

    function setCar2() {
        setBetCar('Car2')
        interval = setInterval(betMultiplier, 100)
    }

    function setCar3() {
        setBetCar('Car1')
        interval = setInterval(betMultiplier, 100)
    }

    return (
        <div>
            <div>
                <h2>Bank Account: {bank}</h2>
                <h2>Bet Price: {betPrice}</h2>
                <h1>Bet Car: {betCar}</h1>
            </div>
            <div>
                <button onClick={setCar1}>Bet Car 1</button>
                <button onClick={setCar2}>Bet Car 2</button>
                <button onClick={setCar3}>Bet Car 3</button>
                <button onClick={() => setBet(betPrice + 10)}>Increase Bet</button>
                <button onClick={() => setBet(betPrice - 10)}>Decrease Bet</button>
            </div>
        </div>
    )
}


export default Bet;
