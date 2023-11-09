import { SplashImageContainer, SplashSectionContainer } from "./Splash-section.styles";
import CustomButton from "../Button";
import Logo from "/assets/svg/logo.svg";
import SplashImage from "/assets/png/splash.png";
import Sponsors from "../Sponsors/Sponsors";

export const SplashSection = () => {
  return (
    <SplashSectionContainer>
      <h1>
        The Link is your <img src={Logo} alt="logo" /> <span>Vault.</span>
      </h1>
      <p>Non-custodial algorand wallets via a Link. </p>
      <CustomButton variant="filled" type="button">
        Create a LinkVault
      </CustomButton>
      <SplashImageContainer src={SplashImage} alt="splash" />
      <Sponsors />
    </SplashSectionContainer>
  );
};

export default SplashSection;
