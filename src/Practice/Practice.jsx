import React, { Component } from 'react'
import './Practice.css'

export default class Practice extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : ['1','2','3']
        }
    }

    addElem = () => {
        const input = document.getElementById('inn')
        if(input.value !== ''){
            const listEl = this.state.list
            listEl.push(input.value)
            this.setState({list: listEl})
            input.value = ''
        }

    }
    delElem = (i) => {
        const listEle = [...this.state.list]
        listEle.splice(i, 1)
        this.setState({list: listEle})
    }
    render() {
        return (
            <div>
                <h2>List</h2>
                <ul className="list">
                    {this.state.list.map((el, i)=> {
                        return <li key={i} onClick={() => this.delElem(i)}>{`${i+1}. ${el}`}</li>
                    })}
                </ul>
                <input id='inn' type="text" />
                <button onClick={this.addElem}>add</button>
            </div>
        )
    }
}
