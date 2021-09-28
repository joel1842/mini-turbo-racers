import React, { Component } from "react";

export default class Car extends React.Component{
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

    carInterval = () => {
        this.startTime = Date.now();
        this.timer = setInterval(() => {
            this.carCounter()
        }, this.speed); 
    }

    resetCarInterval () {
        clearInterval(this.timer);
        this.speed = this.speed - 20;
        this.carInterval();
    }

    carCounter() {
        if (this.position < 10) {
            this.position = this.position + 1;
            console.log(this.name, "Position:", this.position);
        } else if (this.position === 10) {
            if (this.lap < 3) {
                this.lap = this.lap + 1;
                console.log(this.name, "Lap:", this.lap);
            } else if (this.lap === 3) {
                this.time = (Date.now() - this.startTime) / 1000;
                console.log(this.name, "has finished the race in", this.time);
                clearInterval(this.timer);
                this.raceOver();
            }
            this.position = 0;
        }
    }
    raceOver() {
        this.position = 0;
        this.lap = 0;
        this.doneRace = true;
    }
}