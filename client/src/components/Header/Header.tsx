import CustomButton from "../Button";
import { HeaderContainer, LogoContainer, HeaderAddons } from "./Header.styles";
import Logo from "@/assets/svg/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <h2>LinkVault</h2>
      </LogoContainer>
      <HeaderAddons>
        <div className="header__addons__item">
          <span>Documentation</span>
          <span>Ecosystem</span>
        </div>
        <CustomButton variant="filled">Connect</CustomButton>
      </HeaderAddons>
    </HeaderContainer>
  );
};

export default Header;
