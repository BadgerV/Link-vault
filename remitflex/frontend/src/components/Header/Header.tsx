import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RootState } from "../../store/store";
import { setCurrentUser } from "../../store/user/user.reducer";
import { HeaderConnectWallet, Image, LogoWrapper, Text } from "./Header.styles";
import { WalletStatus } from "./WalletStatus";

const Header: React.FC = () => {
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.currentUser?.currentUser);

  const handleCopyClick = () => {
    setHandleCopyAddress(true);
    setTimeout(() => {
      setHandleCopyAddress(false);
    }, 800);
  };

  const handleDisconnect = () => {
    localStorage.clear();
    dispatch(setCurrentUser(""));
  };

  return (
    <LogoWrapper>
      <Link to="/" className="link-wrapper">
        <Image src={"/assets/remitflexlogo.png"} alt="logo" />
        <Text>
          {" "}
          Remit<span>flex</span>
        </Text>
      </Link>
      {address && (
        <HeaderConnectWallet>
          <WalletStatus address={address} />
          {!address ? (
            <img className="connect" src="/assets/copywallet.png" alt="connect wallet" />
          ) : (
            <CopyToClipboard text={address} onCopy={handleCopyClick}>
              <img
                src={handleCopyAddress ? "/assets/copy.png" : "/assets/copy.svg"}
                alt={handleCopyAddress ? "copy" : "wallet copy"}
                style={{ cursor: "pointer" }}
              />
            </CopyToClipboard>
          )}
        </HeaderConnectWallet>
      )}
    </LogoWrapper>
  );
};

export default Header;
