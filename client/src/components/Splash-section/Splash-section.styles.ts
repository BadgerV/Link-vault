import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const SplashSectionContainer = styled.div`
  ${flexCenter()};
  flex-direction: column;
  gap: 2rem;
`;

export const SplashImageContainer = styled.img`
  width: 100%;
  max-width: 50rem;
  height: auto;
`;
