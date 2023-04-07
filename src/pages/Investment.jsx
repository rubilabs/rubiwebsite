import React from 'react'
import Footer from '../components/Footer'
import InvestmentBody from '../components/InvestmentBody'
import InvestmentBottom from '../components/InvestmentBottom'
import InvestmentHead from '../components/InvestmentHead'
import Navbar from '../components/Navbar'
import InvestmentPage from '../components/InvestmentPage'

const Investment = () => {
  return (
    <>
     <Navbar />
     <InvestmentHead />
     <InvestmentBody />
     <InvestmentPage />
     <InvestmentBottom />
     <Footer />
    </>
  )
}

export default Investment
