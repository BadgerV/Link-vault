/* stylelint-disable */
import { createGlobalStyle } from "styled-components";

// styled components global styles
export const GlobalStyle = createGlobalStyle`
  --vault-white : #ffffff;
  --vault-primary : #653780;
  --font-family-geom : 'Geom', sans-serif;
  --font-family-nista : 'Nista', sans-serif;
 
  @font-face {
    font-family: 'Nista';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/nista/BwNistaGeometricDEMO-Light.otf') format('truetype');
  }
  @font-face {
        font-family: 'Nista';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/nista/BwNistaGeometricDEMO-Regular.otf.otf') format('truetype');
    }

  @font-face {
        font-family: 'Nista';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/nista/BwNistaGeometricDEMO-Bold.otf') format('truetype');
    }
  @font-face {
        font-family: 'Geom';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/geom/Geom Light.ttf') format('truetype');
    }
  @font-face {
        font-family: 'Geom';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/geom/Geom-Variable.ttf') format('truetype');
    }
   @font-face {
        font-family: 'Geom';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/geom/Geom Ultra.ttf') format('truetype');
    }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
  html, 
  body {
    height:100%; 
    padding:0; 
    margin:0; 
    width:100%;
    overflow-x : hidden;
    background : url('/svg/background.svg') no-repeat center center fixed;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,  
  fieldset,
  label {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    all: unset;
  }
  input {
    all : unset;
  }
  select {
    outline: none;
    border: none;
  }
  `;
