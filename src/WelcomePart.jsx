import React, {useContext} from 'react'
import styles from './WelcomePart.module.css'
import { LangContext } from './App';

function WelcomePart() {
  const {language} = useContext(LangContext);

  return (
    <div className={styles.welcomePart}>
        <div className={styles.info}>
            <h1>Ararat</h1>
            <h3>IT School</h3>
            <p>{
              language == "arm" ? "Բացահայտիր IT անսահման հնարավորությունները" : language == "ru" ? "Откройте для себя безграничные возможности IT" : "Discover the endless possibilities of IT"
              }</p>
            <button>{
              language == "arm" ? "Դասընթացներ" : language == "ru" ? "Курсы" : "Courses"
              }</button>
        </div>
        <img src="../Images/main_image.png" alt="" width={553} height={553}/>
    </div>
  )
}

export default WelcomePart