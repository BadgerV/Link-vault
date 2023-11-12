import CustomButton from "../Button";
import { HeaderContainer, LogoContainer, HeaderAddons, HeaderDropdown } from "./Header.styles";
import { PeraWalletConnect } from "@perawallet/connect";
import { setCurrentUser } from "../../stores/user/user.reducer";
import { useDispatch } from "react-redux";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { useEffect } from "react";

const peraWallet = new PeraWalletConnect();
const deflywallet = new DeflyWalletConnect();

export const Header = () => {
  const dispatch = useDispatch();

  console.log(peraWallet);

  const peraWalletConnect = () => {
    peraWallet
      .connect()
      ?.then(accounts => {
        peraWallet.connector.on("disconnect", () => {
          dispatch(setCurrentUser(undefined));
          peraWallet.disconnect();
        });
        dispatch(setCurrentUser(accounts![0]));
      })
      .catch(error => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  };

  const deflyWalletConnect = () => {
    deflywallet
      .connect()
      ?.then(accounts => {
        deflywallet.connector.on("disconnect", () => {
          dispatch(setCurrentUser(undefined));
          deflywallet.disconnect();
        });
        dispatch(setCurrentUser(accounts![0]));
      })
      .catch(error => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={"/assets/svg/logo.svg"} alt="logo" />
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
            <div className="dropdown__item" onClick={peraWalletConnect}>
              <div className="dropdown__item__img">
                <img src={"/assets/png/pera.png"} alt="pera" />
              </div>
              <p>Pera Wallet</p>
            </div>
            <div className="dropdown__item" onClick={deflyWalletConnect}>
              <div className="dropdown__item__img">
                <img src={"/assets/png/defly.png"} alt="defly" />
              </div>
              <p>Defly Wallet</p>
            </div>
            <div className="dropdown__item">
              <div className="dropdown__item__img">
                <img src={"/assets/png/wallet-connect.png"} alt="wallet connect" />
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
