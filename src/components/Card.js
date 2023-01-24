import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    const {img, title, rating, ratingCount, price, country, slots} = props

    return (
        <div className="card">
            {slots === 0 && <div className="card-badge">Sold Out</div>}
            <img className="card-image" src={img} alt = "content" />
            <div className="rating-div">
                <img className="card-star" src={star} alt = "content" />
                <p><b>{rating}</b></p>
                <p>({ratingCount})</p>
                <p>.</p>
                <p>{country}</p>
            </div>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </div>
    )
}