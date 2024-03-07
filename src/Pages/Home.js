import React from 'react'
import FindSearch from '../components/Find & Search'
import Booking from '../components/Booking'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Spaces from '../components/Spaces'

function Home() {
  return (
    <>
    <FindSearch />
    <Spaces />
    <Booking />
    <Testimonials />
    <Footer/>
    </>
  )
}

export default Home