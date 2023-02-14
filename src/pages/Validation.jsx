import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ValidationHead from '../components/ValidationHead'
import ValidationOpening from '../components/ValidationOpening'
import ValidationSpec from '../components/ValidationSpec'

const Validation = () => {
  return (
    <>
     <Navbar />
     <ValidationOpening />
     <ValidationHead />
     <ValidationSpec />
     <Footer />
    </>
  )
}

export default Validation