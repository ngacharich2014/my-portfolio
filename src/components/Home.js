import React from "react"
import image from "../artic_landscape.jpg";
export default function Home() {
    return (
        <main>
            <img src={image} alt="Artic landscape" className="absolute object-cover w-full h-full"/>
            <section className="relative flex jusify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Hey. I'm Nick.</h1>
            </section>

        </main>
    )
}