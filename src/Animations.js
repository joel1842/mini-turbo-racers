import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { GasCanPowerUp } from './GasCanPowerUp';
import './css/animations.css'
import Car1 from "./Car1";
import { Car1Props } from "./Car1Props";
import Car1Img from './img/orange car.png';
import Car1GasPower from './img/car1gasboost.png';
import Car1TurboBoost from './img/car1turboboost.png';
import Car1OilSpill from './img/car1oilspill.png';
import Car2 from "./Car2";
import { Car2Props } from "./Car2Props";
import Car2Img from './img/neon car.png';
import Car2GasPower from './img/car2gasboost.png';
import Car2TurboBoost from './img/car2turboboost.png';
import Car2OilSpill from './img/car2oilspill.png';
import Car3 from "./Car3";
import { Car3Props } from "./Car3Props";
import Car3Img from './img/blue car.png';
import Car3GasPower from './img/car3gasboost.png';
import Car3TurboBoost from './img/car3turboboost.png';
import Car3OilSpill from './img/car3oilspill.png';
import track from './img/track.png';
import { TurboPowerUp } from "./TurboPowerUp";
import { OilSpillEffect } from "./OilSpillEffect";
import { GasCan } from "./GasCanPowerUp";
import { Turbo } from "./TurboPowerUp";
import { OilSpill } from "./OilSpillEffect";

function Track () {

    // positions track
    const [style] = useSpring(() => ({
        from: {x: 0, y: 15},
    }))

    return (
        <div>
            <animated.img src={track} style={style} className="racetrack" alt="Racetrack" />
        </div>
    )
}

export default function RenderGame() {

        // toggles power-up spawns
        const [displayGasCan, toggleGasCan] = useState(false)
        const [displayTurbo, toggleTurbo] = useState(false)
        const [displayOilSpill, toggleOilSpill] = useState(false)
    
        // rerenders effects on interval
        useEffect(()=> {
            setTimeout(() => {
                reRenderGasCan()
            }, 3000)
            setTimeout(() => {
                reRenderTurbo()
            }, 5000)
            setTimeout(()=> {
                reRenderOilSpill()
            }, 4000)
        }, [])
    
        // gas can renderer
        const reRenderGasCan = () => {
            if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
                toggleGasCan(true)
                setInterval(giveGasPowerUp, 100)
                function off() {
                    toggleGasCan(false)
                    clearInterval(giveGasPowerUp)
                    setTimeout(() => {
                        reRenderGasCan()
                    }, 1000)
                }
                setTimeout(off, 7000)
            }
        }
    
        // give car gas can
        const giveGasPowerUp = () => {
            if (GasCan.pos === Car1Props.position && GasCan.lane === Car1Props.lane && Car1Props.hasEffect === false) {
                Car1Props.speed = 85;
                Car1Props.hasEffect = true;
                Car1Props.img = Car1GasPower;
                toggleGasCan(false)
                console.log('Gas Can picked up by Car 1');
    
                setTimeout(() => {
                    Car1Props.speed = 95;
                    Car1Props.hasEffect = false;
                    Car1Props.img = Car1Img;
                    console.log("Gas Can has worn off Car 1")
    
                }, 2000)
            } else if (GasCan.pos === Car2Props.position && GasCan.lane === Car2Props.lane && Car2Props.hasEffect === false) {
                Car2Props.speed = 85;
                Car2Props.hasEffect = true;
                Car2Props.img = Car2GasPower;
                toggleGasCan(false)
                console.log('Gas Can picked up by Car 2');
    
                setTimeout(() => {
                    Car2Props.speed = 97;
                    Car2Props.hasEffect = false;
                    Car2Props.img = Car2Img;
                    console.log("Gas Can has worn off Car 2")
                }, 3000)
            } else if (GasCan.pos === Car3Props.position && GasCan.lane === Car3Props.lane && Car3Props.hasEffect === false) {
                Car3Props.speed = 85;
                Car3Props.hasEffect = true;
                Car3Props.img = Car3GasPower;
                toggleGasCan(false)
                console.log('Gas Can picked up by Car 3');
    
                setTimeout(() => {
                    Car3Props.speed = 100;
                    Car3Props.hasEffect = false;
                    Car3Props.img = Car3Img;
                    console.log("Gas Can has worn off Car 3")
                }, 4000)
            }
        }
    
        // turbo renderer
        const reRenderTurbo = () => {
            if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
                toggleTurbo(true)
                setInterval(giveTurboPowerUp, 100)
                function off() {
                    toggleTurbo(false)
                    clearInterval(giveTurboPowerUp)
                    setTimeout(()=> {
                        reRenderTurbo()
                    }, 2000)
                }
                setTimeout(off, 4000) 
            }
        }
    
        // gives car turbo
        const giveTurboPowerUp = () => {
            if (Turbo.pos === Car1Props.position && Turbo.lane === Car1Props.lane && Car1Props.hasEffect === false) {
                Car1Props.speed = 70;
                Car1Props.hasEffect = true;
                Car1Props.img = Car1TurboBoost;
                toggleTurbo(false)
                console.log('Turbo picked up by Car 1');
    
                setTimeout(() => {
                    Car1Props.speed = 95;
                    Car1Props.hasEffect = false;
                    Car1Props.img = Car1Img;
                    console.log("Turbo has worn off Car 1")
    
                }, 1000)
            } else if (Turbo.pos === Car2Props.position && Turbo.lane === Car2Props.lane && Car2Props.hasEffect === false) {
                Car2Props.speed = 70;
                Car2Props.hasEffect = true;
                Car2Props.img = Car2TurboBoost;
                toggleTurbo(false)
                console.log('Turbo picked up by Car 2');
    
                setTimeout(() => {
                    Car2Props.speed = 97;
                    Car2Props.hasEffect = false;
                    Car2Props.img = Car2Img;
                    console.log("Turbo has worn off Car 2")
                }, 2000)
            } else if (Turbo.pos === Car3Props.position && Turbo.lane === Car3Props.lane && Car3Props.hasEffect === false) {
                Car3Props.speed =  70;
                Car3Props.hasEffect = true;
                Car3Props.img = Car3TurboBoost;
                toggleTurbo(false)
                console.log('Turbo picked up by Car 3');
    
                setTimeout(() => {
                    Car3Props.speed = 100;
                    Car3Props.hasEffect = false;
                    Car3Props.img = Car3Img;
                    console.log("Turbo has worn off Car 3")
                }, 3000)
            }
        }
    
        // oilspill renderer
        const reRenderOilSpill = () => {
            if (!Car1Props.doneRace && !Car2Props.doneRace && !Car3Props.doneRace) {
                toggleOilSpill(true)
                setInterval(giveOilSpillEffect, 100)
                function off() {
                    toggleOilSpill(false)
                    clearInterval(giveOilSpillEffect)
                    setTimeout(() => {
                        reRenderOilSpill()
                    }, 1000)
                }
                setTimeout(off, 5000) 
            }
        }
    
        // gives car oilspill
        const giveOilSpillEffect = () => {
            if (OilSpill.pos === Car1Props.position && OilSpill.lane === Car1Props.lane && Car1Props.hasEffect === false) {
                Car1Props.speed = 115;
                Car1Props.hasEffect = true;
                Car1Props.img = Car1OilSpill;
                toggleOilSpill(false)
                console.log('Oil Spill picked up by Car 1');
    
                setTimeout(() => {
                    Car1Props.speed = 95;
                    Car1Props.hasEffect = false;
                    Car1Props.img = Car1Img;
                    console.log("Oil Spill has worn off Car 1")
    
                }, 3000)
            } else if (OilSpill.pos === Car2Props.position && OilSpill.lane === Car2Props.lane && Car2Props.hasEffect === false) {
                Car2Props.speed = 115;
                Car2Props.hasEffect = true;
                Car2Props.img = Car2OilSpill;
                toggleOilSpill(false)
                console.log('Oil Spill picked up by Car 2');
    
                setTimeout(() => {
                    Car2Props.speed = 97;
                    Car2Props.hasEffect = false;
                    Car2Props.img = Car2Img;
                    console.log("Oil Spill has worn off Car 2")
                }, 1000)
            } else if (OilSpill.pos === Car3Props.position && OilSpill.lane === Car3Props.lane && Car3Props.hasEffect === false) {
                Car3Props.speed = 115;
                Car3Props.hasEffect = true;
                Car3Props.img = Car3OilSpill;
                toggleOilSpill(false)
                console.log('Oil Spill picked up by Car 3');
    
                setTimeout(() => {
                    Car3Props.speed = 100;
                    Car3Props.hasEffect = false;
                    Car3Props.img = Car3Img;
                    console.log("Oil Spill has worn off Car 3")
                }, 2000)
            }
        }

    return(
        <div className="racetrackcontainer">
            <div>
                <Track />
            </div>
            <div>
                {displayOilSpill ? <OilSpillEffect />: null}
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