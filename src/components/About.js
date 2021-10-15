import React from "react";
import { useTranslation } from 'react-i18next';
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
               </div>
          </section>
     );
}

export default About;