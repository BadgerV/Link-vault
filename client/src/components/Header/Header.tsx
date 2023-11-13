import { useState } from "react";
import CustomButton from "../Button";
import { HeaderContainer, LogoContainer, HeaderAddons, HeaderDropdown } from "./Header.styles";
import { PeraWalletConnect } from "@perawallet/connect";
import { setCurrentUser } from "../../stores/user/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { RootState } from "../../stores/stores";
import { CopyToClipboard } from "react-copy-to-clipboard";

const peraWallet = new PeraWalletConnect();
const deflywallet = new DeflyWalletConnect();

export const Header = () => {
  const dispatch = useDispatch();
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
  const address = useSelector((state: RootState) => state.currentUser?.currentUser);

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
          <CustomButton
            variant="filled"
            type="button"
            className={address ? "address__button address__main" : "address__main"}
          >
            {address ? (
              <span className="address__">
                {address?.substring(0, 5)}...
                {address?.substring(54, 57)}
              </span>
            ) : (
              "Connect"
            )}
            {address && (
              <CopyToClipboard text={address}>
                {!handleCopyAddress ? (
                  <img
                    className="copy__icon"
                    src="/assets/svg/copy.svg"
                    alt="wallet copy"
                    style={{
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      setHandleCopyAddress(!handleCopyAddress);
                      setTimeout(() => {
                        setHandleCopyAddress(false);
                      }, 800);
                    }}
                  />
                ) : (
                  <img src="/assets/png/copy.png" alt="copy" className="copy__icon" />
                )}
              </CopyToClipboard>
            )}
          </CustomButton>
          <div className={address ? `dropdown disconnect` : `dropdown`}>
            {address ? (
              <div
                className="dropdown__item"
                onClick={() => {
                  dispatch(setCurrentUser(""));
                }}
              >
                <p className="disconnect__wallet"> Disconnect</p>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </HeaderDropdown>
      </HeaderAddons>
    </HeaderContainer>
  );
};

export default Header;
