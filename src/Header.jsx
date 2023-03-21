import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import { LangContext } from './App';

function Header() {
  const {language, setLanguage} = useContext(LangContext);
  console.log(language);
  return (
    <div className={styles.header}>
      <div className={styles.insideHeader}>
        <img src="https://aitschool.am/images/Ait-Logo.svg" alt="logo" width={107} height={107} />
        <div className={styles.pages}>
            <p>Գլխավոր</p>
            <p>Դասընթացներ</p>
            <p>Գրանցում</p>
            <p>Մեր Մասին</p>
            <p>Բլոգ</p>
            <p>Կապ</p>
        </div>
        <div className={styles.languages}>
          <img src="../Images/armenia.png" alt="Armenia"  width={22} height={22} />
          <img src="../Images/russia.png" alt="Russia" width={22} height={22} />
          <img src="../Images/united_kingdom.png" alt="United Kingdom" width={22} height={22} />
        </div>
      </div>
    </div>
  )
}

export default Header