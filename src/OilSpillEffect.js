import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import oilSpillImg from "./img/oil spill.png";
import './css/oilspill.css';
import Car1 from "./Car1";
import Car2 from "./Car2";
import Car3 from "./Car3";
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
        if ((Car1.position === randPos) && (Car1.lane === randLane)) {
            Car1.speed = 120
            animate({opacity: 0})
        } if ((Car2.position === randPos) && (Car2.lane === randLane)) {
            Car2.speed = 120
            animate({opacity: 0})
        } if ((Car3.position === randPos) && (Car3.lane === randLane)) {
            Car3.speed = 120
            animate({opacity: 0})
        }
    }
    
    return(
        <animated.img className='oilspill' src={oilSpillImg} style={style} alt="Oil Spill" />
    )
}