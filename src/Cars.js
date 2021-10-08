import React, { Component } from "react";

// logic & props for all cars
export default class Car extends Component{
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

    // sets bet car & amount bet
    setBet(money) {
        this.isBet = true
        this.moneyBet = money
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

    // sets place prop
    setPlace(value) {
        this.place = value
    }

    // multiplies bet money based on place of car
    betMultiplier() {
        if (this.place === 1) {
            this.moneyMade = this.moneyBet * 2
        } if (this.place === 2) {
            this.moneyMade = this.moneyBet * 1.25
        } if (this.place === 3) {
            this.moneyMade = this.moneyBet - (this.moneyBet * 0.5)
        }
    }

    // full reset of all props
    reset() {
        this.position = 0;
        this.lap = 0;
        this.isBet = false;
        this.doneRace = false;
        this.place = null;
        this.moneyBet = 0;
        this.moneyMade = 0;
        this.startTime = null;
        this.time = null;
    }
}