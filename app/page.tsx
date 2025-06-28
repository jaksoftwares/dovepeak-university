'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Academics from './components/Academics'
import Admissions from './components/Admissions'
import CampusLife from './components/CampusLife'
import Research from './components/Research'
import News from './components/News'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <Research />
      <CampusLife />
      <News />
      <Footer />
    </div>
  )
}