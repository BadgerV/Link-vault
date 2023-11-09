import { SplashSectionContainer } from "./Splash-section.styles";
import CustomButton from "../Button";

export const SplashSection = () => {
  return (
    <SplashSectionContainer>
      <h1>
        The Link is your <span>Vault.</span>
      </h1>
      <p>Non-custodial algorand wallets via a Link. </p>
      <CustomButton variant="filled" type="button">
        Create a LinkVault
      </CustomButton>
    </SplashSectionContainer>
  );
};

export default SplashSection;
