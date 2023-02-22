import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import Company from "./pages/Company"
import Resources from "./pages/Resources"
import Validation from "./pages/Validation"
import Contact from "./pages/Contact"
import DataProcessing from "./pages/DataProcessing"
import HelpDesk from "./pages/HelpDesk"
import Integration from "./pages/Integration"
import JobOpening from "./pages/JobOpening"
import Investment from "./pages/Investment"
import Terms from "./pages/Terms"
import BlockchainDeveloper1 from "./pages/BlockchainDeveloper1"
import BlockchainDeveloper2 from "./pages/BlockchainDeveloper2"
import CustomerSupport from "./pages/CustomerSupport"
import BlockchainDeveloper3 from "./pages/BlockchainDeveloper3"
import BlockchainDeveloper4 from "./pages/BlockchainDeveloper4"
import Privacy from "./pages/Privacy"
import SystemDesign1 from "./pages/SystemDesign1"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customersupport" element={<CustomerSupport />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/dataprocessing" element={<DataProcessing />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/jobopening" element={<JobOpening />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blockchaindeveloper-1" element={<BlockchainDeveloper1 />} />
        <Route path="/blockchaindeveloper-2" element={<BlockchainDeveloper2 />} />
        <Route path="/blockchaindeveloper-3" element={<BlockchainDeveloper3 />} />
        <Route path="/blockchaindeveloper-4" element={<BlockchainDeveloper4 />} />
        <Route path="/systemdesign-1" element={<SystemDesign1 />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
