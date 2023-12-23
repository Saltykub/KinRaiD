import { useState ,useEffect} from "react";
import Question from './components/Question.jsx'
import Answer from "./components/Answer.jsx";

const App = () => {
      const [count, setCount] = useState(0);
      const [pick, setPick] = useState([]);
      const [once, setOnce] = useState(true);
      const [questions, setQuestions] = useState([{
          name: 'sweet', id: 1
        },
        {
          name: 'chocolate', id: 2
        },
        {
          name: 'matcha', id: 3
        }
      ])
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
            <Question questions={questions} pick={pick} setCount={setCount} setPick={setPick} count={count}/>
            {console.log(pick)}
          </div>
        )
      }
      // if no more question
      return (
        <div>
          <Answer pick={pick} setCount={setCount} setOnce={setOnce} setPick={setPick}/>
          {console.log(pick)}
        </div>
      )

}

export default App;
