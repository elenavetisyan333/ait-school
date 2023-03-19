import React from 'react'
import styles from './FooterElement.module.css'

function FooterElement({image,link,name}) {
  return (
    <div className={styles.footerElement}>
        <img src={image} alt="icon" height={22} width={23} />
        <a href={link} target="_blank" >{name}</a>
    </div>
  )
}

export default FooterElement