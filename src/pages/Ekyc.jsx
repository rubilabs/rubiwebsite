import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import EkycHeader from '../components/EkycHeader'
import EkycComponent from '../components/EkycComponent'
import EkycContent from '../components/EkycContent'
import EkycSection from '../components/EkycSection'
import EkycInformation from '../components/EkycInformation'
import EkycCompliance from '../components/EkycCompliance'
import EkycDocumentation from '../components/EkycDocumentation'

const Ekyc = () => {
  return (
    <>
     <Navbar />
     <EkycHeader />
     <EkycComponent />
     <EkycContent />
     <EkycInformation />
     <EkycCompliance />
     <EkycSection />
     <EkycDocumentation />
     <Footer />
    </>
  )
}

export default Ekyc