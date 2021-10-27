import React from "react";
import { useSpring, animated } from "react-spring";
import oilSpillImg from "./img/oil spill.png";
import './css/oilspill.css';
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";

// oilspill props
export const OilSpill = {
    lane: null,
    pos: null
}

export const OilSpillEffect = (props) => {

    // random position & lane generator
    let oilSpillCoords;
    const oilSpillSpawn = () => {
        OilSpill.lane = Math.floor(Math.random() * 3) + 1;
        OilSpill.pos = Math.floor(Math.random() * 45) + 1;

        if (OilSpill.lane === 1) {
            oilSpillCoords = lane1Positions[OilSpill.pos]
        } else if (OilSpill.lane === 2) {
            oilSpillCoords = lane2Positions[OilSpill.pos]
        } else if (OilSpill.lane === 3) {
            oilSpillCoords = lane3Positions[OilSpill.pos]
        }
    }

    // renders gas can at random pos & lane
    const [style, animate] = useSpring(() => ({
        props: oilSpillSpawn(),
        from: {x: oilSpillCoords.x, y: oilSpillCoords.y, top: 18}
    }))
    
    return(
        <animated.img className='oilspill' src={oilSpillImg} style={style} alt="Oil Spill" />
    )
}