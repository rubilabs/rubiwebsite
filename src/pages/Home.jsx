import React from "react"
import Collaborators from "../components/Collaborators"
import FAQ from "../components/FAQ"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Mission from "../components/Mission"
import Navbar from "../components/Navbar"


function Home() {

  return (
    <>
     <Navbar />
     <Hero />
     <Features />
     <Collaborators />
     <Mission />
     <FAQ />
     <Footer />
    </>
  )
}

export default Home