import React, { Component } from "react";

// logic & props for all cars
export default class Car extends Component{
    constructor (name, image, speed, startTime, time, lane, lap, position, doneRace) {
        super();
        this.name = name;
        this.image = image;
        this.speed = speed;
        this.startTime = startTime;
        this.time = time;
        this.lane = lane;
        this.lap = lap;
        this.position = position;
        this.doneRace = doneRace;
    }

    // checks when cars started the race
    carStart() {
        this.startTime = Date.now()
    }

    // counts current lap of car & stops car after 3
    lapCount() {
        if (this.lap < 3) {
            this.lap++
            console.log(this.name,":",this.lap)
        } else if (this.lap === 3){
            this.time = (Date.now() - this.startTime) / 1000;
            console.log(this.name, "has finished the race in", this.time, "seconds")
            this.raceOver()
        }
    }

    raceOver() {
        this.doneRace = true;
    }

    // full reset of all props
    reset() {
        this.position = 0;
        this.lap = 0;
        this.isBet = false;
        this.doneRace = false;
        this.startTime = null;
        this.time = null;
        this.speed = 100;
    }
}