import React , { useState } from 'react'
import './App.css'
import Header from './Header'
import WelcomePart from './WelcomePart'
import Courses from './Courses'
import Affiliates from './Affiliates'
import Opportunities from './Opportunities'
import Footer from './Footer'

export const LangContext = React.createContext();
function App() {
  const [language, setLanguage] = useState("arm");

  return (
    <>
      <LangContext.Provider value={{language, setLanguage}}>
        <Header />
        <WelcomePart />
        <Courses />
        <Affiliates />
        <Opportunities />
        <Footer />
     </LangContext.Provider>
    </>
  )
}

export default App
