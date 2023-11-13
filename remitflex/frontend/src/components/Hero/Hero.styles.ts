import styled from "styled-components";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .hero__left {
    h3 {
      font-size: 50px;
      background: linear-gradient(45deg, #409099, #84e681);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-family: var(--font-family-geom);
    }
    button {
      width: 40%;
      padding: 0rem;
    }

    .powered {
      display: flex;
      align-items: center;
    }
  }

  .hero__right {
    @media screen and (max-width: 1350px) {
      img {
        width: 40rem;
      }
    }
  }
`;
