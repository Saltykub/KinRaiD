import chatgpt from '../api/chatapi.js'
import { useState ,useEffect} from "react";

const Answer = ({ pick, setCount }) => {
    const [answer, setAnswer] = useState('')
    useEffect(() => {
        chatgpt(pick).then(response => setAnswer(response))
    }, [])
    console.log("answer", answer)
    const output = answer.split('\n').map(ans => <p>{ans}</p>)
    return (
        <>
            <h3>Here are your answer!</h3>
            <p>{output}</p>
            <button onClick={e => setCount(0)}>Back</button>
        </>
    )
}

export default Answer