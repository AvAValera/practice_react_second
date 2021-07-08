import React, {useEffect, useReducer} from 'react'
function reducer (state, {type}){
    switch (type) {
        case 'START_TIMER':
            return{
                ...state,
                isTimer: !state.isTimer,
                messBtn: (state.isTimer) ? 'Stop' : 'Start'
            }
        
        case 'RESET_TIMER':
            return{
                count: 0,
                isTimer: false,
                messBtn: 'Start'
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
    const [data, dispatch] = useReducer(reducer,{count: 0, isTimer: false, messBtn: 'Start'})
    let timer = null; 
    useEffect(()=>{
        if(data.isTimer){
            timer = setInterval(()=>{
                dispatch({type: 'COUNTING'})
            },1000)
        }
        else clearInterval(timer)
    },[data.isTimer])
    return (
        <div>
            <h2>Timer Reduce</h2>
            <div>
                <span>{data.count}</span>
                <br />
                <button onClick={() => dispatch({type : 'START_TIMER'})}>{data.messBtn}</button>
                <button onClick={() => dispatch({type : 'RESET_TIMER'})}>Reset</button>
            </div>
        </div>
    )
}
