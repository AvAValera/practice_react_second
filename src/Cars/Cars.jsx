import React from 'react';
import './Cars.css';
export default function Cars(props) {
    return (
        <div className="card_car">
            <h1>Car: {props.name}</h1>
            <p>Year: {props.year}</p>
            <p>Color: {props.color}</p>
            <input onChange={props.onChangeName} value={props.name} />
            <button onClick={props.delElement}>Delete</button>
        </div>
    )
}
