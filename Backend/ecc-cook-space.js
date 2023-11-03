import { secp256k1 } from "@noble/curves/secp256k1";

function getLink() {
  const priv = secp256k1.utils.randomPrivateKey();
  console.log(priv);
  const privateKeyString = Buffer.from(priv).toString("hex");
  console.log(privateKeyString);

  const pub = secp256k1.getPublicKey(priv);
  console.log(pub);

  // const msg = new Uint8Array(32).fill(1); // message hash (not message) in ecdsa
  // console.log(`Msg : ${msg}`);
  // const sig = secp256k1.sign(msg, priv); // `{prehash: true}` option is available
  // console.log(`Signature : ${sig}`);
  // const isValid = secp256k1.verify(sig, msg, pub) === true;

  // hex strings are also supported besides Uint8Arrays:
  // const privHex = '46c930bc7bb4db7f55da20798697421b98c4175a52c630294d75a84b9c126236';
  // const pub2 = secp256k1.getPublicKey(privHex);
  // console.log(`Pub2 : ${pub2}`);
}
function decodeLink(vault) {}

getLink();
