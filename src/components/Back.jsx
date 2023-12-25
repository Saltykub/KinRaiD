const Back = ({ setCount, setOnce, setPick, setRan, setStart }) => {
    const handleBack = e => {
        setCount(0)
        setOnce(true)
        setPick([])
        setStart(false);
        setRan(false);
    }
    return <button onClick={handleBack} className="shadow-xl hover:shadow-zinc-400/50 text-3xl py-1 mt-5 mb-5 w-1/4 bg-zinc-500 rounded-3xl hover:bg-zinc-400 hover:rounded-2xl">Back</button>
}

export default Back