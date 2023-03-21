import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import { LangContext } from './App';

function Header() {
  const {language, setLanguage} = useContext(LangContext);

  function toggleLanguage(lang){
    setLanguage(lang)
  }
  
  return (
    <div className={styles.header}>
      <div className={styles.insideHeader}>
        <img src="https://aitschool.am/images/Ait-Logo.svg" alt="logo" width={107} height={107} />
        <div className={styles.pages}>
            <p>{
              language == "arm" ? "Գլխավոր" : language == "ru" ? "Главная" : "Home"
              }</p>
            <p>{
              language == "arm" ? "Դասընթացներ" : language == "ru" ? "Курсы" : "Courses"
              }</p>
            <p>{
              language == "arm" ? "Գրանցում" : language == "ru" ? "Регистрация" : "Registration"
              }</p>
            <p>{
              language == "arm" ? "Մեր մասին" : language == "ru" ? "О нас" : "About us"
              }</p>
            <p>{
              language == "arm" ? "Բլոգ" : language == "ru" ? "Блог" : "Blog"
              }</p>
            <p>{
              language == "arm" ? "Կապ" : language == "ru" ? "Связь" : "Feedback"
              }</p>
        </div>
        <div className={styles.languages}>
          <img src="../Images/armenia.png" alt="Armenia"  width={22} height={22} onClick={() => toggleLanguage("arm")}/>
          <img src="../Images/russia.png" alt="Russia" width={22} height={22} onClick={() => toggleLanguage("ru")}/>
          <img src="../Images/united_kingdom.png" alt="United Kingdom" width={22} height={22} onClick={() => toggleLanguage("eng")}/>
        </div>
      </div>
    </div>
  )
}

export default Header