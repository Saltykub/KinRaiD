import chatgpt from '../api/chatapi.js'
import { useState, useEffect } from "react";
import Back from './Back'

const Answer = ({ pick, setCount, setOnce, setPick, setRan, setStart }) => {
    const [answer, setAnswer] = useState('')
    useEffect(() => {
        chatgpt(pick).then(res => setAnswer(res))
    }, [])
    console.log("answer", answer)
    const output = answer.split('-').filter(ans => ans.length > 0).map(ans => <p key={ans} className='text-3xl py-1 mb-5 w-1/3 underline decoration-teal-400'>{ans}<br/></p>)

    return (
        <div className="flex flex-col text-center my-52">
            <p className="text-5xl px-5 mb-8 bg-slate-500">Here your food! <br/>Have a nice day <a className='font-sans'>(｡˃ ᵕ ˂ )⸝♡</a></p>
            <div className="flex flex-col items-center">
            {output}
            </div>
            <div className="flex flex-col items-center mt-5">
            <Back setCount={setCount} setOnce={setOnce} setPick={setPick} setRan={setRan} setStart={setStart}/>
            </div> 
       </div>
    )
}

export default Answer