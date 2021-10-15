import React from "react";
import "./styles/main.css";
import { StyledHero } from "./components/styles/hero.styled";

export default function Hero() {
  return (
    <StyledHero>
      <div className="blue-overlay"></div>
      <h1>
        - Marketing Strategy <br />- Customer Experience<br />- UX / UI Design <br />- Web Development
      </h1>
    </StyledHero>
  );
}
