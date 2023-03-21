import React, {useContext} from 'react'
import styles from './Courses.module.css'
import Course from './Course'
import { LangContext } from './App';


function Courses() {
  const {language} = useContext(LangContext);

  return (
    <div className={styles.courses}>
        <h2>{
            language == "arm" ? "Դասընթացներ" : language == "ru" ? "Курсы" : "Courses"
          }</h2>
        <div className={styles.coursesPart}>
            <Course image="../Images/web.png" name="Web Development" duration={`6 ${language == "arm" ? "ամիս" : language == "ru" ? "месяца" : "months"}`} />
            <Course image="../Images/ui_ux.png" name="UI/UX" duration={`2 ${language == "arm" ? "ամիս" : language == "ru" ? "месяца" : "months"}`} />
            <Course image="../Images/smm.png" name="SMM" duration={`1.5 ${language == "arm" ? "ամիս" : language == "ru" ? "месяца" : "months"}`} />
            <Course image="../Images/graphic_design.png" name="Graphic Design" duration={`2 ${language == "arm" ? "ամիս" : language == "ru" ? "месяца" : "months"}`} />
            <Course image="../Images/english.png" name="English" duration={`2 ${language == "arm" ? "ամիս" : language == "ru" ? "месяца" : "months"}`} />
        </div>
    </div>
  )
}

export default Courses