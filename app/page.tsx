import React from 'react'
import Hero from './components/landingPage/Hero'
import Packages from './components/landingPage/Packages'
import About from './components/landingPage/About'
import Testimonials from './components/landingPage/Testimonials'

export default function LandingPage() {
  return (
    <div className="">
      <Hero />
      <Packages />
      <About />
      <Testimonials />
    </div>
  )
}
