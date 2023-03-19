import React from 'react'
import styles from './Affiliate.module.css'

function Affiliate({image,city}) {
  return (
    <div className={styles.affiliate}>
        <img src={image} alt="office" width={465} height={280}/>
        <p>{city}</p>
    </div>
  )
}

export default Affiliate