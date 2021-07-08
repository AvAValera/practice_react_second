import React, {useContext} from 'react'
import {dataContext} from './Context'

export default function Book(props) {
    const {delItem} = useContext(dataContext)
    return (
        <div>
            <h3 onClick={() => delItem(props.id)}>{props.name}</h3>
            <p>Pages:{props.pages}</p>
            <p>Year:{props.year}</p>
        </div>
    )
}
