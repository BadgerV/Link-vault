// importing relevant modules
import { Response, Request } from "express";
import Flutterwave from "flutterwave-node-v3";

import { defaultConfig } from "../config/config";
<<<<<<< HEAD
import { getVault } from "link-vault";
=======
import { getWallet } from "link-vault";
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
import algosdk from "algosdk";

const algodToken = "";
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);
const url = "https://min-api.cryptocompare.com/data/price?fsym=USDC&tsyms=NGN";
const headers = new Headers({
  "Content-Type": "application/json",
<<<<<<< HEAD
  "Authorization": `Apikey ${defaultConfig.CC_API_KEY}` // Add any other headers as needed
=======
  Authorization: `Apikey ${defaultConfig.CC_API_KEY}` // Add any other headers as needed
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
});

const flw = new Flutterwave(defaultConfig.FLW_PUBLIC_KEY, defaultConfig.FLW_SECRET_KEY);

<<<<<<< HEAD
const USDCNGNRate=async ()=>{
  // Fetch USDC rate
  const result= await fetch(url, {
    method: "GET", 
    headers: headers
  });
 
  const data=await result.json();

  return data.NGN;

=======
const USDCNGNRate = async () => {
  // Fetch USDC rate
  const result = await fetch(url, {
    method: "GET",
    headers: headers
  });

  const data = await result.json();

  return data.NGN;
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
};

// Powered By Crypto Compare
export const getRate = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const currentRate=await USDCNGNRate();
=======
  const currentRate = await USDCNGNRate();
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472

  //response
  res.status(200).json({
    rate: currentRate
  });
};

// Initialize a Bill payment transaction.
export const initializeBillPayment = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const linkvaulturl=req.body.linkvaulturl;
  const amount=req.body.amount;
  const rate=await USDCNGNRate();
  const amountUSD=amount/rate;
    
  try {
    const params = await algodClient.getTransactionParams().do();
    const vault:any =await getVault(linkvaulturl);
=======
  const linkvaulturl = req.body.linkvaulturl;
  const amount = req.body.amount;
  const rate = await USDCNGNRate();
  const amountUSD = amount / rate;

  try {
    const params = await algodClient.getTransactionParams().do();
    const vault: any = await getWallet(linkvaulturl);
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472

    const txnParams = {
      from: vault.address,
      to: defaultConfig.MERCHANT_ADDRESS,
      assetIndex: 31566704, // USDC ASSET ID
<<<<<<< HEAD
      amount: amountUSD * (10 ** 6), // 1 for NFT
=======
      amount: amountUSD * 10 ** 6, // 1 for NFT
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
      fee: 1000, // Transaction fee (microAlgos)
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      genesisID: params.genesisID,
      genesisHash: params.genesisHash,
      suggestedParams: params
    };

    const vaultSK = new Uint8Array(vault.privateKey.length + vault.publicKey.length);
    vaultSK.set(vault.privateKey, 0);
    vaultSK.set(vault.publicKey, vault.privateKey.length);

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject(txnParams);
<<<<<<< HEAD
    const signedTxn:any = algosdk.signTransaction(txn, vaultSK);
          
    const { txId } =await algodClient.sendRawTransaction(signedTxn).do();
=======
    const signedTxn: any = algosdk.signTransaction(txn, vaultSK);

    const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
    const result = await algosdk.waitForConfirmation(algodClient, txId, 4);
    console.log(result);
    console.log(`Transaction Information: ${result.txn}`);

<<<<<<< HEAD
    req.body.reference=txId;
    const payload=req.body;

    try{
      const response = await flw.Bills.create_bill(payload);
      res.status(200).json({
        message: "Transaction Initialized.",  
        data: response
      });
    }
    catch(error){
      res.status(500).json({
        error: {
          message:"Couldn't initialize Bill Payment, Please Contact Support"
        }
      });
    }
         
  }
  catch (error) {
    res.status(500).json({
      error: {
        message:"Couldn't initialize transaction from Linkvault."
      }
    });
  }
}; 

//Get Bank List
export const getBanks = async (req: Request, res: Response) => {
  try {
    const payload={"country":"NG"};
    
    const response = await flw.Bank.country(payload);
    res.status(200).json({
      data: response
    });
         
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:{
        message:"Error Fetching Banks"
      }
    });
  }
};

//Resolve Customers Account

export const resolveAccount = async (req: Request, res: Response) => {
  try {
    const payload=req.body;
      
    const response = await flw.Misc.verify_Account(payload);
    res.status(200).json({
      data: response
    });
           
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:{
        message:"Couldnt Resolve User"
=======
    req.body.reference = txId;
    const payload = req.body;

    try {
      const response = await flw.Bills.create_bill(payload);
      res.status(200).json({
        message: "Transaction Initialized.",
        data: response
      });
    } catch (error) {
      res.status(500).json({
        error: {
          message: "Couldn't initialize Bill Payment, Please Contact Support"
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      error: {
        message: "Couldn't initialize transaction from Linkvault."
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
      }
    });
  }
};

// Initialize a Bill payment transaction.
export const initializePayment = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const linkvaulturl=req.body.linkvaulturl;
  const amount=req.body.amount;
  const rate=await USDCNGNRate();
  const amountUSD=amount/rate;
    
  try {
    const params = await algodClient.getTransactionParams().do();
    const vault:any =await getVault(linkvaulturl);
=======
  const linkvaulturl = req.body.linkvaulturl;
  const amount = req.body.amount;
  const rate = await USDCNGNRate();
  const amountUSD = amount / rate;

  try {
    const params = await algodClient.getTransactionParams().do();
    const vault: any = await getWallet(linkvaulturl);
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472

    const txnParams = {
      from: vault.address,
      to: defaultConfig.MERCHANT_ADDRESS,
      assetIndex: 31566704, // USDC ASSET ID
<<<<<<< HEAD
      amount: amountUSD * (10 ** 6), // 1 for NFT
=======
      amount: amountUSD * 10 ** 6, // 1 for NFT
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
      fee: 1000, // Transaction fee (microAlgos)
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      genesisID: params.genesisID,
      genesisHash: params.genesisHash,
      suggestedParams: params
    };

    const vaultSK = new Uint8Array(vault.privateKey.length + vault.publicKey.length);
    vaultSK.set(vault.privateKey, 0);
    vaultSK.set(vault.publicKey, vault.privateKey.length);

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject(txnParams);
<<<<<<< HEAD
    const signedTxn:any = algosdk.signTransaction(txn, vaultSK);
          
    const { txId } =await algodClient.sendRawTransaction(signedTxn).do();
=======
    const signedTxn: any = algosdk.signTransaction(txn, vaultSK);

    const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
    const result = await algosdk.waitForConfirmation(algodClient, txId, 4);
    console.log(result);
    console.log(`Transaction Information: ${result.txn}`);

<<<<<<< HEAD
    req.body.reference=txId;
    req.body.callback_url= "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d";

    const payload=req.body;
    try{
      const response = await flw.Transfer.initiate(payload);
      res.status(200).json({
        message: "Transaction Initialized.",  
        data: response
      });
    }
    catch(error){
      res.status(500).json({
        error: {
          message:"Couldn't initialize Remit Payment, Please Contact Support"
        }
      });
    }
         
  }
  catch (error) {
    res.status(500).json({
      error: {
        message:"Couldn't initialize transaction from Linkvault."
      }
    });
  }
}; 











    



=======
    req.body.reference = txId;
    req.body.callback_url = "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d";

    const payload = req.body;
    try {
      const response = await flw.Transfer.initiate(payload);
      res.status(200).json({
        message: "Transaction Initialized.",
        data: response
      });
    } catch (error) {
      res.status(500).json({
        error: {
          message: "Couldn't initialize Remit Payment, Please Contact Support"
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      error: {
        message: "Couldn't initialize transaction from Linkvault."
      }
    });
  }
};
>>>>>>> a13d179c441fab8b1ecb7e06056aabb4854a5472
