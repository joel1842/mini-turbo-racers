import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { GasCanPowerUp } from './GasCanPowerUp';
import './css/animations.css'
import Car1 from "./Car1";
import { Car1Props } from "./Car1Props";
import Car2 from "./Car2";
import { Car2Props } from "./Car2Props";
import Car3 from "./Car3";
import { Car3Props } from "./Car3Props";
import track from './img/track.png';
import { TurboPowerUp } from "./TurboPowerUp";
import { OilSpillEffect } from "./OilSpillEffect";
import { GasCan } from "./GasCanPowerUp";
import { Turbo } from "./TurboPowerUp";
import { OilSpill } from "./OilSpillEffect";

function Track () {

    const [style] = useSpring(() => ({
        from: {x: 0, y: 15},
    }))

    return (
        <div>
            <animated.img src={track} style={style} className="racetrack" alt="Racetrack" />
        </div>
    )
}

export default function RenderCars() {

    const [displayGasCan, toggleGasCan] = useState(false)
    const [displayTurbo, toggleTurbo] = useState(false)
    const [displayOilSpill, toggleOilSpill] = useState(false)

    const reRenderGasCan = () => {
        if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
            toggleGasCan(true)
            setInterval(giveGasPowerUp, 100)
            function off() {
                toggleGasCan(false)
                clearInterval(giveGasPowerUp)
                GasCan.pos = null
                GasCan.lane = null
            }
            setTimeout(off, 4000)
        }
    }

    const giveGasPowerUp = () => {
        if (GasCan.pos === Car1Props.position && GasCan.lane === Car1Props.lane && Car1Props.hasEffect === false) {
            Car1Props.speed = 80;
            Car1Props.hasEffect = true;
            console.log('Gas Can picked up by Car 1');

            setTimeout(() => {
                Car1Props.speed = 100;
                Car1Props.hasEffect = false;
                console.log("Gas Can has worn off Car 1")

            }, 3000)
        } else if (GasCan.pos === Car2Props.position && GasCan.lane === Car2Props.lane && Car1Props.hasEffect === false) {
            Car2Props.speed = 80;
            Car2Props.hasEffect = true;
            console.log('Gas Can picked up by Car 2');

            setTimeout(() => {
                Car2Props.speed = 100;
                Car2Props.hasEffect = false;
                console.log("Gas Can has worn off Car 2")
            }, 3000)
        } else if (GasCan.pos === Car3Props.position && GasCan.lane === Car3Props.lane && Car1Props.hasEffect === false) {
            Car3Props.speed = 80;
            Car3Props.hasEffect = true;
            console.log('Gas Can picked up by Car 3');

            setTimeout(() => {
                Car3Props.speed = 100;
                Car3Props.hasEffect = false;
                console.log("Gas Can has worn off Car 3")
            }, 3000)
        }
    }

    const reRenderTurbo = () => {
        if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
            toggleTurbo(true)
            setInterval(giveTurboPowerUp, 100)
            function off() {
                toggleTurbo(false)
                clearInterval(giveTurboPowerUp)
                Turbo.lane = null
                Turbo.pos = null
            }
            setTimeout(off, 3000) 
        }
    }

    const giveTurboPowerUp = () => {
        if (Turbo.pos === Car1Props.position && Turbo.lane === Car1Props.lane && Car1Props.hasEffect === false) {
            Car1Props.speed = 70;
            Car1Props.hasEffect = true;
            console.log('Turbo picked up by Car 1');

            setTimeout(() => {
                Car1Props.speed = 100;
                Car1Props.hasEffect = false;
                console.log("Turbo has worn off Car 1")

            }, 2000)
        } else if (Turbo.pos === Car2Props.position && Turbo.lane === Car2Props.lane && Car1Props.hasEffect === false) {
            Car2Props.speed = 70;
            Car2Props.hasEffect = true;
            console.log('Turbo picked up by Car 2');

            setTimeout(() => {
                Car2Props.speed = 100;
                Car2Props.hasEffect = false;
                console.log("Turbo has worn off Car 2")
            }, 2000)
        } else if (Turbo.pos === Car3Props.position && Turbo.lane === Car3Props.lane && Car1Props.hasEffect === false) {
            Car3Props.speed =  70;
            Car3Props.hasEffect = true;
            console.log('Turbo picked up by Car 3');

            setTimeout(() => {
                Car3Props.speed = 100;
                Car3Props.hasEffect = false;
                console.log("Turbo has worn off Car 3")
            }, 2000)
        }
    }

    const reRenderOilSpill = () => {
        if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
            toggleOilSpill(true)
            setInterval(giveOilSpillEffect, 100)
            function off() {
                toggleOilSpill(false)
                clearInterval(giveOilSpillEffect)
                OilSpill.lane = null
                OilSpill.pos = null
            }
            setTimeout(off, 6000) 
        }
    }

    const giveOilSpillEffect = () => {
        if (OilSpill.pos === Car1Props.position && OilSpill.lane === Car1Props.lane && Car1Props.hasEffect === false) {
            Car1Props.speed = 115;
            Car1Props.hasEffect = true;
            console.log('Oil Spill picked up by Car 1');

            setTimeout(() => {
                Car1Props.speed = 100;
                Car1Props.hasEffect = false;
                console.log("Oil Spill has worn off Car 1")

            }, 3000)
        } else if (OilSpill.pos === Car2Props.position && OilSpill.lane === Car2Props.lane && Car1Props.hasEffect === false) {
            Car2Props.speed = 115;
            Car2Props.hasEffect = true;
            console.log('Oil Spill picked up by Car 2');

            setTimeout(() => {
                Car2Props.speed = 100;
                Car2Props.hasEffect = false;
                console.log("Oil Spill has worn off Car 2")
            }, 3000)
        } else if (OilSpill.pos === Car3Props.position && OilSpill.lane === Car3Props.lane && Car1Props.hasEffect === false) {
            Car3Props.speed = 115;
            Car3Props.hasEffect = true;
            console.log('Oil Spill picked up by Car 3');

            setTimeout(() => {
                Car3Props.speed = 100;
                Car3Props.hasEffect = false;
                console.log("Oil Spill has worn off Car 3")
            }, 3000)
        }
    }
    
    useEffect(()=> {
        setInterval(reRenderGasCan, 5000)
        setInterval(reRenderTurbo, 8000)
        setInterval(reRenderOilSpill, 8000)
    }, [])

    return(
        <div className="racetrackcontainer">
            <div>
                <Track />
            </div>
            <div>
                {displayOilSpill ? <OilSpillEffect/>: null}
            </div>
            <div>
                {displayTurbo ? <TurboPowerUp /> : null}
            </div>
            <div>
                {displayGasCan ? <GasCanPowerUp /> : null}
            </div>
            <div className="car">
                <Car3 />
            </div>
            <div className="car">
                <Car2 />   
            </div>
            <div className="car">
                <Car1 />
            </div>
        </div>

    )
}