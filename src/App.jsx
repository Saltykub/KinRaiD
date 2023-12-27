import { useState, useEffect } from "react"
import Choose from "./components/Choose"
import Random from "./components/Random";
import { motion, MotionConfig } from "framer-motion";
const App = () => {
  const transition = {duration: 0.2, ease: "easeIn", scale: {type: "spring", damping: 8, stiffness: 120,},}
  const buttonMotion = {
    i : { opacity : 0, scale : 0.5,},
    a : { opacity : 1, scale : 1},
    wh : { scale : 1.1 },
    wt : { scale : 0.9 },
  }
  const [start, setStart] = useState(false);
  const [ran, setRan] = useState(false);
  const [type, setType] = useState('');
  const [emoji, setEmoji] = useState(0);
  const emojis = [ '🍭', '🍳', '🍡', '🍓', '🍫', '🍙', '🍔', '🍌', '🍖', '🍜', '🍝', '🍪', '🍷', '🍿', '☕️', '🥘', '🧋']
    
  const handleStart = e => {
      console.log('start')
      setStart(true);
      setType(e.target.value)
  }
  const handleRandom = e => {
      console.log('ran');
      setRan(true);
  }

  useEffect(() => {
    setTimeout(() => {
      if(emoji === emojis.length-1) setEmoji(0)
      else setEmoji(emoji+1)
    }, 1000)
  }, [emoji])

  if(start)
    return <Choose setRan={setRan} setStart={setStart} type={type}/>
  if(ran)
    return <Random setRan={setRan} setStart={setStart}/>
  return (
    <div className="flex flex-col text-center mt-20 sm:mt-48" >
      <motion.h1 className="text-7xl px-5 mb-8 bg-slate-500 py-5" initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}} transition={transition}>
        Welcome to Kin Rai D 
      </motion.h1>
      <motion.p className="text-3xl font-sans mb-6" initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}} transition={transition}> 
        /\_/\  <br/>
        (•⤙• ) <br/>
        &nbsp;&nbsp; ({emojis[emoji]}૮)੭ 
      </motion.p>
      <motion.p className="text-4xl mb-8 underline decoration-rose-400" initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}} transition={transition}>
        What you wanna eat?
      </motion.p>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:space-x-8">
        <motion.button value='dish' onClick={handleStart} variants={buttonMotion} whileHover="wh" whileTap="wt" initial="i" animate="a" transition={transition}
        className="shadow-xl hover:shadow-amber-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-amber-500 rounded-3xl hover:bg-amber-400">
          Dish
        </motion.button>
        <motion.button value='desert' onClick={handleStart} variants={buttonMotion} whileHover="wh" whileTap="wt" initial="i" animate="a" transition={transition}
        className="shadow-xl hover:shadow-teal-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-teal-500 rounded-3xl hover:bg-teal-400">
          Desert
        </motion.button>
        <motion.button onClick={handleRandom} variants={buttonMotion} whileHover="wh" whileTap="wt" initial="i" animate="a" transition={transition}
        className="shadow-xl hover:shadow-indigo-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-indigo-500 rounded-3xl hover:bg-indigo-400">
          Random
        </motion.button>
      </div>
    </div>
  )
}
export default App
