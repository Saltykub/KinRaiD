import chatgpt from '../api/chatapi.js'
import { useState ,useEffect} from "react";

const Answer = ({ pick, setCount, setOnce, setPick ,setRan, setStart}) => {
    const [answer, setAnswer] = useState('')
    useEffect(() => {
        chatgpt(pick).then(res => setAnswer(res))
    }, [])
    console.log("answer", answer)
    const output = answer.split('\n').map(ans => <p key={ans}>{ans}</p>)

    const handleBack = e => {
        setCount(0)
        setOnce(true)
        setPick([])
        setStart(false);
        setRan(false);
    }

    return (
        <>
            <h3>Here are your answer!</h3>
            <p>{output}</p>
            <button onClick={handleBack}>Back</button>
        </>
    )
}

export default Answer