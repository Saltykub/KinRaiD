import datas from '../assets/data.js'
import Answer from './Answer.jsx'
import { useState } from 'react'
const Random = ({setRan,setStart}) => {
    const choice = ['yes','no','maybe']
    datas.map(data => data.pick = choice[(Math.floor(Math.random()*3))])
    const [count, setCount] = useState(0);
    const [pick, setPick] = useState(datas);
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