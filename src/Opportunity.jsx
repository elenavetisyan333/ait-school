import React from 'react'
import styles from './Opportunity.module.css'

function Opportunity({number, opportunity, description}) {
  return (
    <div className={ opportunity=="Պրակտիկա" ? styles.practice : styles.opportunity}>
        <img src={number} alt="number" width={opportunity == "Պրակտիկա" ? 110 : 120} height={opportunity == "Պրակտիկա" ? 75 : 80}/>
        <div className={styles.info}>
            <h4>{opportunity}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Opportunity