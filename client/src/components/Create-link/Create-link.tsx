import { useEffect, useState, useRef } from "react";
import Card from "../Card";
import { computeAssets, Asset, NFT } from "../../utils/assets.utils";
import OptionLabel from "../Option-Label/Option-Label";
import CustomButton from "../Button";
import { useSelector } from "react-redux";
import { createVault } from "link-vault";
import { useNavigate } from "react-router-dom";
import { CreatedLinkContainer } from "./Create-link.styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "qrcode.react";
import AssetsShowcase from "../Assets-Showcase";

interface OwnedAssets {
  assets: Asset[];
  nfts: NFT[];
}

const CreateLink = () => {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const [ownedAssets, setOwnedAssets] = useState<OwnedAssets>({ assets: [], nfts: [] });
  const address = useSelector((state: any) => state.currentUser?.currentUser);
  const [createdVault, setCreatedVault] = useState<any>(null);
  const navigate = useNavigate();
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);

  const AVAILABLE_ASSETS = async () => {
    const assets = await computeAssets(address);
    setOwnedAssets(assets ?? { assets: [], nfts: [] });
  };

  // handles the click event when clicked outside of dropdown
  useEffect(() => {
    const handleClickOutsideDropdownItem = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        event.target instanceof Element
      ) {
        setShowDropdownItems(false);
      }
    };

    document.addEventListener("click", handleClickOutsideDropdownItem);
    return () => {
      document.removeEventListener("click", handleClickOutsideDropdownItem);
    };
  }, []);

  useEffect(() => {
    if (!address) return;
    AVAILABLE_ASSETS();
  }, [address]);

  const handleDropdown = () => {
    if (!address) {
      alert("Please connect your wallet first");
      return;
    }
    setShowDropdownItems(!showDropdownItems);
  };

  const handleSelectAsset = (asset: Asset) => {
    setSelectedAsset(asset);
    setShowDropdownItems(false);
  };

  const createEmptyLinkVault = async () => {
    const createdVault = await createVault();
    if (createdVault.address) {
      setCreatedVault(createdVault);
    }
  };

  // const createVaultAndFund = async () => {

  // }

  return (
    <>
      {!createdVault ? (
        <Card>
          <h2>Create a linkVault</h2>
          <AssetsShowcase ownedAssets={ownedAssets} />
          <div className="link__amount">
            <h3>Amount</h3>
            <input
              type="number"
              placeholder={selectedAsset ? `0 ${selectedAsset.unit_name}` : "0"}
              className="input__amount"
            />
          </div>
          <p className="empty__link" onClick={createEmptyLinkVault}>
            Create an empty link to fund later?
          </p>
          <CustomButton variant="filled" type="button">
            Create
          </CustomButton>
        </Card>
      ) : (
        <CreatedLinkContainer>
          <img src="/assets/svg/link-created.svg" alt="link created" />
          <h2> Link Created!</h2>
          <p className="link__address">{`${createdVault.vault.substring(0, 36)}...`}</p>
          <div className="buttons__container">
            <CopyToClipboard text={createdVault.vault}>
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
                {"Copy Link"}
              </CustomButton>
            </CopyToClipboard>
            <CustomButton className="button__transparent">
              <img src="/assets/svg/share-link.svg" alt="share" className="copy__icon" />
              Share Link
            </CustomButton>
          </div>
          <div className="qr__container">
            <QRCode value={createdVault.vault} />
          </div>
        </CreatedLinkContainer>
      )}
    </>
  );
};

export default CreateLink;
