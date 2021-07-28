import React from 'react'
import "./topSelling.scss"

import CardDestinations from './organisms/CardDestinations'

import Roma from "../../../../assets/images/destinations/1.png"
import London from "../../../../assets/images/destinations/2.png"
import Europe from "../../../../assets/images/destinations/3.png"
import DecoreCurl from "../../../../assets/images/Decore_curl.svg"

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
            <div className="row mb-3 mt-5" style={{ position: "relative" }}>
                <div className="col-sm-12 col-md-4">
                    <CardDestinations imageUrl={Roma} city="Roma, Italy" price="$5.42K" days="10 Days Trip"/>
                </div>
                <div className="col-sm-12 col-md-4">
                    <CardDestinations imageUrl={London} city="London, UK" price="$4.2K" days="12 Days Trip"/>
                </div>
                <div className="col-sm-12 col-md-4">
                    <CardDestinations imageUrl={Europe} city="Full Europe" price="$15K" days="28 Days Trip"/>
                </div>
                <img src={DecoreCurl} alt="decore" className="decoreCurl"/>
            </div>
        </div>
    )
}

export default index
