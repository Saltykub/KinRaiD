import chatgpt from '../api/chatapi.js'
import { useState, useEffect } from "react";
import Back from './Back'

const Answer = ({ pick, setCount, setPick, setRan, setStart }) => {
    const [answer, setAnswer] = useState('')
    useEffect(() => {
        chatgpt(pick).then(res => setAnswer(res))
    }, [])
    console.log("answer", answer)
    const output = answer.split('#').filter(ans => ans.length > 0).map(ans => <p key={ans} className='text-3xl py-1 mb-5 w-3/4 underline decoration-teal-400'>{ans}<br/></p>)

    return (
        <div className="flex flex-col text-center mt-20 sm:mt-36">
            <p className="text-5xl px-5 mb-8 bg-slate-500 pb-5 pt-2.5">Here your food! <br/>Have a nice day <br/><a className='font-sans'>(｡˃ ᵕ ˂ )⸝♡</a></p>
            <div className="flex flex-col items-center">
            {output}
            </div>
            <div className="flex flex-col items-center mt-3">
            <Back setCount={setCount} setPick={setPick} setRan={setRan} setStart={setStart}/>
            </div> 
       </div>
    )
}

export default Answer