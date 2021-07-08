import React, {useContext} from 'react'
import {dataContext} from './Context'
import Book from './Book'

export default function Books() {
    const value = useContext(dataContext)
    return (
        <div>
            {value.book.map(el => <Book key={el.id} {...el}/>)}
        </div>
    )
}
