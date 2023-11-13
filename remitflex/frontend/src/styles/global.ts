import { createGlobalStyle } from "styled-components";

// styled components global styles
export const GlobalStyle = createGlobalStyle`

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
      src: url('/fonts/nista/BwNistaGeometricDEMO-Regular.otf') format('truetype');
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
 
  :root {
    --vault-white : #ffffff;
    --vault-primary : #653780;
    --font-family-geom : 'Geom', sans-serif;
    --font-family-nista : 'Nista', sans-serif;
    --font-size-xxs: 0.8rem;
    --font-size-xs: 0.875rem;
    --font-size-s: 1rem;
    --font-size-m: 1.125rem;
    --font-size-l: 1.25rem;
    --font-size-xl: 1.563rem;
    --font-size-xxl: 1.875rem;
    --font-size-xxxl: 2.5rem;
  }

    body {
        font-family: var(--font-family-nista);
        width: 100%;
        overflow-x: hidden;
        background: #fafafa;
        margin:auto;

      }
      .rate{
        position: relative;
        left: 8.5rem;
      }
      .feediv{
        width: 450px;
        padding-top: 1rem;
      }
      .span{
        color: #6EC06C;
      }
      .formdiv{
        display: flex;
        flex-direction: column;
        width: 420px;
        margin-top: -1.5rem;
      }
      .transactions{
       margin: auto;
       width: 63%;
        
      }
      .landing{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding : 2rem 3rem;
      }
`;
