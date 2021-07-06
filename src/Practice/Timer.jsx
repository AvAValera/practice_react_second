import './Practice.css'
import React,{useState, useEffect, useRef} from 'react'

export default function Timer() {
    
    const[timer, setTimer] = useState(0);
    const[start, setStart] = useState(true);
    const[messBtn, setMessBtn] = useState('Start');
    const timerRef = useRef(null);
    
    const startTime = () => {
        setStart(false)
        if(start){
            timerRef.current = setInterval(() =>{
                setTimer((prev) => prev + 1)
                localStorage.setItem('timer', timer)
            },1000)
            setMessBtn('Stop')
        }
        else{
            setStart(true)
            setMessBtn('Start')
            clearInterval(timerRef.current)
        }

    }
    const resetTime = () => {
        clearInterval(timerRef.current)
        
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
        return clearInterval(timerRef.current);
    },[])
    useEffect(()=>{
        localStorage.setItem('timer', timer)
    },[timer])

    return (
        <div>
            <div className="Timer">
                <span className="Time">{timer}</span>
                <button onClick={startTime}>{messBtn}</button>
                <button onClick={resetTime}>Reset</button>
            </div>
        </div>
    )
}
