import { useState, useEffect} from "react";
import Question from './Question.jsx'
import Answer from "./Answer.jsx";
import datas from '../assets/data.js'

const Choose = ({setRan, setStart, type}) => {
      const [count, setCount] = useState(0);
      const [pick, setPick] = useState([{name: type, pick: 'yes'}]);
      const [questions, setQuestions] = useState(null);
      
      //shuffle question everytime
      useEffect(() => {
        const shuffle = datas[type].sort(() => Math.random() - 0.5);
        setQuestions(shuffle);
      }, [])

      if(questions === null) return null

      if(count < questions.length){
        return (
          <div className="flex flex-col text-center mt-48 sm:mt-64">
            <p className="shadow-inner text-5xl px-5 mb-12 bg-slate-500 py-5">Do you want your food to be/have <a className="underline decoration-rose-400">{questions[count].name}</a>?</p>
            <Question questions={questions} pick={pick} setPick={setPick} count={count} setCount={setCount} setRan={setRan} setStart={setStart}/>
            {/* {console.log(pick)} */}
          </div>
        )
      }
      // if no more question
      return (
        <div>
          <Answer pick={pick} setPick={setPick} setCount={setCount} setRan={setRan} setStart={setStart}/>
          {/* {console.log(pick)} */}
        </div>
      )

}

export default Choose;
