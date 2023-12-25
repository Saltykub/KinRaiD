import { useState } from "react"
import Choose from "./components/Choose"
import Random from "./components/Random";

const App = () => {
    const [start,setStart] = useState(false);
    const [ran,setRan] = useState(false);
    const [type, setType] = useState('');
    const handleStart = e => {
        console.log('start')
        setStart(true);
        setType(e.target.value)
    }
    const handleRandom = e => {
        console.log('ran');
        setRan(true);
    }
    if(start)
      return <Choose setRan={setRan} setStart={setStart} type={type}/>
    if(ran)
      return <Random setRan={setRan} setStart={setStart}/>
    return (
        <div className="flex flex-col text-center mt-24 sm:mt-32">
          <h1 className="text-7xl px-5 mb-8 bg-slate-500 py-5">Welcome to Kin Rai D</h1>
          <p className="text-3xl font-sans mb-6"> 
                /\_/\     <br/>
              (•⤙• ) <br/>
              &nbsp;&nbsp; <a className="">(🍭૮)</a>੭  <br/>
          </p>
          <p className="text-4xl mb-8 underline decoration-rose-400">What you wanna eat?</p>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:space-x-8">
            <button value='dish' onClick={handleStart} 
            className="shadow-xl hover:shadow-amber-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-amber-500 rounded-3xl hover:bg-amber-400 hover:rounded-2xl">
                Dish
            </button>
            <button value='desert' onClick={handleStart} 
            className="shadow-xl hover:shadow-teal-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-teal-500 rounded-3xl hover:bg-teal-400 hover:rounded-2xl">
              Desert
            </button>
            <button onClick={handleRandom} 
            className="shadow-xl hover:shadow-indigo-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-indigo-500 rounded-3xl hover:bg-indigo-400 hover:rounded-2xl">
              Random
            </button>
          </div>
        </div>
    )
}
export default App
