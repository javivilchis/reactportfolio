import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './styles/main.css';
const styles = {
     a: {
          TextDecoration: "none"
     }
}

function NavBar() {
     const { t, i18n } = useTranslation();
     const changeLanguage = (lng) => {    i18n.changeLanguage(lng);  }
     console.log("CURRENT LANGUAGE: ", i18n.resolvedLanguage);
     return (
          <header id="home">
               <Link to="/" style={styles.a}><h1 className="logo" >Javier Vilchis</h1></Link>
               <nav>

                    <ul>
                         <li><Link to="/">{t('link.home')}</Link></li>
                         <li><Link to="/about">{t('link.about')}</Link></li>
                         <li><Link to="/work">{t('link.work')}</Link></li>
                         <li><Link to="/contact">{t('link.contact')}</Link></li>
                         <li>{i18n.resolvedLanguage === 'en' ? <span className="language" onClick={() => changeLanguage('es')}>ES</span> : <span className="language" onClick={() => changeLanguage('en')}>EN</span>}</li>
                         
          {/* {Object.keys(lngs).map((lng) => (
            <span key={lng}  style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', fontColor: 'white' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
             
              { i18n.resolvedLanguage[0]  === 'en' ? <span>English</span> : <span>Spanish</span>}
            </span>
          ))}
      
        </li> */}
                    </ul>
               </nav>
          </header>
     )
}

export default NavBar;