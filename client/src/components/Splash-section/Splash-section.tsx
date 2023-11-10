import { SplashImageContainer, SplashSectionContainer } from "./Splash-section.styles";
import CustomButton from "../Button";
import Logo from "/assets/svg/logo.svg";
import SplashImage from "/assets/png/splash.png";
import Sponsors from "../Sponsors/Sponsors";

export const SplashSection = () => {
  return (
    <SplashSectionContainer>
      <h1>
        <span>
          The Link <img src={Logo} alt="logo" className="logo-splash" /> is{" "}
        </span>
        <span>
          {" "}
          your <span className="vault-">Vault.</span>
        </span>
      </h1>
      <p className="sub__text">Non-custodial algorand wallets via a Link. </p>
      <CustomButton variant="filled" type="button">
        Create a LinkVault
      </CustomButton>
      <SplashImageContainer src={SplashImage} alt="splash" />
      <Sponsors />
    </SplashSectionContainer>
  );
};

export default SplashSection;
