import { useState } from 'react'
import './App.css'
import Header from './Header'
import WelcomePart from './WelcomePart'
import Courses from './Courses'
import Affiliates from './Affiliates'

function App() {
  return (
    <>
      <Header />
      <WelcomePart />
      <Courses />
      <Affiliates />
    </>
  )
}

export default App
