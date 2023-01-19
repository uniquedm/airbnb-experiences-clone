import React from "react"
import logo from "../images/airbnb_logo_dark.png"

export default function NavBar() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="airbnb-logo" />
        </nav>
    )
}