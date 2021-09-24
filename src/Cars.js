import React, { Component } from "react";


export default class Car extends React.Component{
    constructor (name, speed, time, lane, lap, position, image, doneRace) {
        super();
        this.name = name;
        this.speed = speed;
        this.time = time;
        this.lane = lane;
        this.lap = lap;
        this.position = position;
        this.image = image;
        this.doneRace = false;
    }
    carStartTime() {
        this.startTime = Date.now();
    }

    carInterval = () => {
        this.timerID = setInterval(() => {
            this.carCounter()
        }, this.speed); 
    }

    resetCarInterval () {
        clearInterval(this.timerID);
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
                clearInterval(this.timerID);
                this.raceOver();
            }
            this.position = 0;
        }
    }
    raceOver() {
        this.position = 0;
        // this.startTime = 0;
        this.lap = 0;
        this.doneRace = true;
    }
}