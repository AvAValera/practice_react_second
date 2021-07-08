import React,{createContext, useState} from 'react'
import Books from './Books'
export const dataContext = createContext()

export default function Context() {
    const [book, setBook] = useState([
        {id: 1, name: 'LearnJS', pages: 300, year: 2002},
        {id: 2, name: 'ReactJs', pages: 150, year: 2016},
        {id: 3, name: 'JqueryJs', pages: 650, year: 2010},
    ]);
    function delItem(id){
        setBook(book.filter(book => book.id!== id))
    }
    const value = {
        book,
        delItem
    }

    return <dataContext.Provider value={value}>
            <Books />
        </ dataContext.Provider >
}
