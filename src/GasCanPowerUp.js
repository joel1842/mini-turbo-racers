import React from "react";
import { useSpring, animated } from "react-spring";
import gasCanImg from "./img/gas can.png";
import './css/powerup.css';
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";

export const GasCan = {
    lane: null,
    pos: null
} 

export const GasCanPowerUp = () => {

    let gasCanCoords;
    const gasCanSpawn = () => {
        GasCan.lane = Math.floor(Math.random() * 3) + 1;
        GasCan.pos = Math.floor(Math.random() * 45) + 1;
        if (GasCan.lane === 1) {
            gasCanCoords = lane1Positions[GasCan.pos]
        } else if (GasCan.lane === 2) {
            gasCanCoords = lane2Positions[GasCan.pos]
        } else if (GasCan.lane === 3) {
            gasCanCoords = lane3Positions[GasCan.pos]
        }
    }   

    const [style, animate] = useSpring(() => ({
        props: gasCanSpawn(),
        from: {x: gasCanCoords.x, y: gasCanCoords.y},
        loop: false
    }))
    
    return(
        <animated.img className='gasCan' src={gasCanImg} style={style} alt="Gas Can" />
    )
}