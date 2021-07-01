import React, { Component } from 'react'
import './Practice.css'

export default class Timer extends Component {
    state = {
        timer: 0,
        start: true,
        messBtn: "Start"
    };
    componentDidMount(){
        if(isNaN(parseInt(localStorage.getItem('timer')))){
            this.setState({timer: this.state.timer})
        }
        else{
            this.setState({timer: parseInt(localStorage.getItem('timer'))})
        }
    }
    componentWillUnmount(){
        clearInterval(this.timerr)
    }
    startTime = () => {
        this.setState({start: false})
        if(this.state.start){
            this.timerr = setInterval(() =>{
                this.setState({timer: this.state.timer + 1})
                localStorage.setItem('timer', this.state.timer)
            },1000)
            this.setState({messBtn : "Stop"})
        }
        else{
            this.setState({
                start: true,
                messBtn : "Start"
            })
            clearInterval(this.timerr)
        }

    }
    resetTime = () => {
        clearInterval(this.timerr)
        this.setState({
            timer: 0,
            start: true,
            messBtn: "Start"
        })
    }

    render() {
        return (
            <div className="Timer">
                <span className="Time">{this.state.timer}</span>
                <button onClick={this.startTime}>{this.state.messBtn}</button>
                <button onClick={this.resetTime}>Reset</button>
            </div>
        )
    }
}
