import React from "react";
import { useSpring, animated } from "react-spring";
import './css/car1.css'
import car1 from './img/orange car.png';
import car2 from './img/blue car.png';
import car3 from './img/neon car.png';

function Car1Animation() {

    function startAnimation() {
        animate({pause: false})
    }

    function stopAnimation() {
        animate({pause: true})
    }

    let speed = 100

    function increaseSpeed() {
        speed = 50
    }

    function slowMovement() {
        speed = 110
    }
    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:1022, y:190, rotate:0, config: {duration: speed}})
            await next({x:1000, y:130, rotate:-45, config: {duration: speed}})
            await next({x:925, y:107, rotate: -90, config: {duration: speed}})
            await next({x: 800, config: {duration: speed}})
            await next({x: 650, config: {duration: speed}})
            await next({x:555, config: {duration: speed}})
            await next({x:494, y:132, rotate:-135, config: {duration: speed}})
            await next({x:473, y:200, rotate: -180, config: {duration: speed}})
            await next({y:400, config: {duration: speed}})
            await next({y:615, config: {duration: speed}})
            await next({x:507, y:675, rotate: -225, config: {duration: speed}})
            await next({x:570, y: 700, rotate: -270, config: {duration: speed}})
            await next({x:610, config: {duration: speed}})
            await next({x:675, y:670, rotate: -315, config: {duration: speed}})
            await next({x:705, y:600, rotate: -360, config: {duration: speed}})
            await next({y:500, config: {duration: speed}})
            await next({x:687, y:450, rotate:-395, config: {duration: speed}})
            await next({x:667, y:400, rotate:-360, config: {duration: speed}})
            await next({x:680, y:360, rotate:-315, config: {duration: speed}})
            await next({x:720, y:347, rotate:-270, config: {duration: speed}})
            await next({x:780, config: {duration: speed}})
            await next({x:817, y:373, rotate:-210, config: {duration: speed}})
            await next({x:823, y:400, rotate:-180, config: {duration: speed}})
            await next({x:812, y:440, rotate:-145, config: {duration: speed}})
            await next({x:785, y:500, rotate:-180, config: {duration: speed}})
            await next({y:600, config: {duration: speed}})
            await next({x:815, y:670, rotate:-225, config: {duration: speed}})
            await next({x:877, y:700, rotate:-270, config: {duration: speed}})
            await next({x:1089, config: {duration: speed}})
            await next({x:1300, config: {duration: speed}})
            await next({x:1365, y:665, rotate:-325, config: {duration: speed}})
            await next({x:1375, y:620, rotate:-360, config: {duration: speed}})
            await next({x:1370, y:570, rotate:-375, config: {duration: speed}})
            await next({x:1330, y:435, config: {duration: speed}})
            await next({x:1290, y:300, rotate:-360, config: {duration: speed}})
            await next({x:1286, y:175, config: {duration: speed}})
            await next({x:1270, y:127, rotate:-410, config: {duration: speed}})
            await next({x:1190, y:108, rotate:-450, config: {duration: speed}})
            await next({x:1120, y:125, rotate:-490, config: {duration: speed}})
            await next({x:1089, y:180, rotate:-540, config: {duration: speed}})
            await next({x:1090, y:340, config: {duration: speed}})
            await next({x:1070, y:370, rotate:-480, config: {duration: speed}})
            await next({x:1055, y:375, rotate:-450, config: {duration: speed}})
            await next({x:1035, y:370, rotate:-410, config: {duration: speed}})
            await next({x:1022, y:350, rotate:-360, config: {duration: speed}})
        },
        from:{x:1022, y:350, rotate: 0},
        pause: false,
        loop: true
    }))

    return (
        <div>
            <animated.img className="car1" style={style} src={car1}/>
            <button onClick={startAnimation}>Start Car</button>
            <button onClick={stopAnimation}>Stop Car</button>
            <button onClick={increaseSpeed}>Speed Up</button>
            <button onClick={slowMovement}>Slow down</button>
        </div>
    )
}

function Car2Animation() {

    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:955, y:290, rotate:0, config:{duration: 120}})
            await next({x:940, y:245, rotate:-45})
            await next({x:890, y:230, rotate:-90})
            await next({x:745})
            await next({x:600})
            await next({x:555, y:245, rotate:-135})
            await next({x:540, y:285, rotate:-180})
            await next({y:465})
            await next({y:645})
            await next({x:550, y:680, rotate:-225})
            await next({x:585, y:690, rotate:-270})
            await next({x:585, y:690, rotate:-270})
            await next({x:627, y:680, rotate:-315})
            await next({x:638, y:590, rotate:-360})
            await next({x:610, y:495, rotate:-395})
            await next({x:600, y:440, rotate:-360})
            await next({x:630, y:380, rotate:-315})
            await next({x:745, y:339, rotate:-270})
            await next({x:865, y:380, rotate:-225})
            await next({x:893, y:448, rotate:-180})
            await next({x:875, y:505, rotate:-145})
            await next({x:853, y:575, rotate:-180})
            await next({y:640})
            await next({x:865, y:680, rotate:-225})
            await next({x:910, y:695, rotate:-270})
            await next({x:1083})
            await next({x:1255})
            await next({x:1305, y:670, rotate:-330})
            await next({x:1307, y:610, rotate:-380})
            await next({x:1240, y:420})
            await next({x:1222, y:340, rotate:-360})
            await next({y:285})
            await next({x:1205, y:240, rotate:-410})
            await next({x:1165, y:245, rotate:-490})
            await next({x:1155, y:285, rotate:-540})
            await next({y:400})
            await next({x:1140, y:465, rotate:-505})
            await next({x:1055, y:500, rotate:-445})
            await next({x:970, y:465, rotate:-400})
            await next({x:955, y:408, rotate:-360})
        },
        from:{x:955, y:408, rotate: 0, config:{duration:120}},
        pause:false,
        loop: true
    }))

    return(
        <div>
            <animated.img className="car2" style={style} src={car2}/>
        </div>
    )
}

function Car3Animation() {

    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:955, y:290, rotate:0, config:{duration: 120}})
            await next({x:940, y:245, rotate:-45})
            await next({x:890, y:230, rotate:-90})
            await next({x:745})
            await next({x:600})
            await next({x:555, y:245, rotate:-135})
            await next({x:540, y:285, rotate:-180})
            await next({y:465})
            await next({y:645})
            await next({x:550, y:680, rotate:-225})
            await next({x:585, y:690, rotate:-270})
            await next({x:585, y:690, rotate:-270})
            await next({x:627, y:680, rotate:-315})
            await next({x:638, y:590, rotate:-360})
            await next({x:610, y:495, rotate:-395})
            await next({x:600, y:440, rotate:-360})
            await next({x:630, y:380, rotate:-315})
            await next({x:745, y:339, rotate:-270})
            await next({x:865, y:380, rotate:-225})
            await next({x:893, y:448, rotate:-180})
            await next({x:875, y:505, rotate:-145})
            await next({x:853, y:575, rotate:-180})
            await next({y:640})
            await next({x:865, y:680, rotate:-225})
            await next({x:910, y:695, rotate:-270})
            await next({x:1083})
            await next({x:1255})
            await next({x:1305, y:670, rotate:-330})
            await next({x:1307, y:610, rotate:-380})
            await next({x:1240, y:420})
            await next({x:1222, y:340, rotate:-360})
            await next({y:285})
            await next({x:1205, y:240, rotate:-410})
            await next({x:1165, y:245, rotate:-490})
            await next({x:1155, y:285, rotate:-540})
            await next({y:400})
            await next({x:1140, y:465, rotate:-505})
            await next({x:1055, y:500, rotate:-445})
            await next({x:970, y:465, rotate:-400})
            await next({x:955, y:408, rotate:-360})
        },
        from:{x:955, y:408, rotate: 0, config:{duration:120}},
        pause:false,
        loop: true
    }))

    return(
        <div>
            <animated.img className="car3" style={style} src={car3}/>
        </div>
    )
}

export default function RenderCars() {
    return(
        <div>
            <div>
                <Car3Animation />
            </div>
            <div className="div1">
                <Car2Animation />   
            </div>
            <div className="div2">
                <Car1Animation />
            </div>

        </div>

    )
}