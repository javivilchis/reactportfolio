import React from "react";
import { useTranslation } from 'react-i18next';
function NotFound() {
     const { t } = useTranslation();
     return (
          <section id="notfound">
               <div className="side">
                    <h2>{t('notfound.title')}</h2>
               </div>
               <div className="content">
                    <p>{t('notfound.intro1')}</p>
                    <p>{t('notfound.intro2')}</p>
               </div>
          </section>
     );
}

export default NotFound;