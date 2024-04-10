import React from 'react'
import Hero from './hero'
import Second from './second'
import Services from '../Services'
import Works from '../Works'

export default function Home() {
    if (!Hero && !Second && !Services && !Works) {
        return (
            <h3>Loading...</h3>
        )
    }
    return (
        <>
            <Hero />
            <Second />
            <Services />
            <Works/>
        </>
    )
}