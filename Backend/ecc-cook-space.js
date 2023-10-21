// import * from '@noble/curves'; // Error: use sub-imports, to ensure small app size
import { secp256k1 } from '@noble/curves/secp256k1'; // ESM and Common.js
// import { secp256k1 } from 'npm:@noble/curves@1.2.0/secp256k1'; // Deno

function uint8ArrayToBase64(array) {
    const binaryString = String.fromCharCode.apply(null, array);
    return btoa(binaryString);
  }
  
const priv = secp256k1.utils.randomPrivateKey();
console.log(`Private Key : ${priv}`);

const pub = secp256k1.getPublicKey(priv);
console.log(`Pub Key : ${pub}`);

const msg = new Uint8Array(32).fill(1); // message hash (not message) in ecdsa
console.log(`Msg : ${msg}`);
const sig = secp256k1.sign(msg, priv); // `{prehash: true}` option is available
console.log(`Signature : ${sig}`);
const isValid = secp256k1.verify(sig, msg, pub) === true;

// hex strings are also supported besides Uint8Arrays:
const privHex = '46c930bc7bb4db7f55da20798697421b98c4175a52c630294d75a84b9c126236';
const pub2 = secp256k1.getPublicKey(privHex);
console.log(`Pub2 : ${pub2}`);
