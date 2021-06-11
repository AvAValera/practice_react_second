import "./App.css";
import Cars from './Cars';
import React, { Component } from 'react'

export default class App extends Component {
    state = {cars: [
        {name: 'Ford', year: 2016, color: 'red'},
        {name: 'Opel', year: 2021, color: 'blue'},
        {name: 'Bmw', year: 2010, color: 'green'},
        ],
        pageTitle: 'Cars',
        change: false
    }
    clicker = (newTitle) => {
        this.state.change ? this.setState({
            pageTitle : newTitle, 
            change: false
        }):
        this.setState({
            pageTitle : newTitle, 
            change : true
        })
    }
    changeInput = (e) => {
        this.setState({
            pageTitle: e.target.value
        })
    }
    render() {
        const cars = this.state.cars
        return (
            <div className = 'App'>
                <h1 style={{color: 'blue'}}>{this.state.pageTitle}</h1>
                <input type="text" onChange={this.changeInput} />
                <Cars name={cars[0].name} year={cars[0].year} color={cars[0].color} changers = {this.clicker.bind(this, cars[0].name)}/>
                <Cars name={cars[1].name} year={cars[1].year} color={cars[1].color} changers = {this.clicker.bind(this, cars[1].name)}/>
                <Cars name={cars[2].name} year={cars[2].year} color={cars[2].color} changers = {this.clicker.bind(this, cars[2].name)}/>
            </div>
        )
    }
}

