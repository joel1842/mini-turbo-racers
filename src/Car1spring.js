import React, {useState} from "react";
import { useSpring, animated } from "react-spring";
import './css/car1.css'
import Car1 from "./Car1";
import car1 from './img/orange car.png';
import Car2 from "./Car2";
import car2 from './img/neon car.png';
import Car3 from "./Car3";
import car3 from './img/blue car.png';

let speed = 100;
let animating = false

function toggleAnimation() {
    speed = 200
    animating = true
}

function Car1Animation() {

    function pause() {
        animate({pause: true})
    }

    function increaseSpeed() {
        speed = 50
    }

    function slowMovement() {
        speed = 110
    }
    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:1033, y:190, rotate:0, config: {duration: speed}})
            await next({x:1011, y:125, rotate:-45, config: {duration: speed}})
            await next({x:936, y:96, rotate: -90, config: {duration: speed}})
            await next({x:800, config: {duration: speed}})
            await next({x: 650, config: {duration: speed}})
            await next({x:555, config: {duration: speed}})
            await next({x:494, y:127, rotate:-135, config: {duration: speed}})
            await next({x:475, y:200, rotate: -180, config: {duration: speed}})
            await next({y:400, config: {duration: speed}})
            await next({y:615, config: {duration: speed}})
            await next({x:507, y:672, rotate: -225, config: {duration: speed}})
            await next({x:565, y: 700, rotate: -270, config: {duration: speed}})
            await next({x:620, config: {duration: speed}})
            await next({x:685, y:670, rotate: -315, config: {duration: speed}})
            await next({x:715, y:600, rotate: -360, config: {duration: speed}})
            await next({y:500, config: {duration: speed}})
            await next({x:703, y:450, rotate:-390, config: {duration: speed}})
            await next({x:680, y:390, rotate:-360, config: {duration: speed}})
            await next({x:690, y:360, rotate:-315, config: {duration: speed}})
            await next({x:720, y:347, rotate:-270, config: {duration: speed}})
            await next({x:780, config: {duration: speed}})
            await next({x:820, y:370, rotate:-210, config: {duration: speed}})
            await next({x:825, y:390, rotate:-180, config: {duration: speed}})
            await next({x:812, y:430, rotate:-150, config: {duration: speed}})
            await next({x:788, y:500, rotate:-180, config: {duration: speed}})
            await next({y:600, config: {duration: speed}})
            await next({x:815, y:665, rotate:-225, config: {duration: speed}})
            await next({x:885, y:700, rotate:-270, config: {duration: speed}})
            await next({x:1089, config: {duration: speed}})
            await next({x:1300, config: {duration: speed}})
            await next({x:1370, y:665, rotate:-325, config: {duration: speed}})
            await next({x:1385, y:620, rotate:-360, config: {duration: speed}})
            await next({x:1385, y:570, rotate:-375, config: {duration: speed}})
            await next({x:1345, y:435, config: {duration: speed}})
            await next({x:1300, y:290, rotate:-360, config: {duration: speed}})
            await next({x:1297, y:175, config: {duration: speed}})
            await next({x:1277, y:118, rotate:-410, config: {duration: speed}})
            await next({x:1195, y:96, rotate:-450, config: {duration: speed}})
            await next({x:1117, y:120, rotate:-490, config: {duration: speed}})
            await next({x:1089, y:180, rotate:-540, config: {duration: speed}})
            await next({x:1090, y:325, config: {duration: speed}})
            await next({x:1080, y:360, rotate:-480, config: {duration: speed}})
            await next({x:1060, y:365, rotate:-450, config: {duration: speed}})
            await next({x:1045, y:360, rotate:-410, config: {duration: speed}})
            await next({x:1033, y:310, rotate:-360, config: {duration: speed}})
            Car1.lapCount()
            await next({pause: Car1.doneRace})
            
        },
        from:{x:1033, y:310, rotate: 0},
        pause: false,
        loop: true
    }))

    return (
        <div>
            <animated.img className="car1" style={style} src={car1}/>
            {/* <button onClick={startAnimation}>Start Car</button>
            <button onClick={stopAnimation}>Stop Car</button>
            <button onClick={increaseSpeed}>Speed Up</button>
            <button onClick={slowMovement}>Slow down</button> */}
        </div>
    )
}

function Car2Animation() {


    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({y:250, config: {duration: speed}})
            await next({x:978, y:200, rotate:-45, config: {duration: speed}})
            await next({x:920, y:177, rotate:-90, config: {duration: speed}})
            await next({x:745, config: {duration: speed}})
            await next({x:600, config: {duration: speed}})
            await next({x:533, y:195, rotate:-135, config: {duration: speed}})
            await next({x:513, y:245, rotate:-180, config: {duration: speed}})
            await next({y:465, config: {duration: speed}})
            await next({y:645, config: {duration: speed}})
            await next({x:530, y:685, rotate:-225, config: {duration: speed}})
            await next({x:595, y:707, rotate:-270, config: {duration: speed}})
            await next({x:660, y:684, rotate:-315, config: {duration: speed}})
            await next({x:678, y:640, rotate:-360, config: {duration: speed}})
            await next({y:550, config: {duration: speed}})
            await next({x:663, y:495, rotate:-390, config: {duration: speed}})
            await next({x:643, y:440, rotate:-360, config: {duration: speed}})
            await next({x:660, y:377, rotate:-315, config: {duration: speed}})
            await next({x:750, y:350, rotate:-270, config: {duration: speed}})
            await next({x:842, y:375, rotate:-225, config: {duration: speed}})
            await next({x:865, y:420, rotate:-180, config: {duration: speed}})
            await next({x:845, y:490, rotate:-150, config: {duration: speed}})
            await next({x:827, y:550, rotate:-180, config: {duration: speed}})
            await next({y:640, config: {duration: speed}})
            await next({x:850, y:690, rotate:-225, config: {duration: speed}})
            await next({x:910, y:707, rotate:-270, config: {duration: speed}})
            await next({x:1083, config: {duration: speed}})
            await next({x:1280, config: {duration: speed}})
            await next({x:1343, y:671, rotate:-330, config: {duration: speed}})
            await next({x:1345, y:600, rotate:-380, config: {duration: speed}})
            await next({x:1281, y:410, config: {duration: speed}})
            await next({x:1261, y:330, rotate:-360, config: {duration: speed}})
            await next({y:245, config: {duration: speed}})
            await next({x:1245, y:195, rotate:-410, config: {duration: speed}})
            await next({x:1200, y:177, rotate:-450, config: {duration: speed}})
            await next({x:1145, y:195, rotate:-490, config: {duration: speed}})
            await next({x:1129, y:240, rotate:-540, config: {duration: speed}})
            await next({y:385, config: {duration: speed}})
            await next({x:1115, y:422, rotate:-505, config: {duration: speed}})
            await next({x:1065, y:448, rotate:-450, config: {duration: speed}})
            await next({x:1010, y:422, rotate:-400, config: {duration: speed}})
            await next({x:994, y:354, rotate:-360, config: {duration: speed}})
            Car2.lapCount()
            await next({pause: Car2.doneRace})
        },
        from:{x:994, y:354, rotate: 0, config: {duration: speed}},
        pause: false,
        loop:true
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
            await next({y:310, rotate:0, config: {duration: speed}})
            await next({x:945, y:275, rotate:-45, config: {duration: speed}})
            await next({x:900, y:260, rotate:-90, config: {duration: speed}})
            await next({x:750, config: {duration: speed}})
            await next({x:600, config: {duration: speed}})
            await next({x:551, y:275, rotate:-135, config: {duration: speed}})
            await next({y:465, rotate:-180, config: {duration: speed}})
            await next({y:665, config: {duration: speed}})
            await next({x:560, y:703, rotate:-225, config: {duration: speed}})
            await next({x:595, y:713, rotate:-270, config: {duration: speed}})
            await next({x:632, y:700, rotate:-315, config: {duration: speed}})
            await next({x:640, y:670, rotate:-360, config: {duration: speed}})
            await next({y:600, config: {duration: speed}})
            await next({x:625, y:545, rotate:-395, config: {duration: speed}})
            await next({x:602, y:480, rotate:-360, config: {duration: speed}})
            await next({x:635, y:396, rotate:-315, config: {duration: speed}})
            await next({x:745, y:359, rotate:-270, config: {duration: speed}})
            await next({x:875, y:400, rotate:-225, config: {duration: speed}})
            await next({x:903, y:470, rotate:-180, config: {duration: speed}})
            await next({x:890, y:525, rotate:-145, config: {duration: speed}})
            await next({x:865, y:600, rotate:-180, config: {duration: speed}})
            await next({y:665, config: {duration: speed}})
            await next({x:872, y:700, rotate:-225, config: {duration: speed}})
            await next({x:910, y:714, rotate:-270, config: {duration: speed}})
            await next({x:1083, config: {duration: speed}})
            await next({x:1265, config: {duration: speed}})
            await next({x:1307, y:690, rotate:-330, config: {duration: speed}})
            await next({x:1299, y:610, rotate:-380, config: {duration: speed}})
            await next({x:1230, y:420, config: {duration: speed}})
            await next({x:1222, y:340, rotate:-360, config: {duration: speed}})
            await next({y:285, config: {duration: speed}})
            await next({x:1215, y:270, rotate:-410, config: {duration: speed}})
            await next({x:1175, y:270, rotate:-490, config: {duration: speed}})
            await next({x:1166, y:300, rotate:-540, config: {duration: speed}})
            await next({y:415, config: {duration: speed}})
            await next({x:1150, y:490, rotate:-505, config: {duration: speed}})
            await next({x:1070, y:531, rotate:-450, config: {duration: speed}})
            await next({x:980, y:495, rotate:-400, config: {duration: speed}})
            await next({x:957, y:400, rotate:-360, config: {duration: speed}})
            Car3.lapCount()
            await next({pause: Car3.doneRace})
        },
        from:{x:957, y:400, rotate: 0, config: {duration: speed}},
        pause: false,
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
            <button onClick={toggleAnimation}>toggle animation</button>
            <div>
                <Car3Animation/>
            </div>
            <div>
                <Car2Animation/>   
            </div>
            <div>
                <Car1Animation/>
            </div>


        </div>

    )
}