import React,{useReducer} from 'react'
import './Reducer.css'

const checkValue = (number) => number < 0 ? 0 : number > 255 ? 255 : number
function reducer(state ,action){
    switch(action.type){
        case 'R+':
            return{
                ...state,
                r: checkValue(state.r + 50)
            }
        case 'R-':
            return{
                ...state,
                r: checkValue(state.r - 50)
            }
        case 'G+':
            return{
                ...state,
                g: checkValue(state.g + 50)
            }
        case 'G-':
            return{
                ...state,
                g: checkValue(state.g - 50)
            }
        case 'B+':
            return{
                ...state,
                b: checkValue(state.b + 50)
            }
        case 'B-':
            return{
                ...state,
                b: checkValue(state.b - 50)
            }        
        default:
            return state;
    };
};

export default function Reducer() {
    const [{r, g, b}, dispatch] = useReducer(reducer, {r:0, g:0, b:0});
    
    return (
        <div className='Reducer'>
            <h1 style={{color: `rgb(${r}, ${g}, ${b})`, fontSize: '50px'}}>Reducer Color</h1>
            <div className='Panel'>
                <button onClick={() => dispatch({type: 'R+'})}>R+</button>
                <span style={{backgroundColor : `rgb(${r}, 0, 0)`}} className="Color"></span>
                <button onClick={() => dispatch({type: 'R-'})}>R-</button>
            </div>
            <div className='Panel'>
                <button onClick={() => dispatch({type: 'G+'})}>G+</button>
                <span style={{backgroundColor : `rgb(0, ${g}, 0)`}} className="Color"></span>
                <button onClick={() => dispatch({type: 'G-'})}>G-</button>
            </div>
            <div className='Panel'>
                <button onClick={() => dispatch({type: 'B+'})}>B+</button>
                <span style={{backgroundColor : `rgb(0, 0, ${b})`}} className="Color"></span>
                <button onClick={() => dispatch({type: 'B-'})}>B-</button>
            </div>
        </div>
    )
}
