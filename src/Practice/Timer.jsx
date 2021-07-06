import './Practice.css'
import React,{useState, useEffect, useRef} from 'react'

function getData(){
    const data = localStorage.getItem('timer')
    return data ? +data : 0
}
export default function Timer() {
    
    const[timer, setTimer] = useState(getData());
    const[start, setStart] = useState(false);
    const[messBtn, setMessBtn] = useState('Start');
    const timerRef = useRef(null);
    
    const startTime = () => {
        setStart(true)
        setMessBtn('Stop')
    }
    const stopTime = () => {
        setStart(false)
        setMessBtn('Start')
        clearInterval(timerRef.current)
    }
    const resetTime = () => {
        clearInterval(timerRef.current)
        
        setTimer(0)
        setStart(false)
        setMessBtn('Start')
    }
    useEffect(()=>{
        localStorage.setItem('timer', timer)
    },[timer])

    useEffect(()=>{
        if(start){
            timerRef.current = setInterval(() =>{
                setTimer((prev) => prev + 1)
            },1000)
        }
        return () => clearInterval(timerRef.current)
    },[start])

    return (
        <div>
            <div className="Timer">
                <span className="Time">{timer}</span>
                <button onClick={!start ? startTime : stopTime}>{messBtn}</button>
                <button onClick={resetTime}>Reset</button>
            </div>
        </div>
    )
}
