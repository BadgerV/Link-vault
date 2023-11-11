import styled from "styled-components";

interface ScrollSectionProps {
  visible: Boolean;
}

export const ScrollContainerP = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ScrollSection = styled.div<ScrollSectionProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  opacity: ${props => (props.visible ? 1 : 0.5)};
  transition: opacity 0.5s;
`;

export const ScrollProgress = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 100vh;
  background-color: #333;
  border-radius: 4px;
  opacity: 1;
`;
