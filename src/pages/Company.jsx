import React from 'react'
import Information from '../components/ Information'
import Footer from '../components/Footer'
import Motive from '../components/Motive'
import Navbar from '../components/Navbar'

const Company = () => {
  return (
    <>
      <Navbar />
      <Motive />
      {/* <Culture /> */}
      <Information />
      <Footer />
    </>
  )
}

export default Company
