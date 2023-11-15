import { useSelector } from "react-redux";
import { LaunchContainer } from "./Lauch.styles";
import CustomButton from "../Button";
import { getVault } from "link-vault";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { computeAssets } from "../../utils/assets.utils";
import AssetsShowcase from "../Assets-Showcase";
import PopUp from "../Popup";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { claimVault } from "../../utils/integration";

const REACT_APP_CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

const LaunchVault = () => {
  const address = useSelector((state: any) => state.currentUser?.currentUser);
  const [ownedAssets, setOwnedAssets] = useState<any>({ assets: [], nfts: [] });
  const [vaultNobleLink, setVaultNobleLink] = useState<any>(null);
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
  const [showDepositPopup, setShowDepositPopup] = useState(false);
  const walletType = useSelector((state: any) => state.currentUser?.walletType);
  const location = useLocation();

  console.log(location);
  const navigate = useNavigate();
  const getVaultNobleLink = async () => {
    const nobleCurveKey = `${REACT_APP_CLIENT_URL}${location.pathname}${location.hash}`;
    console.log(nobleCurveKey, "ok");
    const res = await getVault(nobleCurveKey);
    console.log(res);
    setVaultNobleLink(res);
    return res;
  };

  const AVAILABLE_ASSETS = async () => {
    const assets = await computeAssets(vaultNobleLink.address);
    console.log(assets, "assets");
    setOwnedAssets(assets ?? { assets: [], nfts: [] });
  };

  // const vaultLink =
  useEffect(() => {
    (async () => {
      const result = await getVaultNobleLink();
      if (!result) navigate("/");
      console.log(result, "result");
    })();
  }, []);

  useEffect(() => {
    if (!vaultNobleLink) return;
    AVAILABLE_ASSETS();
  }, [vaultNobleLink]);

  // console.log(params)
  const handleClaim = async () => {
    await claimVault(vaultNobleLink, address, walletType, ownedAssets);
  };

  return (
    <LaunchContainer>
      <div className="launch__header">
        <h3>Welcome,</h3>
      </div>
      <div className="launch__body">
        <AssetsShowcase
          ownedAssets={ownedAssets}
          params={true}
          setShowDropdownItems={setShowDropdownItems}
          showDropdownItems={showDropdownItems}
        />
        <div className="buttons__container">
          <CustomButton
            variant="filled"
            type="button"
            className="deposit__button"
            onClick={() => setShowDepositPopup(true)}
          >
            Deposit
          </CustomButton>
          <CustomButton
            variant="filled"
            type="button"
            className="claim__button"
            onClick={() => setShowPopup(true)}
          >
            Claim
          </CustomButton>
        </div>
      </div>
      {showPopup && (
        <PopUp isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <div className="popup__modal">
            <h2>Select withdrawal mode</h2>
            <div className="popup__container">
              <div className="popup__first" onClick={handleClaim}>
                <h3>via the connected wallet</h3>
                <p>Asset will be sent to the connected algorand wallet</p>
              </div>
              <div className="popup__second">
                <a
                  href={`https://remitflex.com/app${location.pathname}${location.hash}`}
                  target="_blank"
                >
                  <h3>via Remit flex</h3>
                  <p>Make remittances and pay over 18,000 bill categories in africa</p>
                </a>
              </div>
            </div>
          </div>
        </PopUp>
      )}
      {showDepositPopup && (
        <PopUp isOpen={showDepositPopup} onClose={() => setShowDepositPopup(false)}>
          <div className="popup__modal">
            <h2 className="deposit">deposit asset via vault wallet address</h2>
            <div className="popup__container noble__link">
              <QRCode value={vaultNobleLink.address} />

              <CopyToClipboard text={vaultNobleLink.address}>
                <CustomButton
                  variant="filled"
                  className="button__transparent"
                  onClick={() => {
                    setHandleCopyAddress(!handleCopyAddress);
                    setTimeout(() => {
                      setHandleCopyAddress(false);
                    }, 800);
                  }}
                >
                  {!handleCopyAddress ? (
                    <img
                      className="copy__icon"
                      src="/assets/svg/copy-created.svg"
                      alt="link copy"
                      style={{
                        cursor: "pointer"
                      }}
                    />
                  ) : (
                    <img src="/assets/png/copy.png" alt="copy" className="copy__icon" />
                  )}
                  {"Copy Address"}
                </CustomButton>
              </CopyToClipboard>
            </div>
          </div>
        </PopUp>
      )}
    </LaunchContainer>
  );
};

export default LaunchVault;
