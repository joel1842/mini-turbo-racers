import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Car1Props } from "./Car1Props";
import "./css/car1.css";

const Car1 = () => {

    // starts car animation after 3 seconds
    useEffect(() => {
        setTimeout(startAnimation, 3000)
    }, []);

    // starts animation
    function startAnimation() {
        animate({pause: false})
        startTime()
    }

    // logs time at start of race
    function startTime() {
        Car1Props.startTime = Date.now()
    }

    // counts car lap, triggers race end
    function lapCount() {
        if (Car1Props.lap < 7) {
            Car1Props.lap++
        } else if (Car1Props.lap === 7) {
            Car1Props.time = (Date.now() - Car1Props.startTime) / 1000
            console.log(Car1Props.name, 'has finished the race in:', Car1Props.time, 'seconds!')
            raceOver()
        }
    }
    
    // counts position of car on track
    function carCounter() {
        if (Car1Props.position < 45){
            Car1Props.position++
        } else {
            Car1Props.position = 1;
        }
        Car1Props.leaderboard++
    }

    // sets car to done race
    function raceOver() {
        Car1Props.doneRace = true;
    }
    
    // car animation
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:590, y:115, rotate:0, config: {duration: Car1Props.speed}}) 
            carCounter()
            await next({x:568, y:50, rotate:-45, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:357, y:21, rotate: -90, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:357, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:207, config: {duration: Car1Props.speed}})
            carCounter()
            // 5
            await next({x:112, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:51, y:52, rotate:-135, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:32, y:125, rotate: -180, config: {duration: Car1Props.speed}})
            carCounter()
            await next({y:325, config: {duration: Car1Props.speed}})
            carCounter()
            await next({y:540, config: {duration: Car1Props.speed}})
            carCounter()
            // 10
            await next({x:64, y:597, rotate: -225, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:122, y:625, rotate: -270, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:177, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:242, y:595, rotate: -315, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:272, y:525, rotate: -360, config: {duration: Car1Props.speed}})
            carCounter()
            // 15
            await next({y:425, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:260, y:375, rotate:-390, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:237, y:315, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:247, y:285, rotate:-315, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:277, y:272, rotate:-270, config: {duration: Car1Props.speed}})
            carCounter()
            // 20
            await next({x:337, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:377, y:295, rotate:-210, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:382, y:315, rotate:-180, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:369, y:355, rotate:-150, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:345, y:425, rotate:-180, config: {duration: Car1Props.speed}})
            carCounter()
            // 25
            await next({y:525, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:372, y:590.3, rotate:-225, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:442, y:625.3, rotate:-270, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:646, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:857, config: {duration: Car1Props.speed}})
            carCounter()
            // 30
            await next({x:927, y:590, rotate:-325, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:942, y:545, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:942, y:495, rotate:-375, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:902, y:360, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:857, y:215, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            // 35
            await next({x:854, y:100, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:834, y:43, rotate:-410, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:752, y:21, rotate:-450, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:674, y:45, rotate:-490, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:646, y:105, rotate:-540, config: {duration: Car1Props.speed}})
            carCounter()
            // 40
            await next({x:647, y:250, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:637, y:285, rotate:-480, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:617, y:290, rotate:-450, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:595, y:285, rotate:-410, config: {duration: Car1Props.speed}})
            carCounter()
            await next({x:590, y:235, rotate:-360, config: {duration: Car1Props.speed}})
            carCounter()
            //45
            lapCount()
            if (Car1Props.doneRace === true) {
                await next({y: 150})
            }
            await next({pause: Car1Props.doneRace})
        },
        from:{x:590, y:235.3, rotate: 0, config: {duration: Car1Props.speed}},
        pause: true,
        loop: true,
    }))

    return (
            <animated.img className="car1" style={style} src={Car1Props.img}/>
    )
}

export default Car1;
