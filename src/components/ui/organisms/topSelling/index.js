import React from 'react'
import "./topSelling.scss"

import CardDestinations from './organisms/CardDestinations'

import roma from "../../../../assets/images/destinations/1.png"

const index = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h4 className="topSelling">Top Selling</h4>
                    <div className="topSelling_headline">
                        Top Destinations
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-12 col-md-4">
                    <CardDestinations imageUrl={roma} city="Roma, Italy" price="$5.42K" days="10 Days Trip"/>
                </div>
            </div>
        </div>
    )
}

export default index
