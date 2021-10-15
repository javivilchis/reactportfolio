import React from "react";
import './styles/main.css';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import { useTranslation } from 'react-i18next';
function Footer() {
     const colorStyles = {
          footer: {
               color: '#ffffff'
          }
     };
     const { t } = useTranslation();
     return (
          
          <footer>
               <ul>
                    <li><Link to="/">{t('link.home')}</Link></li>
                    <li><Link to="/about">{t('link.about')}</Link></li>
                    <li><Link to="/work">{t('link.work')}</Link></li>
                    <li><Link to="/contact">{t('link.contact')}</Link></li>
                    <li><a href="https://docs.google.com/document/d/1y4rS7eobPAoHeWPz6Byz0kd80kgRzqsIlaQoATi9Fqo/edit?usp=sharing"
                         target="_blank" aria-label="resume" rel="noreferrer">{t('link.resume')}</a></li>
                    <li><a href="/privacy-policy.html" rel="noreferrer">{t('link.privacy')}</a></li>
                    <li style={colorStyles.footer}>{t('footer.build')} <img src={logo} className="App-logo" alt="logo" /></li>

                    <li>
                         <div className="disclaimer">
                              <p>{t('footer.disclaimer')}</p>
                         </div>
                    </li>
               </ul>

          </footer>
     );
}

export default Footer;