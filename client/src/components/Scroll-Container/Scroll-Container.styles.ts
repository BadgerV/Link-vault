import styled from "styled-components";

interface ScrollSectionProps {
  visible: Boolean;
}

type CustomScrollBarProps = {
  scrollPercentage: number;
};

export const ScrollContainerP = styled.div`
  position:sticky;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  max-height: 100vh;
  padding: 3rem 0rem;
  background: url("/assets/png/hero.png");
  background-size: 100% 110%;
  overflow-y: scroll;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 2rem;
  padding-bottom: -3rem;
`;

export const ScrollSection = styled.div<ScrollSectionProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  opacity: ${props => (props.visible ? 1 : 0.5)};
  transition: opacity 0.5s;
  color: #fff;
  padding: 0rem 20rem;

  .section__first__content {
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: column;
    white-space: nowrap;
  }

  h1 {
    font-size: 2rem;
    font-family: var(--font-family-geom);
    font-weight: 700;
  }
  h2 {
    font-size: 1.5rem;
    font-family: var(--font-family-geom);
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-family: var(--font-family-nista);
    font-weight: 400;
  }

  &:nth-child(1) {
    display: flex;
    justify-content: left;
    margin-top: 3rem;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: right;
  }

  &:nth-child(3) {
    display: flex;
    justify-content: left;
  }
`;

export const ScrollProgress = styled.div<CustomScrollBarProps>`

  position: absolute;
 top: 10;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 100%;
  border-radius: 2px;
  opacity: 1;
  background-color: #fad9e3;


  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: ${props => props.scrollPercentage + "%"};
    background-color: #e53f71; 
    border-radius: inherit;
    }

        &::after {
            content: '';
            position: absolute;
            top: ${props => props.scrollPercentage + "%"};
            left: 50%;
            transform: translateX(-50%);
            color: #e53f71;
            font-weight: bold;
            width: 13px;
            height: 13px;
            box-shadow: 0 0 10px #e53f71; 
            margin-top: -7px;
            padding: 4px;
            background-color: #e53f71; 
            border-radius: 100%;
            opacity: 0.8;
          }
      }
`;
