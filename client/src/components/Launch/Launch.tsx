import { useSelector } from "react-redux";
import { LaunchContainer } from "./Lauch.styles";
import CustomButton from "../Button";
import { getWallet } from "link-vault";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { computeAssets } from "../../utils/assets.utils";
import AssetsShowcase from "../Assets-Showcase";
const REACT_APP_CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

const LaunchVault = () => {
  const address = useSelector((state: any) => state.currentUser?.currentUser);
  const [ownedAssets, setOwnedAssets] = useState<any>({ assets: [], nfts: [] });
  const [vaultNobleLink, setVaultNobleLink] = useState<any>(null);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const getVaultNobleLink = async () => {
    const nobleCurveKey = `${REACT_APP_CLIENT_URL}${location.pathname}${location.hash}`;
    console.log(nobleCurveKey, "ok");
    const res = await getWallet(nobleCurveKey);
    console.log(res);
    setVaultNobleLink(res.address);
    return res;
  };

  const AVAILABLE_ASSETS = async () => {
    const assets = await computeAssets(vaultNobleLink);
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

    //     console.log(vaultNobleLink)
    //    if(!vaultNobleLink) navigate('/');
  }, []);

  useEffect(() => {
    if (!vaultNobleLink) return;
    AVAILABLE_ASSETS();
  }, [vaultNobleLink]);

  // console.log(params)
  return (
    <LaunchContainer>
      <div className="launch__header">
        <h3>Welcome,</h3>
        <CustomButton className="button__transparent">
          <img src="/assets/svg/share-link.svg" alt="share" className="copy__icon" />
          Share Link
        </CustomButton>
      </div>
      <div className="launch__body">
        <AssetsShowcase ownedAssets={ownedAssets} params={true} />
        <div className="buttons__container">
          <CustomButton variant="filled" type="button" className="deposit__button">
            Deposit
          </CustomButton>
          <CustomButton variant="filled" type="button" className="claim__button">
            Claim
          </CustomButton>
        </div>
      </div>
    </LaunchContainer>
  );
};

export default LaunchVault;
