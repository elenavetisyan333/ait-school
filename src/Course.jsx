import React from 'react'
import styles from './Course.module.css'

function Course({image,name,duration}) {
  return (
    <div className={styles.course}>
        <img src={image} alt="course" width={200} height={200}/>
        <h3>{name}</h3>
        <p>{duration}</p>
    </div>
  )
}

export default Course