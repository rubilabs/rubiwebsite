import React from 'react'
import Footer from '../components/Footer'
import InvestmentBody from '../components/InvestmentBody'
import InvestmentBottom from '../components/InvestmentBottom'
import InvestmentHead from '../components/InvestmentHead'
import Navbar from '../components/Navbar'

const Investment = () => {
  return (
    <>
     <Navbar />
     <InvestmentHead />
     <InvestmentBody />
     <InvestmentBottom />
     <Footer />
    </>
  )
}

export default Investment
