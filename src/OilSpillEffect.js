import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import oilSpillImg from "./img/oil spill.png";
import './css/oilspill.css';
import { Car1Props } from "./Car1Props.js";
import { Car2Props } from "./Car2Props.js";
import { Car3Props } from "./Car3Props.js";
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";

export const OilSpillEffect = () => {

    const effectLane = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const effectPosition = () => {
        return Math.floor(Math.random() * 45) + 1;
    }

    let oilSpill;
    let randPos;
    let randLane;
    function getEffectPos() {
        randPos = effectPosition()
        randLane = effectLane()
        if (randLane === 1) {
            oilSpill = lane1Positions[randPos]
        } if (randLane === 2) {
            oilSpill = lane2Positions[randPos]
        } if (randLane === 3) {
            oilSpill = lane3Positions[randPos]
        }
    }

    const [style, animate] = useSpring(() => ({
        props: getEffectPos(),
        from: {x: oilSpill.x, y: oilSpill.y}
    }))

    useEffect(() => {
        setInterval(oilSpillChecker, 1)
    }, [])

    function oilSpillChecker() {
        if ((Car1Props.position === randPos) && (Car1Props.lane === randLane)) {
            Car1Props.speed = 120
            animate({opacity: 0})
        } if ((Car2Props.position === randPos) && (Car2Props.lane === randLane)) {
            Car2Props.speed = 120
            animate({opacity: 0})
        } if ((Car3Props.position === randPos) && (Car3Props.lane === randLane)) {
            Car3Props.speed = 120
            animate({opacity: 0})
        }
    }
    
    return(
        <animated.img className='oilspill' src={oilSpillImg} style={style} alt="Oil Spill" />
    )
}