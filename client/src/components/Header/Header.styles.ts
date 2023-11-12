import styled from "styled-components";
import { flexCenter, flexRowBetween } from "../../styles/__mixins";

export const HeaderContainer = styled.div`
  ${flexRowBetween()};
  padding: 2rem;

  @media screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 2rem;
  }
  @media screen and (max-width: 360px) {
    width: 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: var(--font-size-m);
    color: var(--vault-primary);
    font-family: var(--font-family-geom);

    @media screen and (max-width: 500px) {
      font-size: var(--font-size-s);
    }
    @media screen and (max-width: 360px) {
      font-size: 0.8rem;
    }
  }
`;

export const HeaderAddons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    gap: 0.5rem;
  }
  @media screen and (max-width: 360px) {
    gap: 0.5rem;
  }

  .header__addons__items {
    font-size: var(--font-size-s);
    font-family: var(--font-family-nista);
    ${flexCenter()};
    gap: 0.5rem;
    @media screen and (max-width: 500px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 360px) {
      font-size: 0.57rem;
    }
  }

  button {
    @media screen and (max-width: 500px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 360px) {
      font-size: 0.6rem;
    }
  }
`;
