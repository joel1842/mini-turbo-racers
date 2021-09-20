import React, { Component } from "react";

class PowerUp extends Component {
    constructor(boost, duration, price) {
        super();
        this.state = {
            lane: 0,
            position: 0
        }
        this.boost = boost;
        this.duration = duration;
        this.price = price;
        this.powerUpPosition = this.powerUpPosition.bind(this)
    }

    powerUpPosition(){

        this.setState({
            position: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
            lane: Math.floor(Math.random() * (3 - 1 + 1)) + 1
        })
    }

    componentDidMount() {
        const interval = setInterval(this.powerUpPosition, 1000)
    }

    render() {
        return (
            <div>
                <p>Lane: {this.state.lane}</p>
                <p>Position: {this.state.position}</p>
                <button onClick={this.powerUpPosition}>setPowerupPosition</button>
            </div>
        )
    }
}

export default PowerUp;