import React from 'react';
import './Cars.css';
export default function Cars(props) {
    return (
        <div onMouseEnter={props.changeHeader} onMouseLeave={props.returnHeader} className="card_car">
            <h1>Car: <span>{props.name}</span></h1>
            <p>Year: {props.year}</p>
            <p>Color: <span style={{color : props.color}}>{props.color}</span></p>
            <input onChange={props.onChangeName} value={props.name} />
            <button onClick={props.delElement}>Delete</button>
        </div>
    )
}
