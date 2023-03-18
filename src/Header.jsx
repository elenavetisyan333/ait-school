import React from 'react'
import styles from './Header.module.css'

function Header() {
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
      </div>
    </div>
  )
}

export default Header