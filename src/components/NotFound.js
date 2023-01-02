import React from "react";
import { useTranslation } from 'react-i18next';
function NotFound() {
     const { t } = useTranslation();
     return (
          <section id="notfound">
               <div className="content">
                    <h2>{t('notfound.title')}</h2>
               
                    <p>{t('notfound.intro1')}</p>
                    <p>{t('notfound.intro2')}</p>
               </div>
          </section>
     );
}

export default NotFound;