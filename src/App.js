import React from "react"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import weddingImage from "./images/wedding-photo.png"
import katieZaferesImage from "./images/katie-zaferes.png"

export default function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <div className="cards-list">
            <Card 
                img={weddingImage}
                rating="5.0"
                ratingCount="30"
                country="USA"
                title="Learn wedding photography"
                price="125"
                status="Online"
            />
            <Card 
                img={katieZaferesImage}
                rating="5.0"
                ratingCount="6"
                country="USA"
                title="Life lessons with Katie Zaferes"
                price="136"
                status="Sold Out"
            />
            </div>
        </div>
    )
}