import Stop from "./Stop";
import Back from './Back.jsx';
import {motion} from "framer-motion"

const Question = (props) => {
    const { questions, pick, setPick, count, setCount, setRan, setStart } = props;
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
            <motion.button onClick={handleYes} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
            className="shadow-xl hover:shadow-emerald-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-emerald-500 rounded-3xl hover:bg-emerald-400 ">
                Yes
            </motion.button>
            <motion.button onClick={handleNo} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
            className="shadow-xl hover:shadow-rose-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-rose-500 rounded-3xl hover:bg-rose-400 ">No</motion.button>
            <motion.button onClick={handleMaybe} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
            className="shadow-xl hover:shadow-yellow-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-yellow-500 rounded-3xl hover:bg-yellow-400 ">Maybe</motion.button>
            <Stop questions={questions} pick={pick} setPick={setPick} count={count} setCount={setCount}/>
        </div>
        <Back setCount={setCount} setPick={setPick} setRan={setRan} setStart={setStart}/>
        </div>
    )
}
export default Question