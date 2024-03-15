import React from 'react'
import Hero from '../components/Hero/Hero'
import ServicesSection from '../components/Home/ServicesSection'


// refresh();

function Home() {

  return (
    <div className='relative'>
        <Hero />
        <ServicesSection />
    </div>
  )
}

export default Home