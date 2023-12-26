import { useState } from "react";
import { motion } from "framer-motion";
const Stop = ({questions, pick, setPick, count, setCount}) => {
    const choice = ['yes','no','maybe']
    const [stop,setStop] = useState(false);
    const handleStop = e => {
        setStop(true);
    }
    if(stop) {
        var newPick=pick
        for(let i = count; i < questions.length; i++){
        const obj = {
            pick: 'maybe',
            name: questions[i].name,
            id: questions[i].id,}
            newPick.push(obj);
            // console.log('newPick', newPick);
        }   
        setPick(newPick)   
        setCount(questions.length);
        console.log(pick);
    }
    return (
        <motion.button onClick={handleStop} whileHover={{scale:1.1}}
        className="shadow-xl hover:shadow-cyan-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-cyan-500 rounded-3xl hover:bg-cyan-400 ">That's All!</motion.button>
    ) 
    
}
export default Stop 