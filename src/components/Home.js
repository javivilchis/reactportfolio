import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import javi from "./../images/javier_vilchis_duo_purple.png";
//import Languages from "./animation/languages";
function Home() {
     const { t } = useTranslation();
     const todaysdate = new Date().toLocaleString("en-US", { day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric'})
             
     return (
          <main>
               <div className="onebytwo">
                    <div className="onebytwo-one">Today's date: <strong>{todaysdate}</strong></div>
               </div>

               <div className="onebytwo">
                    
                    <div className="javiimage">
                         <img src={javi} className="javi" alt="Javier Vilchis" />
                    </div>
                    <p className="introduction">
                    
                         <Trans i18nKey="welcome.part1"></Trans> 
                         <Link to="/work" className="App-link" aria-label={`my work`}><Trans i18nKey="welcome.link"></Trans></Link>.
                    </p>
               </div>
              
               <hr />
             
               <div className="w100">
                    <p>I have put a hold on my blog, please check back later while I move it to a different host.</p>
               </div>
       
               <h2>{t('news.header.title')}</h2>

               <section id="blog">
                    <div className="w33"> 
                         <Card>
                              <Card.Body>
                                   <Card.Title><h3>{t('news.seven.title')}</h3></Card.Title>
                                   <Card.Text>
                                        <small><em>08/15/2022</em></small>
                                        <p>{t('news.seven.about')} </p>
                                        
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className="footerJav">
                                   <a href="/irun/index.php/2022/08/15/injury-report/" aria-label="blog post injury report" title="injury report">{t('news.seven.link')}</a>
                              </Card.Footer>
                         </Card>
                         
                    </div>
                    <div className="w33"> 
                         <Card>
                              <Card.Body>
                                   <Card.Title><h3>{t('news.six.title')}</h3></Card.Title>
                                   <Card.Text>
                                   <small><em>06/13/2022</em></small>
                                   <p>{t('news.six.about')}</p>
                                   
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className="footerJav">
                                   <a href="/irun/index.php/2022/06/13/ifit-summit-push/">{t('news.four.link')}</a>
                              </Card.Footer>
                         </Card>
                         
                    </div>
                    <div className="w33"> 
                         <Card>
                              <Card.Body>
                                   <Card.Title><h3>{t('news.five.title')}</h3></Card.Title>
                                   <Card.Text>
                                        <small><em>04/02/2022</em></small>
                                        <p>{t('news.five.about')}</p>
                                        
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className="footerJav">
                                   <a href="https://www.youtube.com/watch?v=dNlFfe99UnQ&list=PLtvvbQqh_2opGaxCfAykvhxYi-0hkrSYl&utm_source=ReactNativeTutorial&utm_medium=LinkFromJavivilchis&utm_campaign=ReactNativeTutorial&utm_id=04122022&utm_term=ReactNativeTutorial">{t('news.five.link')}</a>
                              </Card.Footer>
                         </Card>
                    </div>
                    <div className="w33"> 
                         <Card>
                              <Card.Body>
                                   <Card.Title><h3>{t('news.four.title')}</h3></Card.Title>
                                   <Card.Text>
                                        <small><em>04/02/2022</em></small>
                                        <p>{t('news.four.about')}</p>
                                        
                                   </Card.Text>
                              </Card.Body>
                              <Card.Footer className="footerJav">
                                   <a href="/irun/index.php/2022/03/01/cowtown-marathon-2022-ultra-cowtown-cowtown-2022-winner-ultra-irving-irc-texas/">{t('news.four.link')}</a>
                              </Card.Footer>
                         </Card>
                        
                    </div>
                   
                    
                   
               </section>
          </main>
     );
}

export default Home;
