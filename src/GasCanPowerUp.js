import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import gasCanImg from "./img/gas can.png";
import './css/powerup.css';
import { Car1Props } from "./Car1Props.js";
import { Car2Props } from "./Car2Props.js";
import { Car3Props } from "./Car3Props.js";
import { lane1Positions, lane2Positions, lane3Positions } from "./LanePositions";
import Car3 from "./Car3";

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
        if ((Car1Props.position === randPos) && (1 === randLane) && (Car1Props.hasEffect === false)) {
            Car1Props.speed = 80
            Car1Props.hasEffect = true
            console.log('Gas Can picked up by Car 1')
            animate({opacity: 0})

            setTimeout(()=> {
                Car1Props.speed = 100;
                Car1Props.hasEffect = false;
                console.log('Gas Can has worn off!')
            }, 2000)
        } if ((Car2Props.position === randPos) && (2 === randLane) && (Car2Props.hasEffect === false)) {
            Car2Props.speed = 80
            Car2Props.hasEffect = true
            console.log('Gas Can picked up by Car 2')
            animate({opacity: 0})

            setTimeout(()=> {
                Car2Props.speed = 100;
                Car2Props.hasEffect = false;
                console.log('Gas Can has worn off!')
            }, 2000)
        } if ((Car3Props.position === randPos) && (3 === randLane) && (Car3Props.hasEffect === false)) {
            Car3Props.speed = 80
            Car3Props.hasEffect = true
            console.log('Gas Can picked up by Car 3')
            animate({opacity: 0})

            setTimeout(()=> {
                Car3Props.speed = 100;
                Car3Props.hasEffect = false;
                console.log('Gas Can has worn off!')
                
            }, 2000)
        }
    }
    
    return(
        <animated.img className='gasCan' src={gasCanImg} style={style} alt="Gas Can" />
    )
}