import Cont from '@/components/Cont'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading='Contact' message="Submit the form below for more work"/>
      <Cont/>
    </div>
  )
}

export default Contact