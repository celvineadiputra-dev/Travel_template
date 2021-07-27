import React from 'react'
import "./home.scss"

import Hero from "../../../assets/images/hero.png"

const index = () => {
    return (
        <div className="container d-flex min-h-100 justify-content-center">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h4 className="topHeadline my-4">Best Destinations around the world</h4>
                    <div className="headline">
                        Travel, enjoy and live a new and full life
                    </div>
                    <div className="desc my-4">
                        Built Wicket longer admire do barton vanity itself do in it. 
                        Preferred to sportsmen it engrossed listening. Park gate sell they west hard 
                        for the.
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-yellow">find our more</button>
                        <div className="d-flex justify-content-center align-items-center ml-25">
                            <div className="circle circle-red">P</div>
                            <div className="playDemo">Play Demo</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src={Hero} alt="hero" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default index
