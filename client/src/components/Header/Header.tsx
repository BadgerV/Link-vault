import CustomButton from "../Button";
import { HeaderContainer, LogoContainer, HeaderAddons } from "./Header.styles";
import Logo from "/assets/svg/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} />
        <h2>LinkVault</h2>
      </LogoContainer>
      <HeaderAddons>
        <div className="header__addons__items">
          <span>Documentation</span>
          <span>Ecosystem</span>
        </div>
        <CustomButton variant="filled" type="button">
          Connect
        </CustomButton>
      </HeaderAddons>
    </HeaderContainer>
  );
};

export default Header;
