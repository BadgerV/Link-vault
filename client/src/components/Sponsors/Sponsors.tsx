import { SponsorsContainer } from "./Sponsors.styles";
import AlgorandIcon from "/assets/svg/algorand.svg";
import CircleIcon from "/assets/svg/circle.svg";

export const Sponsors = () => {
  return (
    <SponsorsContainer>
      Powered by <img src={AlgorandIcon} alt="algorand" />
      algorand and
      <img src={CircleIcon} alt="circle" />
    </SponsorsContainer>
  );
};

export default Sponsors;
