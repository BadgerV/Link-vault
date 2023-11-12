import CustomButton from "../Button";
import { HeaderContainer, LogoContainer, HeaderAddons, HeaderDropdown } from "./Header.styles";
import Logo from "/assets/svg/logo.svg";
import PeraWalletIcon from "/assets/png/pera.png";
import DeflyIcon from "/assets/png/defly.png";
import WalletConnectIcon from "/assets/png/wallet-connect.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} alt="logo" />
        <h2>LinkVault</h2>
      </LogoContainer>
      <HeaderAddons>
        <div className="header__addons__items">
          <span>Documentation</span>
          <span>Ecosystem</span>
        </div>
        <HeaderDropdown>
          <CustomButton variant="filled" type="button">
            Connect
          </CustomButton>
          <div className="dropdown">
            <div className="dropdown__item">
              <div className="dropdown__item__img">
                <img src={PeraWalletIcon} alt="pera" />
              </div>
              <p>Pera Wallet</p>
            </div>
            <div className="dropdown__item">
              <div className="dropdown__item__img">
                <img src={DeflyIcon} alt="defly" />
              </div>
              <p>Defly Wallet</p>
            </div>
            <div className="dropdown__item">
              <div className="dropdown__item__img">
                <img src={WalletConnectIcon} alt="wallet connect" />
              </div>
              <p>Wallet Connect</p>
            </div>
          </div>
        </HeaderDropdown>
      </HeaderAddons>
    </HeaderContainer>
  );
};

export default Header;
