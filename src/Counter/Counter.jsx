import React from 'react'

const Counter = (props) => {
    
    return (
        <div>
            <h2>Counter: <span className="counter-num">{props.counter}</span></h2>
            <button onClick={props.counterMinus}>-</button>
            <button onClick={props.counterPlus}>+</button>
        </div>
    )
}

export default Counter
