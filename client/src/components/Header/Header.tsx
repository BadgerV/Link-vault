import { HeaderContainer, LogoContainer } from "./Header.styles";
import Logo from "@/assets/svg/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <h2>LinkVault</h2>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
