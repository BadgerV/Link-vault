// Define a class for a Huffman tree node
class HuffmanNode {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}
// Function to build the Huffman tree
function buildHuffmanTree(freqMap) {
  // Convert character frequencies into an array of Huffman nodes
  const heap = Object.keys(freqMap).map(char => new HuffmanNode(char, freqMap[char]));

  // Continue combining nodes until only one remains (the root of the tree)
  while (heap.length > 1) {
    heap.sort((a, b) => a.freq - b.freq);
    const lo = heap.shift();
    const hi = heap.shift();
    const mergedNode = new HuffmanNode(null, lo.freq + hi.freq);
    mergedNode.left = lo;
    mergedNode.right = hi;
    heap.push(mergedNode);
  }
  return heap[0];
}

// Function to build Huffman codes (map characters to their codes)
function buildHuffmanCodes(node, prefix = "", codeMap = {}) {
  if (node.char) {
    codeMap[node.char] = prefix;
  }
  if (node.left) {
    buildHuffmanCodes(node.left, prefix + "0", codeMap);
  }
  if (node.right) {
    buildHuffmanCodes(node.right, prefix + "1", codeMap);
  }
  return codeMap;
}

// Function to encode text using Huffman codes
function encode(text, codeMap) {
  return Array.from(text)
    .map(char => codeMap[char])
    .join("");
}

// Function to decode encoded text using Huffman codes
function decode(encodedText, codeMap) {
  let decodedText = "";
  let currentCode = "";
  for (const bit of encodedText) {
    currentCode += bit;
    for (const char in codeMap) {
      if (codeMap[char] === currentCode) {
        decodedText += char;
        currentCode = "";
        break;
      }
    }
  }
  return decodedText;
}
// Function to encode binary data to a shorter string using Base64
function binaryToShortString(binaryData) {
  const binaryString = binaryData.join("");

  const bytes = [];
  for (let i = 0; i < binaryString.length; i += 8) {
    bytes.push(parseInt(binaryString.substr(i, 8), 2));
  }
  const encodedData = new Uint8Array(bytes);
  const encodedString = btoa(String.fromCharCode.apply(null, encodedData));
  return encodedString;
}
// Function to decode a shorter string back to binary data
function shortStringToBinary(shortString) {
  const decodedData = atob(shortString);
  const decodedArray = new Uint8Array(decodedData.length);
  for (let i = 0; i < decodedData.length; i++) {
    decodedArray[i] = decodedData.charCodeAt(i);
  }
  const binaryData = [];
  for (const byte of decodedArray) {
    const binaryChar = byte.toString(2).padStart(8, "0");
    binaryData.push(...binaryChar.split(""));
  }
  return binaryData.map(Number);
}

function linkVault(text, action) {
  // Calculate character frequencies in the text
  const frequencyMap = text.split("").reduce((freqMap, char) => {
    freqMap[char] = (freqMap[char] || 0) + 1;
    return freqMap;
  }, {});
  console.log(frequencyMap);

  // Build the Huffman tree
  const root = buildHuffmanTree(frequencyMap);
  // Generate Huffman codes for characters
  const huffmanCodes = buildHuffmanCodes(root);

  if (action == "encrypt") {
    // Encode the text using Huffman codes
    const encodedText = encode(text, huffmanCodes);
    const binaryData = [...encodedText].map(Number);
    console.log("binary Data", binaryData);
    // Encode binary data into a shorter string using Base64
    const shorterString = binaryToShortString(binaryData);
    console.log("encoded text", encodedText);

    console.log("Shorter String:", shorterString);
    return shorterString;
  } else if (action == "decrypt") {
    //Decode the shorter string back to binary data
    const decodedBinaryArray = shortStringToBinary(text);

    const decodedBinaryData = decodedBinaryArray.join("");
    console.log(decodedBinaryArray);
    console.log(decodedBinaryData);

    //      // Decode the encoded text
    // const decodedText = decode(decodedBinaryData, huffmanCodes);
    // console.log(decodedText)

    //console.log("Decoded Binary Data:", decodedBinaryData);
    // console.log("Huffman Codes:", huffmanCodes);
    // console.log("Encoded Text (Custom Encoding):", encodedText);
  }
}

linkVault("8d1037168b20109b6d0c65352125e405d9c790aca56b8dc9482904f24e03aa55", "encrypt");
// linkVault('mmXxtEhqZcEUrg/Otp86NdY+WXhgJq+ed5OLX8v5hAE=','decrypt')
