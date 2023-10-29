import algosdk from 'algosdk'
import { ed25519 } from '@noble/curves/ed25519';
import B58 from './base58';
import { Request, Response } from 'express';

const b58 =new B58()
const vaultUrl='https://linkvault.app/?#'


const getPublicKey=(priv: Uint8Array):Uint8Array=>{
const privateKeyString = Buffer.from(priv).toString('hex');
const pub = ed25519.getPublicKey(privateKeyString);
return pub;
}

const createVault=async (req: Request, res:Response)=>{
  try{
      //generates new algorand Account
      let account = algosdk.generateAccount();
      // gets the private keypair uint8 array
      const keypair = account.sk;
      //get the private key from the wallet keypair
      const privateKey=keypair.slice(0,32);


      //converts it to a string
      const privateKeyString = Buffer.from(privateKey).toString('hex');
      const vaultKey=b58.encodeBase58(privateKeyString)
      const linkvault=`${vaultUrl}${vaultKey}`
  
      //encode to base58
      const vault={
          address:account.addr,
          vault: linkvault,

      }
      res.status(200).json({
        data:vault
      })
  }
  catch(error){
    res.status(500).json({
        error:'An error Occured'
    })
  }
}

const getWallet=async (req:Request, res:Response)=>{
  try{
    const vault=req.params.vault.replace(vaultUrl,'');

    //decode from Base58
    const hex=b58.decodeBase58(vault);
    const hexBuffer = Buffer.from(hex, "hex");
    const privateKey=new Uint8Array(hexBuffer);
    const publicKey=getPublicKey(privateKey);
    const address=algosdk.encodeAddress(publicKey)
    // const keypair = new Uint8Array([...privateKey, ...publicKey]);
    const linkvault=`${vaultUrl}${vault}`;

    

    const wallet={
        address, 
        linkvault,
        keypair:{ privateKey, publicKey },
       

    }
    res.status(200).json({
      data:wallet
    })
  }
  catch(err){
    res.status(404).json({
      error:'Vault could not be resolved'
  })
  }
}

export {getWallet, createVault}















