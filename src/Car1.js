import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Car1Props } from "./Car1Props";
import "./css/car1.css";

const Car1 = () => {

    function carStart() {
        Car1Props.startTime = Date.now()
    }

    function lapCount() {
        if (Car1Props.lap < 7) {
            Car1Props.lap++
            console.log(Car1Props.name, ':', Car1Props.lap) 
        } else if (Car1Props.lap === 7) {
            Car1Props.time = (Date.now() - Car1Props.startTime) / 1000
            console.log(Car1Props.name, 'has finished the race in:', Car1Props.time, 'seconds!')
            raceOver()
        }
    }

    function raceOver() {
        Car1Props.doneRace = true;
    }

    useEffect(() => {
        setTimeout(startAnimation, 3000)
    }, []);

    function startAnimation() {
        animate({pause: false})
        carStart()
    }
    
    // new car counter
    function carCounter() {
        if (Car1Props.position < 45){
            Car1Props.position++
        } else {
            Car1Props.position = 1;
        }
        Car1Props.leaderboard++
    }
    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:1040, y:115.3, rotate:0, config: {duration: Car1Props.speed}}) 
            carCounter()
            await next({x:1018, y:50.3, rotate:-45, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:943, y:21.3, rotate: -90, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:807, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:657, config: {duration: Car1Props.speed}})
            carCounter()
            // 5
            await next({x:562, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:501, y:52.3, rotate:-135, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:482, y:125.3, rotate: -180, config: {duration: Car1Props.speed}})
            carCounter()
            await next({y:325.3, config: {duration: Car1Props.speed}})
            carCounter()
            await next({y:540.3, config: {duration: Car1Props.speed}})
            carCounter()
            // 10
            await next({x:514, y:597.3, rotate: -225, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:572, y:625, rotate: -270, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:627, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:692, y:595.3, rotate: -315, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:722, y:525.3, rotate: -360, config: {duration: Car1Props.speed}})
            carCounter()
            // 15
            await next({y:425.3, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:710, y:375.3, rotate:-390, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:687, y:315.3, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:697, y:285.3, rotate:-315, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:727, y:272.3, rotate:-270, config: {duration: Car1Props.speed}})
            carCounter()
            // 20
            await next({x:787, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:827, y:295.3, rotate:-210, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:832, y:315.3, rotate:-180, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:819, y:355.3, rotate:-150, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:795, y:425.3, rotate:-180, config: {duration: Car1Props.speed}})
            carCounter()
            // 25
            await next({y:525.3, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:822, y:590.3, rotate:-225, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:892, y:625.3, rotate:-270, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1096, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1307, config: {duration: Car1Props.speed}})
            carCounter()
            // 30
            await next({x:1377, y:590.3, rotate:-325, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1392, y:545.3, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1392, y:495.3, rotate:-375, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1352, y:360.3, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1307, y:215.3, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            // 35
            await next({x:1304, y:100.3, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1284, y:43.3, rotate:-410, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1202, y:21.3, rotate:-450, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1124, y:45.3, rotate:-490, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1096, y:105.3, rotate:-540, config: {duration: Car1Props.speed}})
            carCounter()
            // 40
            await next({x:1097, y:250.3, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1087, y:285.3, rotate:-480, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1067, y:290.3, rotate:-450, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1045, y:285.3, rotate:-410, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:1040, y:235.3, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            //45
            lapCount()
            if (Car1Props.doneRace === true) {
                await next({y: 150})
            }
            await next({pause: Car1Props.doneRace})
        },
        from:{x:1040, y:235.3, rotate: 0, config: {duration: Car1Props.speed}},
        pause: true,
        loop: true,
    }))

    return (
            <animated.img className="car1" style={style} src={Car1Props.img}/>
    )
}

export default Car1;
