import React from 'react'

import "./CardServices.scss"

const CardServices = ({imageUrl, title, children}) => {
    return (
        <div className="cardService_flex">
            <img src={imageUrl} alt={title}/>
            <div className="title">{title}</div>
            <div className="desc mt-3">{children}</div>
        </div>
    )
}

export default CardServices
