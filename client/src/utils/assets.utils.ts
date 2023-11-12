import { assets } from "../services/unprotected/assetsAPI";

const ownedAssets = {
  amount: 8447868,
  assets: [
    { amount: 0, "asset-id": 0, "is-frozen": false },
    { amount: 0, "asset-id": 31566704, "is-frozen": false },
    { amount: 0, "asset-id": 152246690, "is-frozen": false },
    { amount: 400000000, "asset-id": 226701642, "is-frozen": false },
    { amount: 0, "asset-id": 227358511, "is-frozen": false },
    { amount: 0, "asset-id": 268072134, "is-frozen": false },
    { amount: 0, "asset-id": 295134823, "is-frozen": false },
    { amount: 0, "asset-id": 297995609, "is-frozen": false },
    { amount: 0, "asset-id": 329110405, "is-frozen": false },
    { amount: 0, "asset-id": 330109984, "is-frozen": false },
    { amount: 0, "asset-id": 330279569, "is-frozen": false },
    { amount: 0, "asset-id": 358467807, "is-frozen": false },
    { amount: 0, "asset-id": 360407537, "is-frozen": false },
    { amount: 0, "asset-id": 361339277, "is-frozen": false },
    { amount: 0, "asset-id": 361770471, "is-frozen": false },
    { amount: 50000, "asset-id": 361806984, "is-frozen": false },
    { amount: 0, "asset-id": 361933739, "is-frozen": false },
    { amount: 0, "asset-id": 362976679, "is-frozen": false },
    { amount: 0, "asset-id": 363833896, "is-frozen": false },
    { amount: 0, "asset-id": 384184691, "is-frozen": false },
    { amount: 499881749, "asset-id": 392693339, "is-frozen": false },
    { amount: 0, "asset-id": 412677778, "is-frozen": false },
    { amount: 0, "asset-id": 435727273, "is-frozen": false }
  ],
  nfts: [],
  minimumBalance: 4140000
};

export interface Asset {
  logo: {
    svg: string;
  };
  id: string;
  decimals: number;
  name: string;
  unit_name: string;
  url: string;
  amount: number;
}

interface OwnedAsset {
  amount: number;
  "asset-id": number;
  "is-frozen": boolean;
}
export interface NFT {
  amount: number;
  "asset-id": number;
  "is-frozen": boolean;
}

export const computeAssets = async () => {
  try {
    const assetsList: Record<string, Asset> | any = await assets.GET_ALL_ASSETS();
    if (!assetsList) {
      return;
    }
    const assetsArray = Object.values(assetsList);
    const matchingAssets: Asset[] = ownedAssets.assets
      .map((ownedAsset: OwnedAsset) => {
        const matchingAsset = assetsArray.find(
          (asset: any) => asset.id === ownedAsset["asset-id"]?.toString()
        );
        if (!matchingAsset) {
          return null;
        }

        return { ...matchingAsset, amount: ownedAsset.amount };
      })
      .filter(asset => asset !== null) as Asset[];

    const matchingNFTs: NFT[] = ownedAssets.nfts
      .map((ownedNFT: NFT) => {
        const matchingNFT = assetsArray.find(
          (asset: any) => asset.id === ownedNFT["asset-id"]?.toString()
        );
        if (!matchingNFT) {
          return null;
        }
        return { ...matchingNFT, amount: ownedNFT.amount };
      })
      .filter(nft => nft !== null) as NFT[];

    return {
      assets: matchingAssets,
      nfts: matchingNFTs
    };
  } catch (error) {
    console.error("Error fetching or processing assets:", error);
  }
};
