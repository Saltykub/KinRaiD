import Stop from "./Stop";
import Back from './Back.jsx';

const Question = (props) => {
    const { questions, pick, setPick, count, setCount, setOnce, setRan, setStart } = props;
    const handleYes = () => {
        const newPick = {pick:'yes', id:questions[count].id, name:questions[count].name};
        const newCount = count+1;
        setPick(pick.concat(newPick));
        setCount(newCount);
    }
     const handleNo = () => { 
        const newPick = {pick:'no', id:questions[count].id, name:questions[count].name}
        const newCount = count+1;
        setPick(pick.concat(newPick));
        setCount(newCount);
    }
     const handleMaybe = () => {
        const newPick = {pick:'maybe', id:questions[count].id, name:questions[count].name};
        const newCount = count+1;
        setPick(pick.concat(newPick));
        setCount(newCount);
    }
    //test commit
    return (
        <div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:space-x-8">
            {/* <h1>{questions[count].name}</h1> */}
            <button onClick={handleYes}
            className="shadow-xl hover:shadow-emerald-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-emerald-500 rounded-3xl hover:bg-emerald-400 hover:rounded-2xl">
                Yes
            </button>
            <button onClick={handleNo}
            className="shadow-xl hover:shadow-rose-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-rose-500 rounded-3xl hover:bg-rose-400 hover:rounded-2xl">No</button>
            <button onClick={handleMaybe}
            className="shadow-xl hover:shadow-yellow-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-yellow-500 rounded-3xl hover:bg-yellow-400 hover:rounded-2xl">Maybe</button>
            <Stop questions={questions} pick={pick} setPick={setPick} count={count} setCount={setCount}/>
        </div>
        <Back setCount={setCount} setOnce={setOnce} setPick={setPick} setRan={setRan} setStart={setStart}/>
        </div>
    )
}
export default Question