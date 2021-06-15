import "./App.css";
import Cars from './Cars/Cars';
import React, { Component } from 'react'

export default class App extends Component {
    state = {cars: [
        {name: 'Ford', year: 2016, color: 'red'},
        {name: 'Opel', year: 2021, color: 'blue'},
        {name: 'Bmw', year: 2010, color: 'green'},
        ],
        pageTitle: 'Cars',
        change: false,
        display : 'inline-block'
    }
    
    changeName(value, i){
        const car = this.state.cars[i]
        car.name = value;
        const cars = [...this.state.cars]
        cars[i] = car;
        this.setState({cars})
    }


    delElement =(i) => {
        const arr = [...this.state.cars];
        
        arr.splice(i, 1)
        this.setState({cars: arr})

        if(arr.length <= 0){
            this.setState({
                display: 'none'
            })
        }
    }

    showCars =(e) => {
        this.setState({
            change: !this.state.change
        })
        if(this.state.change)e.target.textContent = 'Show cars'
        else e.target.textContent = 'Hide cars'
    }

    render() {
        let cars = null;
        if(this.state.change){
            cars = this.state.cars.map((el, i) => {
                return <Cars 
                changeName={event => this.changeName(event.target.value, i)}
                delElement={() => this.delElement(i)} 
                key={el.name} 
                name={el.name} 
                year={el.year} 
                color={el.color}/>
            })
        }

        return (
            <div className = 'App'>
                <h1 style={{color: 'blue'}}>{this.state.pageTitle}</h1>
                <button style={{display: this.state.display}}onClick={this.showCars}>Show cars</button>
                <div>
                    {cars}
                </div>
            </div>
        )
    }
}

