import React, { Component } from "react";

class Bet extends Component {
    constructor() {
        super();
        this.state = {
            betPrice: 100,
            place: 1,
            bank: 500,
        }
        this.betCar = betCar;
        this.handlePrice = this.handlePrice.bind(this)
        this.decreasePrice = this.decreasePrice.bind(this)
        this.clearPrice = this.clearPrice.bind(this)
        this.betMultiplier = this.betMultiplier.bind(this)
    }

    handlePrice(){
        this.setState({
            betPrice: this.state.betPrice + 10
        })
    }

    decreasePrice(){
        this.setState({
            betPrice: this.state.betPrice - 10
        })
    }

    clearPrice(){
        this.setState({
            betPrice: 100
        })
    }

    betMultiplier(){
        if (this.state.place === 1) {
            this.setState({
                bank: this.state.bank + this.state.betPrice * 2
            })
        
        } else if (this.state.place === 2) {
            this.setState({
                bank: this.state.bank + this.state.betPrice * 1.25
            })
            
        } else if (this.state.place === 3) {
            this.setState({
                bank: this.state.bank - this.state.betPrice * 0.5
            })
           
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>My Coins: {this.state.bank}</h2>
                    <h2>Bet Price: {this.state.betPrice}</h2>
                </div>
                <div>
                    <button onClick={this.handlePrice}>Increase Bet</button>
                    <button onClick={this.decreasePrice}>Decrease Bet</button>
                    <button onClick={this.clearPrice}>Clear Bet</button>
                    <button onClick={this.betMultiplier}>BET!</button>
                </div>
            </div>
        )
    }
}

export default Bet;
