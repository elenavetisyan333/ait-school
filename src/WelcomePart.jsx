import React from 'react'
import styles from './WelcomePart.module.css'

function WelcomePart() {
  return (
    <div className={styles.welcomePart}>
        <div className={styles.info}>
            <h1>Ararat</h1>
            <h3>IT School</h3>
            <p>Բացահայտիր IT անսահման հնարավորությունները</p>
            <button>Դասընթացներ</button>
        </div>
        <img src="../Images/main_image.png" alt="" width={553} height={553}/>
    </div>
  )
}

export default WelcomePart