import algosdk from "algosdk";




//generates new algorand Account
let account = algosdk.generateAccount();
console.log("Account: ", account)

// gets the private keypair uint8 array
const privateKey = account.sk;


//converts it to a string
const privateKeyString = Buffer.from(privateKey).toString('hex');
console.log('String Private Key:', privateKeyString);



//converts it back to uint8 array
const privateKeyBuffer = Buffer.from(privateKeyString, 'hex');
const privateKeyUint8Array = new Uint8Array(privateKeyBuffer);
console.log('Uint8Array Private Key:', privateKeyUint8Array);



