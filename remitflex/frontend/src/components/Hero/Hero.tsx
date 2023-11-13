import Button from "../Button/Button";
// import { LeftFlex, RightFlex, TitleContainer, Wrapper } from "./Hero.styles"
import { HeroContainer } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero__left">
        <h3>Send money & pay bills in Africa</h3>
        <p>Scan your LinkVault to get started</p>
        <Button title="Go to App" />

        <p className="powered">
          powered by <img src="/assets/link-vault.png" alt="powered" />
        </p>
      </div>
      <div className="hero__right">
        <img src="/assets/right.png" alt="hero" />
      </div>
    </HeroContainer>
  );
};

export default Hero;
