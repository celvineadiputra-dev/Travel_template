import React from 'react'
import "./CardDestinations.scss"

const CardDestinations = ({imageUrl, city, price, days}) => {
    return (
        <div className="cardDestination_wrapper">
            <img src={imageUrl} alt={city} className="imageCity"/>
            <div className="cardDestination_card">
                <div className="header">
                    <div className="title">{city}</div>
                    <div className="price">{price}</div>
                </div>
                <b>{days}</b>
            </div>
        </div>
    )
}

export default CardDestinations
