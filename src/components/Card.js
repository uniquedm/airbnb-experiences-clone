import React from "react";
import image from "../images/wedding-photo.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img className="card-image" src={image} alt = "content" />
            <div className="rating-div">
                <img className="card-star" src={star} alt = "content" />
                <p><b>5.0</b></p>
                <p>(30)</p>
                <p>.</p>
                <p>USA</p>
            </div>
            <p>Learn wedding photography</p>
            <p><b>From $125</b> / person</p>
            <p className="card-status">Online</p>
        </div>
    )
}