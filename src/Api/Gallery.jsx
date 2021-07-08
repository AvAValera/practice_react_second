import React,{useEffect, useReducer} from 'react'
import './Gallery.css'
import Item from './Item'
import logo from './logo512.png'

function changeDisplay(state, {type}){
    if(type === 'changeDisplay'){
        return{
            ...state,
            dispLogo: 'none',
            dispGallery: 'grid'
        }
    }
    if(type === 'getData'){
        const arr = [];
        fetch('https://picsum.photos/v2/list?page=2&limit=5')
        .then(data => data.json())
        .then(data => {
            for(let i = 0; i< data.length; i++){
                arr.push(data[i])
            }
        })
        return {
            ...state,
            arrData: arr
        }
    }
}

export default function Gallery() {
    const [{arrData, dispLogo, dispGallery}, dispatch] = useReducer(changeDisplay, {arrData:[], dispLogo: 'block', dispGallery: 'none'})
    useEffect(()=>{
        dispatch({type: 'getData'})
    },[])
    function getContent(){
        setTimeout(()=>{
            dispatch({type: 'changeDisplay'})
        },3000)
        
        return <img style={{display: dispLogo}} className="Logo" src={logo} alt="img" />
    }
    
    return (
        <div className="Gallery-container">
            <div style={{display: dispGallery}} className="Gallery">
                {arrData.map((el, i) => {
                    return <Item key={el.author} image={el} />
                })}
            </div>
                {getContent()}
        </div>
    )
}
