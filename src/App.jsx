import { useState ,useEffect} from "react";
import service from './service.js'
import Question from './component/Question.jsx'
const App = () => {
      const [count, setCount] = useState(0);
      const [pick, setPick] = useState([]);
      const [once, setOnce] = useState(true);
      const [questions, setQuestions] = useState([{
          name: 'temp1', id: 1
        },
        {
          name: 'temp2', id: 2
        },
        {
          name: 'temp3', id: 3
        }
      ])
      //shuffle question everytime
      if(once){
        const shuffle = questions.sort(() => Math.random() - 0.5);
        setQuestions(shuffle);
        setOnce(false);console.log('shuffle',questions);
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
          <p>calculating result</p>
          {console.log(pick)}
        </div>
      )

}

export default App;
