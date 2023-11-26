import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from './HeroSection/Hero'
import About from './About Us/About'
import Properties from './Properties/Properties'
import Testimonial from './ClientSay/Testimonial'
import CTA from './CTA/CTA'
import Partners from './Partners/Partners'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Rezilla | A Real Estate Company</title>
        </Helmet>
       <Hero/>
       <About/>
       <Partners/>
       <Properties/>
       <Testimonial/>
       <CTA/>
    </div>
  )
}

export default Home
