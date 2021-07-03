import React, {useState} from 'react'
import './Counter.css'
const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState('Counter:');
    let color = ["black", "counter"]
    
    if(counter > 0){
        color.push("green")
    }
    else if(counter === 0){
        color.push("black")
    }
    else color.push("red")

    return (
        <React.Fragment>
            <h2 onClick={() => setCount('Hello')}>{count} <span className={color.join(" ")}>{counter}</span></h2>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)} >+</button>
        </React.Fragment>
    )
}

export default Counter
