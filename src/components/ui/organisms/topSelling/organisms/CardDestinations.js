import React from 'react'
import "./CardDestinations.scss"
import Navigations from "../../../../../assets/icon/navigation.svg"

const CardDestinations = ({imageUrl, city, price, days}) => {
    return (
        <div className="cardDestination_wrapper d-flex justify-content-center">
            <img src={imageUrl} alt={city} className="imageCity"/>
            <div className="cardDestination_card">
                <div className="header">
                    <div className="title">{city}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="icon-text my-3">
                    <img src={Navigations} alt="navigations" className="mr-2"/> 
                    <div className="days">{days}</div>
                </div>
            </div>
        </div>
    )
}

export default CardDestinations
