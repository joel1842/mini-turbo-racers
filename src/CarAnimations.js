import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { GasCanPowerUp } from './GasCanPowerUp';
import './css/caranimations.css'
import Car1, {Car1Props} from "./Car1";
import Car2, {Car2Props} from "./Car2";
import Car3, {Car3Props} from "./Car3";
import track from './img/track v5.png';
import { TurboPowerUp } from "./TurboPowerUp";
import { OilSpillEffect } from "./OilSpillEffect";

function Track () {

    const [style] = useSpring(() => ({
        from: {x: 450, y: 0}
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
            function off() {
                toggleGasCan(false)
            }
            setTimeout(off, 3000)
        }
    }

    const reRenderTurbo = () => {
        if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
            toggleTurbo(true)
            function off() {
                toggleTurbo(false)
            }
            setTimeout(off, 5000) 
        }
    }

    const reRenderOilSpill = () => {
        if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
            toggleOilSpill(true)
            function off() {
                toggleOilSpill(false)
            }
            setTimeout(off, 6000) 
        }
    }
    
    useEffect(()=> {
        setInterval(reRenderGasCan, 5000)
        setInterval(reRenderTurbo, 8000)
        setInterval(reRenderOilSpill, 8000)
    }, [])

    return(
        <div>
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
            <div>
                <Car3 />
            </div>
            <div>
                <Car2 />   
            </div>
            <div>
                <Car1 />
            </div>
        </div>

    )
}