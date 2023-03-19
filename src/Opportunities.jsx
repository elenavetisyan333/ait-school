import React from 'react'
import Opportunity from './Opportunity'
import styles from './Opportunities.module.css'

function Opportunities() {
  return (
    <div className={styles.opportunities}>
        <h2>Ինչ կտա ձեզ AIT-ն</h2>
        <div className={styles.insideOpportunities}>
            <div className={styles.opportunitiesPart}>
                <Opportunity number="https://aitschool.am/images/number1.svg" opportunity="Կրթություն" description="Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ: Ինչպես նաև կարող եք ուսանել Graphic Design, UI/UX Design, SMM և Անգլերեն:" />
                <Opportunity number="https://aitschool.am/images/number2.svg" opportunity="Պրակտիկա" description="Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա:" />
                <Opportunity number="https://aitschool.am/images/number3.svg" opportunity="Աշխատանք" description="Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը:" />
            </div>
            <img src="../Images/globus.png" alt="globus" width={560} height={560} />
        </div>
    </div>
  )
}

export default Opportunities