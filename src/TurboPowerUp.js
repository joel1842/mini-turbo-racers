import React from "react";
import { useSpring, animated } from "react-spring";
import turboImg from "./img/turbo.png";
import './css/turbo.css';
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";

export const Turbo = {
    pos: null,
    lane: null
}

export const TurboPowerUp = () => {

    let turboCoords;
    const turboSpawn = () => {
        Turbo.lane = Math.floor(Math.random() * 3) + 1;
        Turbo.pos = Math.floor(Math.random() * 45) + 1;
        if (Turbo.lane === 1) {
            turboCoords = lane1Positions[Turbo.pos]
        } if (Turbo.lane === 2) {
            turboCoords = lane2Positions[Turbo.pos]
        } if (Turbo.lane === 3) {
            turboCoords = lane3Positions[Turbo.pos]
        }
    }

    const [style, animate] = useSpring(() => ({
        props: turboSpawn(),
        from: {x: turboCoords.x, y: turboCoords.y},
        loop: false
    }))
    
    return(
        <animated.img className='turbo' src={turboImg} style={style} alt="Turbo Charger" />
    )
}