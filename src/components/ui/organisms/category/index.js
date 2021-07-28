import React from 'react'
import "./category.scss"

import CardServices from './organisms/cardServices/CardServices'

import weather from "../../../../assets/images/weather.svg"
import plane from "../../../../assets/images/plane.svg"
import mic from "../../../../assets/images/mic.svg"
import customization from "../../../../assets/images/customization.svg"

const index = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h4 className="category">CATEGORY</h4>
                    <div className="category_title">
                        We Offer Best Services
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-sm-12 col-md-3">
                    <CardServices imageUrl={weather} title="Calculated Weather">
                        Built Wicket longer admire do barton vanity itself do in it.
                    </CardServices>
                </div>
                <div className="col-sm-12 col-md-3">
                    <CardServices imageUrl={plane} title="Best Fights">
                        Engrossed listening. Park gate sell they west hard for the.
                    </CardServices>
                </div>
                <div className="col-sm-12 col-md-3">
                    <CardServices imageUrl={mic} title="Local Events">
                        Barton vanity itself do in it. Preferd to men it engrossed listening.
                    </CardServices>
                </div>
                <div className="col-sm-12 col-md-3">
                    <CardServices imageUrl={customization} title="Customization">
                        We deliver outsourced aviation services for military customers.
                    </CardServices>
                </div>
            </div>
        </div>
    )
}

export default index
