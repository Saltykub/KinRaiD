import datas from '../assets/data.js'
import Answer from './Answer.jsx'
import { useState, useEffect } from 'react'

const Random = ({setRan, setStart}) => {
    const ranInt = (Math.floor(Math.random()*2))
    const [count, setCount] = useState(0);
    const [pick, setPick] = useState([
        {
            name: 'desert', pick: ranInt
        },
        {
            name: 'meal', pick: 1-ranInt
        }
    ]);
    const [once, setOnce] = useState(true);

    return (
        <div>
            {console.log(pick)}
            <Answer pick={pick} setCount={setCount} setOnce={setOnce} 
            setPick={setPick} setRan={setRan} setStart={setStart}/>
        </div>
    )
}
export default Random;