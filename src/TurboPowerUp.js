import React from "react";
import { useSpring, animated } from "react-spring";
import turboImg from "./img/turbo.png";
import './css/turbo.css';
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";

// turbo props
export const Turbo = {
    pos: null,
    lane: null
}

export const TurboPowerUp = () => {

    // random position & lane generator
    let turboCoords;
    const turboSpawn = () => {
        Turbo.lane = Math.floor(Math.random() * 3) + 1;
        Turbo.pos = Math.floor(Math.random() * 45) + 1;
        if (Turbo.lane === 1) {
            turboCoords = lane1Positions[Turbo.pos]
        } else if (Turbo.lane === 2) {
            turboCoords = lane2Positions[Turbo.pos]
        } else if (Turbo.lane === 3) {
            turboCoords = lane3Positions[Turbo.pos]
        }
    }

    // renders gas can at random pos & lane
    const [style, animate] = useSpring(() => ({
        props: turboSpawn(),
        from: {x: turboCoords.x, y: turboCoords.y, top: 18},
        loop: false
    }))
    
    return(
        <animated.img className='turbo' src={turboImg} style={style} alt="Turbo Charger" />
    )
}