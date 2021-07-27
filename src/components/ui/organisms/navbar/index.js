import React from 'react'
import './navbar.scss'

import Logo from "../../../../assets/logo/Logo.svg"

import Link from "./components/atoms/Link"
import Button from '../../atoms/Button/Button'

const index = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <span className="navbar-brand">
                    <img src={Logo} alt="logo"/>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link active="true" menu="Destinations"/>
                        <Link menu="Hotels"/>
                        <Link menu="Flights"/>
                        <Link menu="Booking"/>
                        <Link menu="Login"/>
                        <Button className="nav-link mx-4" type="btn-outline-dark" text="Sign Up"/>
                        <span className="nav-link mx-4">EN</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default index
