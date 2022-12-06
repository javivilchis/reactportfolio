import styled from "styled-components";
import header from "./../../images/header-image.png";

export const StyledHero = styled.header`
position:relative;
padding: 2rem 0;
background-color:  var(--darkblue-bg);
background-image: url(${header});
display:none;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
min-height: 200px;
z-index: 1;

html {
     --main-txt-color: #31343d;
     --bluegreen-bg: #92cccd;
     --header-bg: #31343d;
     --bluegreen-txt: #92cccd;
     --darkblue-bg: #14284e;
     --footer-bg: #31343d;
     --light-bg: #f4f4f4;
     --dark-bluegreen-txt: #268788;
}
.blue-overlay {
     position:absolute;
     top:0;
     background: var(--darkblue-bg);
     
     width:100%;
     height:100%;
     opacity:.5;
     z-index: 2;

}
h1{ 
     color:var(--main-txt-color);
     background-color: var(--bluegreen-bg);
     width:relative;
     padding: 10px 100px 10px 10px;
     font-size:2rem;
     z-index:3;
     
}
@media(min-width: 640px){
     display:flex;
}
`;