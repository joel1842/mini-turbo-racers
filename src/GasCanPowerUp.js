import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import gasCanImg from "./img/gas can.png";
import './css/powerup.css';
import { Car1Props } from "./Car1.js";
import { Car2Props } from "./Car2.js";
import { Car3Props } from "./Car3.js";
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";

export const GasCanPowerUp = () => {

    const powerUpLane = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const powerUpPosition = () => {
        return Math.floor(Math.random() * 45) + 1;
    }

    let gasCan;
    let randPos;
    let randLane;
    function getPowerUpPos() {
        randPos = powerUpPosition()
        randLane = powerUpLane()
        if (randLane === 1) {
            gasCan = lane1Positions[randPos]
        } if (randLane === 2) {
            gasCan = lane2Positions[randPos]
        } if (randLane === 3) {
            gasCan = lane3Positions[randPos]
        }
    }

    const [style, animate] = useSpring(() => ({
        props: getPowerUpPos(),
        from: {x: gasCan.x, y: gasCan.y}
    }))

    useEffect(() => {
        setInterval(gasCanChecker, 1)
    }, [])

    function gasCanChecker() {
        if ((Car1Props.position === randPos) && (Car1Props.lane === randLane)) {
            Car1Props.speed = 80
            animate({opacity: 0})
        } if ((Car2Props.position === randPos) && (Car2Props.lane === randLane)) {
            Car2Props.speed = 80
            animate({opacity: 0})
        } if ((Car3Props.position === randPos) && (Car3Props.lane === randLane)) {
            Car3Props.speed = 80
            animate({opacity: 0})
        }
    }
    
    return(
        <animated.img className='gasCan' src={gasCanImg} style={style} alt="Gas Can" />
    )
}