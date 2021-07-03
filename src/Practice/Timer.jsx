import './Practice.css'
import React,{useState, useEffect} from 'react'

export default function Timer() {
    
    const[timer, setTimer] = useState(0);
    const[start, setStart] = useState(true);
    const[messBtn, setMessBtn] = useState('Start');
    
    const timerr = setInterval(() =>{
        setTimer(timer + 1)
        localStorage.setItem('timer', timer)
    },1000)
    
    function startTime() {
        setStart(false)
        if(start){
            () => timerr
            setMessBtn('Stop')
        }
        else{
            setStart(true)
            setMessBtn('Start')
            clearInterval(timerr)
        }

    }
    function resetTime() {
        clearInterval(timerr)
        
        setTimer(0)
        setStart(true)
        setMessBtn('Start')
    }

    useEffect(()=>{
        if(isNaN(parseInt(localStorage.getItem('timer')))){
            setTimer(timer)
        }
        else{
            setTimer(parseInt(localStorage.getItem('timer')))
        }
        return clearInterval(timerr);
    },[timer])

    return (
        <div>
            <div className="Timer">
                <span className="Time">{timer}</span>
                <button onClick={startTime()}>{messBtn}</button>
                <button onClick={resetTime()}>Reset</button>
            </div>
        </div>
    )
}
