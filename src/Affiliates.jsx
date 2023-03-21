import React, {useContext} from 'react'
import styles from './Affiliates.module.css'
import Affiliate from './Affiliate'
import { LangContext } from './App'


function Affiliates() {
  const {language} = useContext(LangContext);

  return (
    <div className={styles.affiliatesPart}>
        <h2>{
          language == "arm" ? "Մասնաճյուղեր" : language == "ru" ? "Филиалы" : "Affiliates"
          }</h2>
        <div className={styles.affiliates}>
            <Affiliate image="../Images/office_ararat.jpg" city={language == "arm" ? "Ք. Արարատ" : language == "ru" ? "Г․ Арарат" : "C. Ararat"} />
            <Affiliate image="../Images/office_yerevan.jpeg" city={language == "arm" ? "Ք. Երևան" : language == "ru" ? "Г․ Ереван" : "C. Yerevan"} />
        </div>
    </div>
  )
}

export default Affiliates