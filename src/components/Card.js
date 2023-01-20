import React from "react";
import star from "../images/star.png"

export default function Card({img, status, title, rating, ratingCount, price}) {
    let imageStyle = "card-image"
    if (status==="Sold Out") {
        imageStyle = "card-image-gray"
    }

    return (
        <div className="card">
            <img className={imageStyle} src={img} alt = "content" />
            <div className="rating-div">
                <img className="card-star" src={star} alt = "content" />
                <p><b>{rating}</b></p>
                <p>({ratingCount})</p>
                <p>.</p>
                <p>USA</p>
            </div>
            <p>{title}</p>
            <p><b>From {price}</b> / person</p>
            <p className="card-status">{status}</p>
        </div>
    )
}