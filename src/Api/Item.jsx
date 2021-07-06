import React from 'react'

export default function Item(props) {
    return (
        <div className="Item">
            <img src={props.image.download_url} alt="img" />
            <p className="author">{props.image.author}</p>
        </div>
    )
}
