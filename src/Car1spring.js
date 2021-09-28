import React from "react";
import { useSpring, animated } from "react-spring";
import car1 from './img/orange car.png';

function Car1() {
    
    const start = () => {
        animate({pause: false})
    }

    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({y:175})
            await next({x:25, y:110, rotate: -90})
            await next({x:-350})
            await next({x:-450, y:200, rotate: -180})
            await next({y: 615})
            await next({x:-425, y: 660, rotate: -225})
            await next({x:-360, y: 700, rotate: -270})
            await next({x:-320})
            await next({x:-260, y:675, rotate: -315})
            await next({x:-220, y:600, rotate: -360})
            await next({y:500})
            await next({x:-240, y:450, rotate:-395})
            await next({x:-260, y:400, rotate:-360})
            await next({x:-200, y:340, rotate:-270})
            await next({x:-160})
            await next({x:-100, y:400, rotate:-180})
            await next({x:-110, y:440, rotate:-135})
            await next({x:-135, y:490, rotate:-180})
            await next({y: 600})
            await next({x:-100, y:670, rotate:-225})
            await next({x:-40, y:700, rotate:-270})
            await next({x:350})
            await next({x:420, y:680, rotate:-315})
            await next({x:445, y:620, rotate:-360})
            await next({x:445, y:570, rotate:-375})
            await next({x:365, y:300})
            await next({x:360, y:175, rotate:-360})
            await next({x:340, y:125, rotate:-410})
            await next({x:265, y:110, rotate:-450})
            await next({x:195, y:125, rotate:-490})
            await next({x:170, y:175, rotate:-540})
            await next({x:165, y:360})
            await next({x:130, y:375, rotate:-450})
            await next({x:100, y:350, rotate:-360})
        },
        from:{x:100, y:350, rotate: 0},
        loop: true,
        pause: true
    }))

    return <animated.img className="car1" style={style} src={carImg}/>
}