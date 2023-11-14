import algosdk from 'algosdk';
import { getVault } from 'link-vault';

// constants
const ALGODTOKEN = ""; //API token
const PORT = 443;
const ALGODSERVER = "https://mainnet-api.algonode.cloud/";


export const algodClient = new algosdk.Algodv2(ALGODTOKEN, ALGODSERVER, PORT);

export const sendTransaction = async (amount, address, linkVaultAddress, signerWalletType) => {
    const suggestedParams = await algodClient.getTransactionParams().do();

    console.log(linkVaultAddress)
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: address,
        to: linkVaultAddress,
        amount: Number(amount * 1000000),
        note: new Uint8Array(Buffer.from("Link vault created with asset")),
        suggestedParams: suggestedParams
    });

    const optInTxn = [{ txn: txn, signers: [address] }]
    const signedTxn = await signerWalletType.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do()
    console.log(success)
    return success?.txId;
}

// export const optInASA = async (address, assetId, linkVaultAddress,  signerWalletType) => {
//     const suggestedParams = await algodClient.getTransactionParams().do();
//     const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
//         from: address,
//         to: linkVaultAddress,
//         amount: 0,
//         assetIndex: assetId,
//         suggestedParams: suggestedParams
//     });
//     const optInTxn = [{txn: txn, signers : [address]}]
//     const signedTxn = await signerWalletType.signTransaction([optInTxn])
//     const success = await algodClient.sendRawTransaction(signedTxn).do()
//     console.log(success)
//     return success?.txId;
// }

const resolveVault = async (vault) => {
    const sk = await vault.keypair.privateKey;
    const pk = await vault.keypair.publicKey;
    const vaultSK = new Uint8Array([...sk, ...pk]);
    return vaultSK;
}

export const sendAmountToASA = async (amount, address, selectedAsset, linkVault, signerWalletType) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const algoTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: address,
        to: linkVault.address,
        amount: Number(1.1 * 1000000),
        note: new Uint8Array(Buffer.from("Link vault created with asset")),
        suggestedParams: suggestedParams
    });
    console.log(linkVault.address, selectedAsset.id, Number(amount) * 10 ** selectedAsset.decimals, selectedAsset)
    const algoOptInTxn = [{ txn: algoTxn, signers: [address] }]
    const algoSignedTxn = await signerWalletType.signTransaction([algoOptInTxn])
    const algoTxId = await algodClient.sendRawTransaction(algoSignedTxn).do()

    if (algoTxId) {
        
        const vault = await getVault(linkVault.vault);
        console.log(vault, 'vault');
        if (vault) {
            await resolveVault(vault).then(async (vaultSK) => {
                console.log(vaultSK, 'vaultSK')
                const assetTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                    from: linkVault.address,
                    to: linkVault.address,
                    amount: 0 * 10 ** selectedAsset.decimals,
                    assetIndex: Number(selectedAsset.id),
                    suggestedParams: suggestedParams
                });
              
                const assetSignedTxn = algosdk.signTransaction(assetTxn, vaultSK)
                const assetTxId = await algodClient.sendRawTransaction(assetSignedTxn.blob).do()
                console.log(assetTxId, 'assetTxId')
                return assetTxId;
            })
            .then(async (assetTxId) => {
                if (assetTxId) {
                    const asaTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                        from: address,
                        to: linkVault.address,
                        amount: Number(amount) * 10 ** selectedAsset.decimals,
                        assetIndex: Number(selectedAsset.id),
                        suggestedParams: suggestedParams
                    });
                    const asaOptInTxn = [{ txn: asaTxn, signers: [address] }]
                    const asaSignedTxn = await signerWalletType.signTransaction([asaOptInTxn])
                    const asaTxId = await algodClient.sendRawTransaction(asaSignedTxn).do()
                    return asaTxId;
                }
            })
        }
        else {
            alert('Vault not found');
        }
    }
}

