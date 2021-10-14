import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import turboImg from "./img/turbo.png";
import './css/turbo.css';
import Car1 from "./Car1";
import Car2 from "./Car2";
import Car3 from "./Car3";
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
        if ((Car1.position === randPos) && (Car1.lane === randLane)) {
            Car1.speed = 65
            animate({opacity: 0})
        } if ((Car2.position === randPos) && (Car2.lane === randLane)) {
            Car2.speed = 65
            animate({opacity: 0})
        } if ((Car3.position === randPos) && (Car3.lane === randLane)) {
            Car3.speed = 65
            animate({opacity: 0})
        }
    }
    
    return(
        <animated.img className='turbo' src={turboImg} style={style} alt="Turbo Charger" />
    )
}