import "./bank.css";
import bankTitle from "./grand turbo bank.png";
import bankVault from "./bank vault.png";
import Bet from "./Bet";
import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";

  
const Bank = () => {
    return(
        <div>
            {/* <div className="bankheader">
                <img src={bankTitle} alt="Grand Turbo Bank" id="bankTitle"/>
                <p>Welcome to <b>Grand Turbo Bank!</b> Keep all your coins in one of our state of the art high-security vaults! We will keep them safe, its a <b>Grand Turbo guarantee!</b></p>
                <img src={bankVault} alt="Grand Turbo Bank" id="vault"/>
            </div> */}
            <Bet />
            <div className="homebtn">
                <Link to="/">
                    <button>
                        <a href="/">Go back!</a>
                    </button>
                </Link>
            </div>   
        </div>
    )
}

export default Bank;