import React from "react"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return  <Card
                    key={card.id}
                    {...card}
                />
    });
    return (
        <div>
            <NavBar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}