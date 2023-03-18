import React from 'react'
import styles from './Courses.module.css'
import Course from './Course'

function Courses() {
  return (
    <div className={styles.courses}>
        <h2>Դասընթացներ</h2>
        <div className={styles.coursesPart}>
            <Course image={"../Images/web.png"} name={"Web Development"} duration={"6 ամիս"} />
            <Course image={"../Images/ui_ux.png"} name={"UI/UX"} duration={"2 ամիս"} />
            <Course image={"../Images/smm.png"} name={"SMM"} duration={"1.5 ամիս"} />
            <Course image={"../Images/graphic_design.png"} name={"Graphic Design"} duration={"2 ամիս"} />
            <Course image={"../Images/english.png"} name={"English"} duration={"2 ամիս"} />
        </div>
    </div>
  )
}

export default Courses