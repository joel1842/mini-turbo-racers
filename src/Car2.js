import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Car2Props } from "./Car2Props";
import './css/car2.css';

const Car2 = () => {
    
    function carStart() {
        Car2Props.startTime = Date.now()
    }

    function lapCount() {
        if (Car2Props.lap < 7) {
            Car2Props.lap++
            console.log(Car2Props.name, ':', Car2Props.lap) 
        } else if (Car2Props.lap === 7) {
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
            Car2Props.position = 1;
        }
        Car2Props.leaderboard++
    }
    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:552, y:130, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:537, y:80, rotate:-45, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:472, y:56, rotate:-90, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:365, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:258, config: {duration: Car2Props.speed}})
            carCounter()
            // 5
            await next({x:150, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:87, y:75, rotate:-135, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:71, y:125, rotate:-180, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:71, y:258, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:71, y:391, config: {duration: Car2Props.speed}})
            carCounter()
            // 10
            await next({x:71, y:476, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:87, y:561, rotate:-225, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:150, y:585, rotate:-270, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:218, y:562, rotate:-315, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:236, y:522, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            // 15
            await next({x:236, y:430, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:219, y:370, rotate:-390, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:200, y:313, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:217, y:257, rotate:-315, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:310, y:229, rotate:-270, config: {duration: Car2Props.speed}})
            carCounter()
            // 20
            await next({x:399, y:252, rotate:-225, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:422, y:300, rotate:-180, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:401, y:370, rotate:-150, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:385, y:430, rotate:-180, config: {duration: Car2Props.speed}})
            carCounter()
            await next({y:499, config: {duration: Car2Props.speed}})
            carCounter()
            // 25
            await next({x:407, y:568, rotate:-225, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:467, y:585, rotate:-270, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:590, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:713, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:837, config: {duration: Car2Props.speed}})
            carCounter()
            //30
            await next({x:900, y:550, rotate:-330, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:904, y:479, rotate:-375, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:873, y:383, rotate:-380, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:838, y:288, rotate:-380, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:818, y:208, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            //35
            await next({x:818, y:123, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:802, y:73, rotate:-410, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:757, y:55, rotate:-450, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:702, y:73, rotate:-490, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:686, y:118, rotate:-540, config: {duration: Car2Props.speed}})
            carCounter()
            // 40
            await next({x:686, y:263, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:672, y:302, rotate:-505, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:622, y:327, rotate:-450, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:567, y:301, rotate:-400, config: {duration: Car2Props.speed}})
            carCounter()
            await next({x:552, y:234, rotate:-360, config: {duration: Car2Props.speed}})
            carCounter()
            //45
            lapCount()
            if (Car2Props.doneRace === true) {
                await next({y: 150})
            }
            await next({pause: Car2Props.doneRace})
        },
        from:{x:552, y:234.6, rotate: 0, config: {duration: Car2Props.speed}},
        pause: true,
        loop: true,
    }))

    return(
        <animated.img className="car2" style={style} src={Car2Props.img}/>
    )
}


export default Car2; 