import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    const {coverImg, title, stats, price, location, openSpots} = props
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={coverImg} alt = "content" />
            <div className="rating-div">
                <img className="card-star" src={star} alt = "content" />
                <p><b>{stats.rating}</b></p>
                <p>({stats.reviewCount})</p>
                <p>.</p>
                <p>{location}</p>
            </div>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </div>
    )
}