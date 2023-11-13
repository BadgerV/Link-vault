import styled from "styled-components";

export const Header = styled.div`
  width: 40%;
  margin: auto;
`;
export const BodyText = styled.div`
  display: flex;
  margin-left: 3rem;
`;
export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  div {
    display: flex;
    width: 100%;
    gap: 1rem;

    img {
      width: 95.698px;
      height: 95.698px;
      flex-shrink: 0;
    }
  }
`;
export const ImageDiv = styled.img`
  margin-left: -5rem !important;
`;
export const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-direction: column;
  span {
    color: #545454;
    text-align: center;
    margin: auto;

    font-family: Sora-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 175%;
  }
  p {
    color: #545454;
    width: 20rem;
    font-family: Sora-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 175%;
  }
`;
export const SecondTitle = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
  font-family: var(--font-family-nista);
`;
export const Title = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
  font-family: var(--font-family-nista);
`;
export const MainText = styled.p`
  color: black;
  font-family: var(--font-family-geom);

  padding-top: 2rem;
  font-size: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
`;
// export const ButtonWrap = styled.div`
//     // width: 15rem;

// `
export const MidSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
`;
