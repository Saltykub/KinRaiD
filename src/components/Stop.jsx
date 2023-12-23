import { useState } from "react";
const Stop = ({questions,pick,setPick,count,setCount}) => {
    const choice = ['yes','no','maybe']
    const [stop,setStop] = useState(false);
    const handleStop = e => {
        setStop(true);
    }
    if(stop) {
    var newPick=pick
    for(let i = count;i<questions.length;i++){
       const obj={pick:choice[Math.floor(Math.random()*3)],
        name:questions[i].name,
        id:questions[i].id,}
        newPick.push(obj);
        console.log('newPick',newPick);
    }   
    setPick(newPick)   
    setCount(questions.length);
    console.log(pick);
    }
    return (
        <button onClick={handleStop}>Stop</button>
    ) 
    
}
export default Stop 