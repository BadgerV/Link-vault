import base32 from 'base32-encode'

// Encode a string to Base32
const textToEncode = Buffer.from([
    30, 236, 232, 163, 206, 145, 207,
    50, 221, 167, 234, 226, 147,  61,
   220, 179, 212,  19, 168,   2, 248,
   200,  95, 124,  75, 139, 172,  99,
   135, 141, 110,  47
 ]);
const encodedText = base32(textToEncode,'Crockford');


console.log('Encoded Text:', encodedText);

// Decode a Base32 string
const decodedText = base32(encodedText, 'Crockford', 'utf8');

console.log('Decoded Text:', decodedText);