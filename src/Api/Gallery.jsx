import React,{useState, useEffect} from 'react'
import './Gallery.css'
import Item from './Item'
import logo from './logo512.png'

export default function Gallery() {
    const [arrData, getArrData] = useState([])
    const [disp, getDisplay] = useState('block')
    const [dispItem, getDisplayItem] = useState('none')
    
    useEffect(()=>{
        fetch('https://picsum.photos/v2/list?page=2&limit=5')
        .then(data => data.json())
        .then(data => getArrData(data))
    },[])
    function getContent(){
        setTimeout(()=>{
            getDisplayItem('grid')
            getDisplay('none')
        },2000)
        return <img style={{display: disp}} className="Logo" src={logo} alt="img" />
    }
    
    return (
        <div className="Gallery-container">
            <div style={{display: dispItem}} className="Gallery">
                {arrData.map((el, i) => {
                    return <Item key={el.author} image={el} />
                })}
            </div>
                {getContent()}
        </div>
    )
}
