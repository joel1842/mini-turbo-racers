import { toggleButtonGroupClasses } from "@mui/material";
import React, { Component } from "react";

export default class Car extends React.Component{
    constructor (name, image, speed, startTime, time, lane, lap, position, doneRace, isBet, place, moneyBet, moneyMade) {
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
        this.isBet = isBet;
        this.place = place;
        this.moneyBet = moneyBet;
        this.moneyMade = moneyMade;
    }

    setBet(money) {
        this.isBet = true
        this.moneyBet = money
    }

    carStart() {
        this.startTime = Date.now()
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

    // setLap() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    setPlace(value) {
        this.place = value
    }

    betMultiplier() {
        if (this.place === 1) {
            this.moneyMade = this.moneyBet * 2
        } if (this.place === 2) {
            this.moneyMade = this.moneyBet * 1.25
        } if (this.place === 3) {
            this.moneyMade = this.moneyBet - (this.moneyBet * 0.5)
        }
    }
    

    raceOver() {
        this.position = 0;
        this.lap = 0;
        this.doneRace = true;
    }

    reset() {
        this.isBet = false;
        this.doneRace = false;
        this.place = null;
        this.moneyBet = 0;
        this.moneyMade = 0;
        this.startTime = null;
        this.time = null;
    }
}