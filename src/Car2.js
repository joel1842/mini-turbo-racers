import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import carImg from './img/neon car.png';
import './css/car2.css';

export const Car2Props = {
    name: 'Car 2',
    img: carImg,
    lane: 2,
    speed: 100,
    startTime: null,
    time: null,
    lap: 0,
    position: 0,
    doneRace: false,
    leaderboard: 0
}

export const resetCar2 = () => {
    Car2Props.position = 0;
    Car2Props.lap = 0;
    Car2Props.doneRace = false;
    Car2Props.startTime = null;
    Car2Props.time = null;
    Car2Props.speed = 100;
}

const Car2 = () => {
    
    function carStart() {
        Car2Props.startTime = Date.now()
    }

    function lapCount() {
        if (Car2Props.lap < 3) {
            Car2Props.lap++
            console.log(Car2Props.name, ':', Car2Props.lap) 
        } else if (Car2Props.lap === 3) {
            Car2Props.time = (Date.now() - Car2Props.startTime) / 1000
            console.log(Car2Props.name, 'has finished the race in:', Car2Props.time, 'seconds!')
            raceOver()
        }
    }

    function raceOver() {
        Car2Props.doneRace = true;
    }
    useEffect(() => {
        setTimeout(startAnimation, 3000)
    }, []);

    function startAnimation() {
        animate({pause: false})
        carStart()
    }

    function carCounter() {
        if (Car2Props.position < 45){
            Car2Props.position++
        } else {
            Car2Props.position = 1
        }
        Car2Props.leaderboard++
    }
    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({y:130.6, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:987, y:80.6, rotate:-45, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:922, y:56, rotate:-90, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:815, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:708, config: {duration: Car2Props.speed}})
            carCounter()
            // 5
            await next({x:600, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:537, y:75.6, rotate:-135, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:521, y:125.6, rotate:-180, config: {duration: Car2Props.speed}})
            carCounter()
            await next({y:258, config: {duration: Car2Props.speed}})
            carCounter()
            await next({y:391, config: {duration: Car2Props.speed}})
            carCounter()
            // 10
            await next({y:525.6, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:537, y:561, rotate:-225, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:600, y:585, rotate:-270, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:668, y:562, rotate:-315, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:686, y:522, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            // 15
            await next({y:430.6, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:669, y:370, rotate:-390, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:650, y:313, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:667, y:257.6, rotate:-315, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:760, y:229, rotate:-270, config: {duration: Car2Props.speed}})
            carCounter()
            // 20
            await next({x:849, y:252, rotate:-225, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:872, y:300.6, rotate:-180, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:851, y:370.6, rotate:-150, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:835, y:430.6, rotate:-180, config: {duration: Car2Props.speed}})
            carCounter()
            await next({y:520.6, config: {duration: Car2Props.speed}})
            carCounter()
            // 25
            await next({x:857, y:568, rotate:-225, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:917, y:585, rotate:-270, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1040, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1163, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1287, config: {duration: Car2Props.speed}})
            carCounter()
            // 30
            await next({x:1350, y:550, rotate:-330, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1354, y:479, rotate:-375, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1323, y:383, rotate:-380, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1288, y:288, rotate:-380, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1268, y:208, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            //35
            await next({y:123, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1252, y:73, rotate:-410, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1207, y:55, rotate:-450, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1152, y:73, rotate:-490, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1136, y:118, rotate:-540, config: {duration: Car2Props.speed}})
            carCounter()
            // 40
            await next({y:263, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1122, y:302, rotate:-505, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1072, y:327, rotate:-450, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1017, y:301, rotate:-400, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:1002, y:234.6, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            //45
            lapCount()
            await next({pause: Car2Props.doneRace})
        },
        from:{x:1002, y:234.6, rotate: 0, config: {duration: Car2Props.speed}},
        pause: true,
        loop: true,
    }))

    return(
        <div>
            <animated.img className="car2" style={style} src={Car2Props.img}/>
        </div>
    )
}


export default Car2; 