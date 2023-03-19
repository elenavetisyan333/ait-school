import React from 'react'
import styles from './Affiliates.module.css'
import Affiliate from './Affiliate'

function Affiliates() {
  return (
    <div className={styles.affiliatesPart}>
        <h2>Մասնաճյուղեր</h2>
        <div className={styles.affiliates}>
            <Affiliate image="../Images/office_ararat.jpg" city="Ք. Արարատ" />
            <Affiliate image="../Images/office_yerevan.jpeg" city="Ք. Երևան" />
        </div>
    </div>
  )
}

export default Affiliates