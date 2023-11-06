import algosdk from "algosdk";

//generates new algorand Account
let account = algosdk.generateAccount();
console.log("Account: ", account);

// gets the private keypair uint8 array
const privateKey = account.sk;

//converts it to a string
const privateKeyString = Buffer.from(privateKey).toString("hex");
console.log("String Private Key:", privateKeyString);

//converts it back to uint8 array
const privateKeyBuffer = Buffer.from(privateKeyString, "hex");
const privateKeyUint8Array = new Uint8Array(privateKeyBuffer);
console.log("Uint8Array Private Key:", privateKeyUint8Array);

//gets the public key from the account keypair
const publickey = privateKeyUint8Array.slice(32, 64);
const publicKeyString = algosdk.encodeAddress([
  28, 155, 116, 218, 251, 91, 25, 27, 66, 108, 246, 165, 84, 226, 118, 70, 215, 156, 249, 114, 169,
  33, 196, 80, 68, 104, 200, 118, 85, 244, 205, 251
]);
console.log("String Public Key:", publicKeyString);
