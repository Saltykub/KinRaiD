import { useState ,useEffect} from "react";
import Question from './Question.jsx'
import Answer from "./Answer.jsx";
import datas from '../assets/data.js'

const Choose = ({setRan, setStart, type}) => {
      const [count, setCount] = useState(0);
      const [pick, setPick] = useState([{name: type, pick: 'yes'}]);
      const [once, setOnce] = useState(true);
      const [questions, setQuestions] = useState(datas[type]);
      
      //shuffle question everytime
      if(once){
        const shuffle = questions.sort(() => Math.random() - 0.5);
        setQuestions(shuffle);
        setOnce(false);
        console.log('shuffle',questions);
      }
      if(count < questions.length){
        return (
          <div className="flex flex-col text-center mt-48 sm:mt-64">
            <p className="shadow-inner text-5xl px-5 mb-12 bg-slate-500 py-5">Do you want your food to be <a className="underline decoration-indigo-400">{questions[count].name}</a>?</p>
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
