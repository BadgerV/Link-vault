import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";

export const CardContainer = styled.div`
  position: relative;
  border-radius: 22px;
  border: 1px solid #653780;
  background: linear-gradient(180deg, rgba(254, 247, 249, 0) 0%, #fef7f9 100%);
  box-shadow: 0px 23px 28px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  ${flexCenter()};
  flex-direction: column;
  width: 600px;
  margin: auto;
  padding: 3rem;
  gap: 2rem;

  .empty__link {
    font-family: var(--font-family-nista);
    font-size: var(--font-size-s);
    color: #e53f71;
    cursor: pointer;
  }

  h2 {
    font-family: var(--font-family-nista);
    font-weight: 600;
    color: var(--vault-primary);
    margin-right: auto;
  }
  .link__container {
    width: 100%;
  }
  .link__types {
    border: solid 1px var(--vault-primary);
    border-radius: 10px;
    ${flexCenter()};
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1rem;

    .link-span {
      font-family: var(--font-family-nista);
      font-size: var(--font-size-s);
      color: #bfb1c5;
    }

    .asset-selected {
      color: black;
    }
  }

  .selected__link {
    &__item {
      ${flexCenter()};
      font-family: var(--font-family-nista);
      font-size: var(--font-size-s);
      color: var(--vault-primary);
      font-weight: 400;
      gap: 0.5rem;

      img {
        width: 17px;
        height: 17px;
      }
    }
  }

  .owned__assets {
    width: 500px;
    position: absolute;
    background: white;
    padding: 1rem;
    z-index: 3;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    background: #fff;
    box-shadow:
      0px 16px 48px 0px rgba(0, 0, 0, 0.1),
      0px 8px 24px 0px rgba(0, 0, 0, 0.1);
    margin-top: 4px;
    min-height: 10rem;
    max-height: 20rem;
    overflow-y: auto;

    h3 {
      font-family: var(--font-family-nista);
      font-size: var(--font-size-s);
      margin: 0.5rem 0rem 0.5rem;
    }
    p {
      font-family: var(--font-family-nista);
    }
  }

  .dropdown__icon:hover,
  .dropdown__icon:active {
    filter: invert(41%) sepia(0%) saturate(2%) hue-rotate(47deg) brightness(95%) contrast(91%);
  }

  .link__amount {
    width: 100%;
    ${flexCenter()};
    gap: 0.6rem;
    flex-direction: column;
    // padding : 0rem 1rem;

    h3 {
      font-family: var(--font-family-nista);
      color: var(--vault-primary);
      font-weight: 600;
      margin-right: auto;
    }
  }

  .input__amount {
    border: solid 1px var(--vault-primary);
    border-radius: 10px;
    ${flexCenter()};
    justify-content: space-between;
    width: 90%;
    padding: 1rem 1.5rem;
    font-family: var(--font-family-nista);
    font-size: var(--font-size-s);
  }

  button {
    width: 100%;
    padding: 0.8rem;
    background: #e53f71 !important;
  }
`;
