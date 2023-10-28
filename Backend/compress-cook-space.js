import zlib from 'zlib'
import Pako from 'pako';
const input = '27ad435f59c19e3d0dec5de5474151db1e4f1f49fbc18591a92db6c3ec81c7010db20c179f5a02a8048fec463c0aaf312e90c43cf4110de93242fa8d0dae107f';
const compressedData = zlib.gzipSync(input);


const decompressedData = zlib.gunzipSync(compressedData).toString();

