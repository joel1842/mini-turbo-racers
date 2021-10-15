import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import carImg from "./img/blue car.png";
import './css/car3.css';

export const Car3Props = {
    name: 'Car 3',
    img: carImg,
    lane: 3,
    speed: 100,
    startTime: null,
    time: null,
    lap: 0,
    position: 0,
    doneRace: false,
    leaderboard: 0
}

export const resetCar3 = () => {
    Car3Props.position = 0;
    Car3Props.lap = 0;
    Car3Props.doneRace = false;
    Car3Props.startTime = null;
    Car3Props.time = null;
    Car3Props.speed = 100;
}

const Car3 = () => {
    function carStart() {
        Car3Props.startTime = Date.now()
    }

    function lapCount() {
        if (Car3Props.lap < 3) {
            Car3Props.lap++
            console.log(Car3Props.name, ':', Car3Props.lap) 
        } else if (Car3Props.lap === 3) {
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
            await next({y:140, rotate:0, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:952, y:108, rotate:-45, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:900, y:94, rotate:-90, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:753, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:607, config: {duration: Car3Props.speed}})
            carCounter()
            // 5
            await next({x:567, y:109, rotate:-135, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:558, y:140, rotate:-180, config: {duration: Car3Props.speed}})
            carCounter()
            await next({y:259, config: {duration: Car3Props.speed}})
            carCounter()
            await next({y:378, config: {duration: Car3Props.speed}})
            carCounter()
            await next({y:499, config: {duration: Car3Props.speed}})
            carCounter()
            // 10
            await next({x:567, y:537, rotate:-225, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:602, y:547, rotate:-270, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:639, y:534, rotate:-315, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:647, y:506, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            await next({y:412, config: {duration: Car3Props.speed}})
            carCounter()
            // 15
            await next({x:632, y:379, rotate:-395, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:610, y:314, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:632, y:242, rotate:-325, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:680, y:205, rotate:-300, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:752, y:193, rotate:-270, config: {duration: Car3Props.speed}})
            carCounter()
            // 20
            await next({x:850, y:208, rotate:-240, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:895, y:250, rotate:-220, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:911, y:304, rotate:-180, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:897, y:359, rotate:-150, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:872, y:434, rotate:-180, config: {duration: Car3Props.speed}})
            carCounter()
            // 25
            await next({y:499, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:879, y:534, rotate:-225, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:917, y:547, rotate:-270, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1035, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1153, config: {duration: Car3Props.speed}})
            carCounter()
            // 30
            await next({x:1272, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1314, y:524, rotate:-330, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1308, y:444, rotate:-380, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1271, y:347, rotate:-380, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1237, y:250, config: {duration: Car3Props.speed}})
            carCounter()
            // 35
            await next({x:1229, y:174, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            await next({y:119, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1222, y:104, rotate:-410, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1182, y:104, rotate:-490, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1173, y:134, rotate:-540, config: {duration: Car3Props.speed}})
            carCounter()
            // 40
            await next({y:249, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1157, y:324, rotate:-505, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:1077, y:365, rotate:-450, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:987, y:329, rotate:-400, config: {duration: Car3Props.speed}})
            carCounter()
            await next({x:964, y:235, rotate:-360, config: {duration: Car3Props.speed}})
            carCounter()
            // 45
            lapCount()
            await next({pause: Car3Props.doneRace})
        },
        from:{x:964, y:235, rotate: 0, config: {duration: Car3Props.speed}},
        pause: true,
        loop: true,
    }))

    return(
        <div>
            <animated.img className="car3" style={style} src={Car3Props.img}/>
        </div>
    )
}

export default Car3;
