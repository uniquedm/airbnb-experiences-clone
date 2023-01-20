import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    
    let imageStyle = "card-image"
    if (props.status==="Sold Out") {
        imageStyle = "card-image-gray"
    }

    return (
        <div className="card">
            <img className={imageStyle} src={props.img} alt = "content" />
            <div className="rating-div">
                <img className="card-star" src={star} alt = "content" />
                <p><b>{props.rating}</b></p>
                <p>({props.ratingCount})</p>
                <p>.</p>
                <p>USA</p>
            </div>
            <p>{props.title}</p>
            <p><b>From {props.price}</b> / person</p>
            <p className="card-status">{props.status}</p>
        </div>
    )
}