import React from 'react'
import "./bookTrip.scss"

import Value from "./organisms/value/value"

import ChooseDestinations from "../../../../assets/icon/chooseDestinations.svg"
import MakePayment from "../../../../assets/icon/makePayment.svg"
import Transport from "../../../../assets/icon/transport.svg"
import Trip from "../../../../assets/images/trip.png"

const index = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <div className="subHeadline">Easy and Fast</div>
                    <div className="headline my-4">Book your next trip in 3 easy steps</div>
                    <div>
                        <Value icon={ChooseDestinations} title="Choose Destination">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. 
                        </Value>
                        <Value icon={MakePayment} title="Make Payment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. 
                        </Value>
                        <Value icon={Transport} title="Reach Airport on Selected Date">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. 
                        </Value>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={Trip} alt="trip" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default index
