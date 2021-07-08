import React, {useEffect, useReducer} from 'react'
function reducer (state, {type}){
    switch (type) {
        case 'START_TIMER':
            return{
                ...state,
                isTimer: true
            }
        case 'STOP_TIMER':
            return{
                ...state,
                isTimer: false
            }
        case 'RESET_TIMER':
            return{
                count: 0,
                isTimer: false
            }
        case 'COUNTING':
            return{
                ...state,
                count: state.count + 1
            }    
        default:
            return state
    }
}
export default function TimerReduce() {
    const [data, dispatch] = useReducer(reducer,{count: 0, isTimer: false})
    useEffect(()=>{
        let timer = null; 
        if(data.isTimer){
            timer = setInterval(()=>{
                dispatch({type: 'COUNTING'})
            },1000)
        }
        return () =>{
            clearInterval(timer)
            timer = null
        }
    },[data.isTimer])
    return (
        <div>
            <h2>Timer Reduce</h2>
            <div>
                <span>{data.count}</span>
                <br />
                {(data.isTimer) ? <button onClick={() => dispatch({type : 'STOP_TIMER'})}>Stop</button> :
                <button onClick={() => dispatch({type : 'START_TIMER'})}>Start</button>}
                <button onClick={() => dispatch({type : 'RESET_TIMER'})}>Reset</button>
            </div>
        </div>
    )
}
