import React from 'react'
import FooterElement from './FooterElement'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer} >
        <div className={styles.insideFooter} >
            <div className={styles.footerElements}>
                <FooterElement image="https://aitschool.am/images/Phone.svg" name="+374(93)-67-69-66" link="tel:+37493676966" />
                <FooterElement image="https://aitschool.am/images/Mail.svg" name="info@aitschool.am" link="mailto:info@aitschool.am" />
                <FooterElement image="https://aitschool.am/images/Instagram.svg" name="ararat_itcenter" link="https://www.instagram.com/ararat_itcenter/" />
                <FooterElement image="https://aitschool.am/images/FacebookIcon.svg" name="Ararat IT Center" link="https://www.facebook.com/AraratITCenter/" />
                <FooterElement image="https://aitschool.am/images/LinkedinIcon.svg" name="Ararat IT Center" link="" />
            </div>
        </div>
    </div>
  )
}
export default Footer