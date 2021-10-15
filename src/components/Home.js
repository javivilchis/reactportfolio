import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import javi from "./../images/javier_vilchis_duo_purple.png";
function Home() {
     const { t } = useTranslation();
     return (
          <header className="App-header home">
               <img src={javi}  className="javi" alt="Javier Vilchis" />
               <p className="introduction">
                   <Trans i18nKey="welcome.part1"></Trans> <a className="App-link" href="/contact" aria-label="contact me"><Trans i18nKey="welcome.link"></Trans></a>.
               </p>
               
        
               <a
                    className="App-link"
                    href="/work"
                    rel="noopener noreferrer"
               >{t('welcome.part2')}
                    
               </a>
          </header>
     );
}

export default Home;
