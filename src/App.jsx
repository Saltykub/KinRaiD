import { useState } from "react"
import Choose from "./components/Choose"
import Random from "./components/Random";
const App = () => {
    const [start,setStart] = useState(false);
    const [ran,setRan] = useState(false);
    const handleStart = e => {
        console.log('start')
        setStart(true);
    }
    const handleRandom = e => {
        console.log('ran');
        setRan(true);
    }
    if(start)return <Choose setRan={setRan} setStart={setStart}/>
    if(ran)return <Random setRan={setRan} setStart={setStart}/>
    return (
        <div>
            <h1>Welcome to KinRaiD</h1>
            <p>pick one</p>
            <button onClick={handleStart}>start</button>
            <button onClick={handleRandom}>random</button>
        </div>
    )
}
export default App
