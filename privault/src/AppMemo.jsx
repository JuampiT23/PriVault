import { useState, memo } from "react";

const Counter = ({count}) => {
    // const [count, setCount] = useState(0);
    // return <button onClick={() => setCount(count + 1)}>{count}</button>
    return <h1>{count}</h1>
};

const AppMemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    
    return (
        <div>
            imput: <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>+</button>
            <Counter count={count} />
        </div>
    );
};

export default AppMemo