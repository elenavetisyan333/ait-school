import { useState } from 'react'
import './App.css'
import Header from './Header'
import WelcomePart from './WelcomePart'
import Courses from './Courses'
import Affiliates from './Affiliates'
import Opportunities from './Opportunities'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <WelcomePart />
      <Courses />
      <Affiliates />
      <Opportunities />
      <Footer />
    </>
  )
}

export default App
