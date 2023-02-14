import React from 'react'
import DataComponent from '../components/DataComponent'
import DataHeader from '../components/DataHeader'
import DataSection from '../components/DataSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const DataProcessing = () => {
  return (
    <>
     <Navbar />
     <DataHeader />
     <DataComponent />
     <DataSection />
     <Footer />
    </>
  )
}

export default DataProcessing