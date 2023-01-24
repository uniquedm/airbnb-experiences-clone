import React from "react"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return  <Card
                    img={"./images/" + card.coverImg}
                    rating={card.stats.rating}
                    ratingCount={card.stats.reviewCount}
                    country={card.location}
                    title={card.title}
                    price={card.price}
                    status={card.status}
                />
    });
    return (
        <div>
            <NavBar />
            <Hero />
            <div className="cards-list">
            {cards}
            </div>
        </div>
    )
}