const Question = (props) => {
    const { questions, pick, setPick, count, setCount } = props;
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
            <h1>{questions[count].name}</h1>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
            <button onClick={handleMaybe}>Maybe</button>
        </div>
    )
}
export default Question