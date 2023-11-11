import styled from "styled-components";
import { flexCenter, flexRowBetween } from "../../styles/__mixins";

export const HeaderContainer = styled.div`
  ${flexRowBetween()};
  padding: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: var(--font-size-m);
    color: var(--vault-primary);
    font-family: var(--font-family-geom);
  }
`;

export const HeaderAddons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .header__addons__items {
    font-size: var(--font-size-s);
    font-family: var(--font-family-nista);
    ${flexCenter()};
    gap: 0.5rem;
  }
`;
