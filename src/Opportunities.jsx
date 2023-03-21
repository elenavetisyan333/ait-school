import React, {useContext} from 'react'
import Opportunity from './Opportunity'
import styles from './Opportunities.module.css'
import { LangContext } from './App';


function Opportunities() {
  const {language} = useContext(LangContext);

  return (
    <div className={styles.opportunities}>
        <h2>{
            language == "arm" ? "Ինչ կտա ձեզ AIT-ն" : language == "ru" ? "Что вам даст AIT" : "What will AIT give you"
          }</h2>
        <div className={styles.insideOpportunities}>
            <div className={styles.opportunitiesPart}>
                <Opportunity 
                  number="https://aitschool.am/images/number1.svg" 
                  opportunity={language == "arm" ? "Կրթություն" : language == "ru" ? "Образование" : "Education"} 
                  description={language == "arm" ? "Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ: Ինչպես նաև կարող եք ուսանել Graphic Design, UI/UX Design, SMM և Անգլերեն:" : language == "ru" ? "Пройдите 10-месячный курс и получите базовые знания в области программирования. Вы также можете изучать графический дизайн, дизайн UI / UX, SMM и английский язык." : "Take the 10-month course and gain basic programming knowledge. You can also study Graphic Design, UI/UX Design, SMM and English"}  />
                <Opportunity 
                  number="https://aitschool.am/images/number2.svg"
                  opportunity={language == "arm" ? "Պրակտիկա" : language == "ru" ? "Практика" : "Practice"} 
                  description={language == "arm" ? "Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա:" : language == "ru" ? "После прохождения курса пройдите испытательный срок в компании, действующей рядом со школой. Применяйте свои знания, работая над реальными проектами." : "After completing the course, take a trial period at a programming company operating near the school. Apply your knowledge by working on real projects."} />
                <Opportunity 
                  number="https://aitschool.am/images/number3.svg"
                  opportunity={language == "arm" ? "Աշխատանք" : language == "ru" ? "Работа" : "Job"} 
                  description={language == "arm" ? "Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը:" : language == "ru" ? "Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды." : "Get a chance to join our team. Our students make up 80% of our team."}  />
            </div>
            <img src="../Images/globus.png" alt="globus" width={560} height={560} />
        </div>
    </div>
  )
}

export default Opportunities