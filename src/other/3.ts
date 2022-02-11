import { ethers } from 'ethers';
import { BN, nToHex } from '@polkadot/util';

const url = 'http://127.0.0.1:9933';
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
// console.log(customHttpProvider);




function stringtobytes(string:string){
  const hex = ethers.utils.toUtf8Bytes(string);
  return ethers.utils.hexlify(hex);
}

function bytestostring(string:string){
  return ethers.utils.toUtf8String(string);
}

const main = async () => {
  // console.log(bytestostring('0x333030303030303030303030303030303030'));
  const price = new BN('1000000000000000000');

  console.log(nToHex(price));
  // console.log(stringtobytes('10000000'));
  // console.log(ethers.utils.hexlify(30000000));
  // console.log(ethers.utils.hexwxValue(21000000000000000));
};

main();
