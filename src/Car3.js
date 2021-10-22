import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Car3Props } from "./Car3Props";
import './css/car3.css';

const Car3 = () => {
    function carStart() {
        Car3Props.startTime = Date.now()
    }

    function lapCount() {
        if (Car3Props.lap < 7) {
            Car3Props.lap++
            console.log(Car3Props.name, ':', Car3Props.lap) 
        } else if (Car3Props.lap === 7) {
            Car3Props.time = (Date.now() - Car3Props.startTime) / 1000
            console.log(Car3Props.name, 'has finished the race in:', Car3Props.time, 'seconds!')
            raceOver()
        }
    }

    function raceOver() {
        Car3Props.doneRace = true;
    }

    useEffect(() => {
        setTimeout(startAnimation, 3000)
    }, []);

    function startAnimation() {
        animate({pause: false})
        carStart()
    }

    function carCounter() {
        if (Car3Props.position < 45){
            Car3Props.position++
        } else {
            Car3Props.position = 1
        }
        Car3Props.leaderboard++
    }

    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:514, y:140, rotate:0, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:502, y:108, rotate:-45, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:450, y:94, rotate:-90, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:303, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:157, config: {duration: Car3Props.speed}})
            carCounter()
            // 5
            await next({x:117, y:109, rotate:-135, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:108, y:140, rotate:-180, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:108, y:259, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:108, y:378, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:108, y:499, config: {duration: Car3Props.speed}})
            carCounter()
            // 10
            await next({x:117, y:537, rotate:-225, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:152, y:547, rotate:-270, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:189, y:534, rotate:-315, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:197, y:506, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:197, y:412, config: {duration: Car3Props.speed}})
            carCounter()
            // 15
            await next({x:182, y:379, rotate:-395, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:160, y:314, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:182, y:242, rotate:-325, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:230, y:205, rotate:-300, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:302, y:193, rotate:-270, config: {duration: Car3Props.speed}})
            carCounter()
            // 20
            await next({x:400, y:208, rotate:-240, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:445, y:250, rotate:-220, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:461, y:304, rotate:-180, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:447, y:359, rotate:-150, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:422, y:434, rotate:-180, config: {duration: Car3Props.speed}})
            carCounter()
            // 25
            await next({x:422, y:499, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:429, y:534, rotate:-225, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:467, y:547, rotate:-270, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:585, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:703, config: {duration: Car3Props.speed}})
            carCounter()
            // 30
            await next({x:822, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:864, y:524, rotate:-330, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:858, y:444, rotate:-380, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:821, y:347, rotate:-380, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:787, y:250, config: {duration: Car3Props.speed}})
            carCounter()
            // 35
            await next({x:779, y:174, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:779, y:119, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:772, y:104, rotate:-410, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:732, y:104, rotate:-490, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:723, y:134, rotate:-540, config: {duration: Car3Props.speed}})
            carCounter()
            // 40
            await next({x:723, y:249, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:707, y:324, rotate:-505, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:627, y:365, rotate:-450, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:537, y:329, rotate:-400, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:514, y:235, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            // 45
            lapCount()
            if (Car3Props.doneRace === true) {
                await next({y: 150})
            }
            await next({pause: Car3Props.doneRace})
        },
        from:{x:514, y:235, rotate: 0, config: {duration: Car3Props.speed}},
        pause: true,
        loop: true,
    }))

    return(
        <animated.img className="car3" style={style} src={Car3Props.img}/>
    )
}

export default Car3;
