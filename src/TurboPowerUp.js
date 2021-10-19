import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import turboImg from "./img/turbo.png";
import './css/turbo.css';
import { Car1Props } from "./Car1Props.js";
import { Car2Props } from "./Car2Props.js";
import { Car3Props } from "./Car3Props.js";
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";

export const TurboPowerUp = () => {

    const powerUpLane = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const powerUpPosition = () => {
        return Math.floor(Math.random() * 45) + 1;
    }

    let turbo;
    let randPos;
    let randLane;
    function getPowerUpPos() {
        randPos = powerUpPosition()
        randLane = powerUpLane()
        if (randLane === 1) {
            turbo = lane1Positions[randPos]
        } if (randLane === 2) {
            turbo = lane2Positions[randPos]
        } if (randLane === 3) {
            turbo = lane3Positions[randPos]
        }
    }

    const [style, animate] = useSpring(() => ({
        props: getPowerUpPos(),
        from: {x: turbo.x, y: turbo.y}
    }))

    useEffect(() => {
        setInterval(turboChecker, 1)
    }, [])

    function turboChecker() {
        if ((Car1Props.position === randPos) && (Car1Props.lane === randLane)) {
            Car1Props.speed = 65
            animate({opacity: 0})
        } if ((Car2Props.position === randPos) && (Car2Props.lane === randLane)) {
            Car2Props.speed = 65
            animate({opacity: 0})
        } if ((Car3Props.position === randPos) && (Car3Props.lane === randLane)) {
            Car3Props.speed = 65
            animate({opacity: 0})
        }
    }
    
    return(
        <animated.img className='turbo' src={turboImg} style={style} alt="Turbo Charger" />
    )
}