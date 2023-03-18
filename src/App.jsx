import { useState } from 'react'
import './App.css'
import Header from './Header'
import WelcomePart from './WelcomePart'
import Courses from './Courses'

function App() {
  return (
    <>
      <Header />
      <WelcomePart />
      <Courses />
    </>
  )
}

export default App
