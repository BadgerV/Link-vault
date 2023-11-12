import { useEffect, useState, useRef } from "react";
import Card from "../Card";
import { computeAssets, Asset, NFT } from "../../utils/assets.utils";
import OptionLabel from "../Option-Label/Option-Label";
import CustomButton from "../Button";
import { useSelector } from "react-redux";
import { createVault } from "link-vault";
import { useNavigate } from "react-router-dom";

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
    <Card>
      <h2>Create a linkVault</h2>
      <div className="link__container" ref={dropdownRef}>
        <div
          className={`link__types ${showDropdownItems ? "link__active" : ""} `}
          onClick={handleDropdown}
        >
          <span className={`link-span ${selectedAsset ? "asset-selected" : ""}`}>
            {selectedAsset ? (
              <div className="selected__link">
                <div className="selected__link__item">
                  <img src={selectedAsset.logo.svg} alt="logo" className="selected__link__icon" />
                  <p className="selected__link__name">{selectedAsset.unit_name}</p>
                </div>
                <p></p>
              </div>
            ) : (
              "Algorand standard assets"
            )}
          </span>
          <img src={"/assets/svg/dropdown.svg"} alt="dropdown" className="dropdown__icon" />
        </div>
        {showDropdownItems && (
          <div className="owned__assets">
            <h3>Tokens</h3>
            {ownedAssets?.assets?.length > 0 &&
              ownedAssets.assets.map((asset: Asset, i: number) => (
                <div
                  className="owned__assets__item"
                  key={i}
                  onClick={() => handleSelectAsset(asset)}
                >
                  <OptionLabel key={i} option={asset} />
                </div>
              ))}
            <h3>Nfts</h3>
            {ownedAssets?.nfts?.length > 0 ? (
              ownedAssets.assets.map((nft: Asset, i: number) => (
                <OptionLabel key={i} option={nft} />
              ))
            ) : (
              <p>There are no in this wallet</p>
            )}
          </div>
        )}
      </div>
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
  );
};

export default CreateLink;
