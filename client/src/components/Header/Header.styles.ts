import styled from "styled-components";
import { flexCenter, flexRowBetween } from "../../styles/mixins";

export const HeaderContainer = styled.div`
  ${flexRowBetween()};
  padding: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: var(--font-size-xl);
    color: var(--vault-primary);
    font-family: var(--font-family-geom);
  }
`;

export const HeaderAddons = styled.div`
  display: flex;
  align-items: center;

  .header__addons__items {
    font-size: var(--font-size-m);
    font-family: var(--font-family-nista);
    ${flexCenter()};
  }
`;
