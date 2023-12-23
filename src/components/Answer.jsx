import chatgpt from '../api/chatapi.js'
import { useState ,useEffect} from "react";

const Answer = ({ pick, setCount, setOnce, setPick }) => {
    const [answer, setAnswer] = useState('')
    useEffect(() => {
        chatgpt(pick).then(response => setAnswer(response))
    }, [])
    console.log("answer", answer)
    const output = answer.split('\n').map(ans => <p>{ans}</p>)

    const handleBack = e => {
        setCount(0)
        setOnce(true)
        setPick([])
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