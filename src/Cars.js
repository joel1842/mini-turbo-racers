import React, { Component } from "react";

// car constructor
class Car extends React.Component {
    constructor(name, speed, time, weight, acceleration, lane, isBet) {
        super();
        this.name = name;
        this.speed = speed;
        this.time = time;
        this.weight = weight;
        this.acceleration = acceleration;
        this.lane = lane;
        this.isBet = isBet;
        this.setBet = this.setBet.bind(this);
    }

    setBet() {
        this.isBet = true;
    }
} 

export default Car;