import React from "react";
import { useTranslation } from 'react-i18next';
import Languages from './animation/languages'
function About() {
     const { t } = useTranslation();
     return (
          <section id="about-me">
               <div className="side">
                    <h2>{t('about.title')}</h2>
                   
               </div>
               <div className="content">
                    
                    <p>{t('about.intro1')}</p>
                    <p>{t('about.intro2')}</p>
                    <div style={{width: 400, textAlign: "left"}}>
                    <Languages />
                    </div>
               </div>
          </section>
     );
}

export default About;