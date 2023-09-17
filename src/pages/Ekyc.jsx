import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import EkycHeader from '../components/EkycHeader'
import EkycComponent from '../components/EkycComponent'
import EkycContent from '../components/EkycContent'
import EkycSection from '../components/EkycSection'

const Ekyc = () => {
  return (
    <>
     <Navbar />
     <EkycHeader />
     <EkycComponent />
     <EkycContent />
     <EkycSection />
     <Footer />
    </>
  )
}

export default Ekyc