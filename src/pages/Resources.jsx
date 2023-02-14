import React from 'react';
import CaseStudy from '../components/CaseStudy';
import Documentation from '../components/Documentation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ResourcesHead from '../components/ResourcesHead';

function Resources() {
  return (
    <>
     <Navbar />
     <ResourcesHead />
     <Documentation />
     <CaseStudy />
     <Footer />
    </>
  )
}

export default Resources
