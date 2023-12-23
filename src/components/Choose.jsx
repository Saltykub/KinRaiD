import { useState ,useEffect} from "react";
import Question from './Question.jsx'
import Answer from "./Answer.jsx";
import datas from '../assets/data.js'
const Choose = ({setRan,setStart}) => {
      const [count, setCount] = useState(0);
      const [pick, setPick] = useState([]);
      const [once, setOnce] = useState(true);
      const [questions, setQuestions] = useState(datas);
      //shuffle question everytime
      if(once){
        const shuffle = questions.sort(() => Math.random() - 0.5);
        setQuestions(shuffle);
        setOnce(false);
        console.log('shuffle',questions);
      }
      if(count < questions.length){
        return (
          <div>
            <h1>Choose your favorite choice</h1>
            <Question questions={questions} pick={pick} setCount={setCount} 
            setPick={setPick} count={count} setRan={setRan} setStart={setStart} setOnce={setOnce}/>
            {console.log(pick)}
          </div>
        )
      }
      // if no more question
      return (
        <div>
          <Answer pick={pick} setCount={setCount} setOnce={setOnce} 
          setPick={setPick} setRan={setRan} setStart={setStart}/>
          {console.log(pick)}
        </div>
      )

}

export default Choose;
