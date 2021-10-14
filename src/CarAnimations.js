import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { PowerUpPositions } from './PowerUpPositions';
import './css/car1.css'
import Car1 from "./Car1";
import Car2 from "./Car2";
import Car3 from "./Car3";


const Car1Animation = (props) => {

    useEffect(() => {
        setTimeout(startAnimation, 3000)
    }, []);

    function startAnimation() {
        animate({pause: false})
        Car1.carStart()
    }
    
    // new car counter
    let carPos = 0
    function carCounter() {
        if (carPos < 45){
            carPos++
        } else {
            carPos = 1
        }

        Car1.position = carPos
    }
    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({x:1040, y:115.3, rotate:0, config: {duration: Car1.speed}}) 
            carCounter()
            await next({x:1018, y:50.3, rotate:-45, config: {duration: Car1.speed}})
            carCounter()
            await next({x:943, y:21.3, rotate: -90, config: {duration: Car1.speed}})
            carCounter()
            await next({x:807, config: {duration: Car1.speed}})
            carCounter()
            await next({x:657, config: {duration: Car1.speed}})
            carCounter()
            // 5
            await next({x:562, config: {duration: Car1.speed}})
            carCounter()
            await next({x:501, y:52.3, rotate:-135, config: {duration: Car1.speed}})
            carCounter()
            await next({x:482, y:125.3, rotate: -180, config: {duration: Car1.speed}})
            carCounter()
            await next({y:325.3, config: {duration: Car1.speed}})
            carCounter()
            await next({y:540.3, config: {duration: Car1.speed}})
            carCounter()
            // 10
            await next({x:514, y:597.3, rotate: -225, config: {duration: Car1.speed}})
            carCounter()
            await next({x:572, y:625, rotate: -270, config: {duration: Car1.speed}})
            carCounter()
            await next({x:627, config: {duration: Car1.speed}})
            carCounter()
            await next({x:692, y:595.3, rotate: -315, config: {duration: Car1.speed}})
            carCounter()
            await next({x:722, y:525.3, rotate: -360, config: {duration: Car1.speed}})
            carCounter()
            // 15
            await next({y:425.3, config: {duration: Car1.speed}})
            carCounter()
            await next({x:710, y:375.3, rotate:-390, config: {duration: Car1.speed}})
            carCounter()
            await next({x:687, y:315.3, rotate:-360, config: {duration: Car1.speed}})
            carCounter()
            await next({x:697, y:285.3, rotate:-315, config: {duration: Car1.speed}})
            carCounter()
            await next({x:727, y:272.3, rotate:-270, config: {duration: Car1.speed}})
            carCounter()
            // 20
            await next({x:787, config: {duration: Car1.speed}})
            carCounter()
            await next({x:827, y:295.3, rotate:-210, config: {duration: Car1.speed}})
            carCounter()
            await next({x:832, y:315.3, rotate:-180, config: {duration: Car1.speed}})
            carCounter()
            await next({x:819, y:355.3, rotate:-150, config: {duration: Car1.speed}})
            carCounter()
            await next({x:795, y:425.3, rotate:-180, config: {duration: Car1.speed}})
            carCounter()
            // 25
            await next({y:525.3, config: {duration: Car1.speed}})
            carCounter()
            await next({x:822, y:590.3, rotate:-225, config: {duration: Car1.speed}})
            carCounter()
            await next({x:892, y:625.3, rotate:-270, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1096, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1307, config: {duration: Car1.speed}})
            carCounter()
            // 30
            await next({x:1377, y:590.3, rotate:-325, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1392, y:545.3, rotate:-360, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1392, y:495.3, rotate:-375, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1352, y:360.3, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1307, y:215.3, rotate:-360, config: {duration: Car1.speed}})
            carCounter()
            // 35
            await next({x:1304, y:100.3, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1284, y:43.3, rotate:-410, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1202, y:21.3, rotate:-450, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1124, y:45.3, rotate:-490, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1096, y:105.3, rotate:-540, config: {duration: Car1.speed}})
            carCounter()
            // 40
            await next({x:1097, y:250.3, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1087, y:285.3, rotate:-480, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1067, y:290.3, rotate:-450, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1045, y:285.3, rotate:-410, config: {duration: Car1.speed}})
            carCounter()
            await next({x:1040, y:235.3, rotate:-360, config: {duration: Car1.speed}})
            carCounter()
            //45
            Car1.lapCount()
            await next({pause: Car1.doneRace})
        },
        from:{x:1040, y:235.3, rotate: 0, config: {duration: Car1.speed}},
        pause: true,
        loop: true,
    }))

    return (
            <animated.img className="car1" style={style} src={Car1.image}/>
    )
}

function Car2Animation() {

    useEffect(() => {
        setTimeout(startAnimation, 3000)
    }, []);

    function startAnimation() {
        animate({pause: false})
        Car2.carStart()
    }

    let carPos = 0
    function carCounter() {
        if (carPos < 45){
            carPos++
        } else {
            carPos = 1
        }

        Car2.position = carPos
    }
    
    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({y:130.6, config: {duration: Car2.speed}})
            carCounter()
            await next({x:987, y:80.6, rotate:-45, config: {duration: Car2.speed}})
            carCounter()
            await next({x:922, y:56, rotate:-90, config: {duration: Car2.speed}})
            carCounter()
            await next({x:815, config: {duration: Car2.speed}})
            carCounter()
            await next({x:708, config: {duration: Car2.speed}})
            carCounter()
            // 5
            await next({x:600, config: {duration: Car2.speed}})
            carCounter()
            await next({x:537, y:75.6, rotate:-135, config: {duration: Car2.speed}})
            carCounter()
            await next({x:521, y:125.6, rotate:-180, config: {duration: Car2.speed}})
            carCounter()
            await next({y:258, config: {duration: Car2.speed}})
            carCounter()
            await next({y:391, config: {duration: Car2.speed}})
            carCounter()
            // 10
            await next({y:525.6, config: {duration: Car2.speed}})
            carCounter()
            await next({x:537, y:561, rotate:-225, config: {duration: Car2.speed}})
            carCounter()
            await next({x:600, y:585, rotate:-270, config: {duration: Car2.speed}})
            carCounter()
            await next({x:668, y:562, rotate:-315, config: {duration: Car2.speed}})
            carCounter()
            await next({x:686, y:522, rotate:-360, config: {duration: Car2.speed}})
            carCounter()
            // 15
            await next({y:430.6, config: {duration: Car2.speed}})
            carCounter()
            await next({x:669, y:370, rotate:-390, config: {duration: Car2.speed}})
            carCounter()
            await next({x:650, y:313, rotate:-360, config: {duration: Car2.speed}})
            carCounter()
            await next({x:667, y:257.6, rotate:-315, config: {duration: Car2.speed}})
            carCounter()
            await next({x:760, y:229, rotate:-270, config: {duration: Car2.speed}})
            carCounter()
            // 20
            await next({x:849, y:252, rotate:-225, config: {duration: Car2.speed}})
            carCounter()
            await next({x:872, y:300.6, rotate:-180, config: {duration: Car2.speed}})
            carCounter()
            await next({x:851, y:370.6, rotate:-150, config: {duration: Car2.speed}})
            carCounter()
            await next({x:835, y:430.6, rotate:-180, config: {duration: Car2.speed}})
            carCounter()
            await next({y:520.6, config: {duration: Car2.speed}})
            carCounter()
            // 25
            await next({x:857, y:568, rotate:-225, config: {duration: Car2.speed}})
            carCounter()
            await next({x:917, y:585, rotate:-270, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1040, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1163, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1287, config: {duration: Car2.speed}})
            carCounter()
            // 30
            await next({x:1350, y:550, rotate:-330, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1354, y:479, rotate:-375, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1323, y:383, rotate:-380, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1288, y:288, rotate:-380, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1268, y:208, rotate:-360, config: {duration: Car2.speed}})
            carCounter()
            //35
            await next({y:123, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1252, y:73, rotate:-410, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1207, y:55, rotate:-450, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1152, y:73, rotate:-490, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1136, y:118, rotate:-540, config: {duration: Car2.speed}})
            carCounter()
            // 40
            await next({y:263, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1122, y:302, rotate:-505, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1072, y:327, rotate:-450, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1017, y:301, rotate:-400, config: {duration: Car2.speed}})
            carCounter()
            await next({x:1002, y:234.6, rotate:-360, config: {duration: Car2.speed}})
            carCounter()
            //45
            Car2.lapCount()
            await next({pause: Car2.doneRace})
        },
        from:{x:1002, y:234.6, rotate: 0, config: {duration: Car2.speed}},
        pause: true,
        loop: true,
    }))

    return(
        <div>
            <animated.img className="car2" style={style} src={Car2.image}/>
        </div>
    )
}

function Car3Animation() {

    useEffect(() => {
        setTimeout(startAnimation, 3000)
    }, []);

    function startAnimation() {
        animate({pause: false})
        Car3.carStart()
    }

    let carPos = 0
    function carCounter() {
        if (carPos < 45){
            carPos++
        } else {
            carPos = 1
        }

        Car3.position = carPos
    }

    const [style, animate] = useSpring(()=> ({
        to: async (next, cancel) => {
            await next({y:140, rotate:0, config: {duration: Car3.speed}})
            carCounter()
            await next({x:952, y:108, rotate:-45, config: {duration: Car3.speed}})
            carCounter()
            await next({x:900, y:94, rotate:-90, config: {duration: Car3.speed}})
            carCounter()
            await next({x:753, config: {duration: Car3.speed}})
            carCounter()
            await next({x:607, config: {duration: Car3.speed}})
            carCounter()
            // 5
            await next({x:567, y:109, rotate:-135, config: {duration: Car3.speed}})
            carCounter()
            await next({x:558, y:140, rotate:-180, config: {duration: Car3.speed}})
            carCounter()
            await next({y:259, config: {duration: Car3.speed}})
            carCounter()
            await next({y:378, config: {duration: Car3.speed}})
            carCounter()
            await next({y:499, config: {duration: Car3.speed}})
            carCounter()
            // 10
            await next({x:567, y:537, rotate:-225, config: {duration: Car3.speed}})
            carCounter()
            await next({x:602, y:547, rotate:-270, config: {duration: Car3.speed}})
            carCounter()
            await next({x:639, y:534, rotate:-315, config: {duration: Car3.speed}})
            carCounter()
            await next({x:647, y:506, rotate:-360, config: {duration: Car3.speed}})
            carCounter()
            await next({y:412, config: {duration: Car3.speed}})
            carCounter()
            // 15
            await next({x:632, y:379, rotate:-395, config: {duration: Car3.speed}})
            carCounter()
            await next({x:610, y:314, rotate:-360, config: {duration: Car3.speed}})
            carCounter()
            await next({x:632, y:242, rotate:-325, config: {duration: Car3.speed}})
            carCounter()
            await next({x:680, y:205, rotate:-300, config: {duration: Car3.speed}})
            carCounter()
            await next({x:752, y:193, rotate:-270, config: {duration: Car3.speed}})
            carCounter()
            // 20
            await next({x:850, y:208, rotate:-240, config: {duration: Car3.speed}})
            carCounter()
            await next({x:895, y:250, rotate:-220, config: {duration: Car3.speed}})
            carCounter()
            await next({x:911, y:304, rotate:-180, config: {duration: Car3.speed}})
            carCounter()
            await next({x:897, y:359, rotate:-150, config: {duration: Car3.speed}})
            carCounter()
            await next({x:872, y:434, rotate:-180, config: {duration: Car3.speed}})
            carCounter()
            // 25
            await next({y:499, config: {duration: Car3.speed}})
            carCounter()
            await next({x:879, y:534, rotate:-225, config: {duration: Car3.speed}})
            carCounter()
            await next({x:917, y:547, rotate:-270, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1035, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1153, config: {duration: Car3.speed}})
            carCounter()
            // 30
            await next({x:1272, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1314, y:524, rotate:-330, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1308, y:444, rotate:-380, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1271, y:347, rotate:-380, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1237, y:250, config: {duration: Car3.speed}})
            carCounter()
            // 35
            await next({x:1229, y:174, rotate:-360, config: {duration: Car3.speed}})
            carCounter()
            await next({y:119, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1222, y:104, rotate:-410, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1182, y:104, rotate:-490, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1173, y:134, rotate:-540, config: {duration: Car3.speed}})
            carCounter()
            // 40
            await next({y:249, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1157, y:324, rotate:-505, config: {duration: Car3.speed}})
            carCounter()
            await next({x:1077, y:365, rotate:-450, config: {duration: Car3.speed}})
            carCounter()
            await next({x:987, y:329, rotate:-400, config: {duration: Car3.speed}})
            carCounter()
            await next({x:964, y:235, rotate:-360, config: {duration: Car3.speed}})
            carCounter()
            // 45
            Car3.lapCount()
            await next({pause: Car3.doneRace})
        },
        from:{x:964, y:235, rotate: 0, config: {duration: Car3.speed}},
        pause: true,
        loop: true,
    }))

    return(
        <div>
            <animated.img className="car3" style={style} src={Car3.image}/>
        </div>
    )
}

export default function RenderCars(props) {

    const [displayPowerUp, togglePowerUp] = useState(false)

    const reRenderPowerUp = () => {
        togglePowerUp(true)
        function off() {
            togglePowerUp(false)
        }
        setTimeout(off, 3000)
    }
 
    useEffect(()=> {
        setInterval(reRenderPowerUp, 5000)
    }, [])

    return(
        <div>
            <div>
                {displayPowerUp ? <PowerUpPositions /> : null}
            </div>
            <div>
                <Car3Animation/>
            </div>
            <div>
                <Car2Animation/>   
            </div>
            <div>
                <Car1Animation />
            </div>
        </div>

    )
}