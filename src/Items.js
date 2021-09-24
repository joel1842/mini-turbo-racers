import React, { Component } from "react";

class PowerUp extends Component {
    constructor(name, boost, duration, price, lane, position, interval) {
        super();
        this.name = name;
        this.boost = boost;
        this.duration = duration;
        this.price = price;
        this.lane = lane;
        this.position = position;
        this.interval = interval;
        this.powerUpPosition = this.powerUpPosition.bind(this)
    }

    powerUpPosition(){
        this.position = Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        this.lane =  Math.floor(Math.random() * (3 - 1 + 1)) + 1
    }

    powerUpInterval = () => {
        this.timer2 = setInterval(() => {
            this.powerUpPosition()
        }, this.interval); 
    }

    clearPowerUpInterval() {
        clearInterval(this.timer2);
    }

    // componentDidMount() {
    //     const interval = setInterval(this.powerUpPosition, 1000)
    // }

    render() {
        return (
            <div>
                <p>Lane: {this.state.lane}</p>
                <p>Position: {this.state.position}</p>
            </div>
        )
    }
}

export default PowerUp;

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