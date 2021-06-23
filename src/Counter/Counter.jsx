import React from 'react'
import './Counter.css'
const Counter = (props) => {
    let color = ["black", "counter"]
    
    if(props.counter > 0){
        color.push("green")
    }
    else color.push("red")

    return (
        <React.Fragment>
            <h2>Counter: <span className={color.join(" ")}>{props.counter}</span></h2>
            <button onClick={props.counterMinus}>-</button>
            <button onClick={props.counterPlus}>+</button>
        </React.Fragment>
    )
}

export default Counter
