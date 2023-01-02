import React from "react";
import "./styles/main.css";
import { StyledHero } from "./components/styles/hero.styled";
import { useTranslation } from 'react-i18next';



export default function Hero() {
  const { t } = useTranslation();
  return (
    <StyledHero>
      <div className="blue-overlay"></div>
      
      
      <h1>
      {t('welcome.header1')} <br />
      {t('welcome.header2')}<br />
      {t('welcome.header3')}<br />
      {t('welcome.header4')}
      </h1>
    </StyledHero>
  );
}
