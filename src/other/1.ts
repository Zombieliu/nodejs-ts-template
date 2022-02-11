// import Web3 from "web3";
//
// const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
//
// // console.log(web3);
//
// const main = async () => {
//   const result = await web3.eth.getBlock(0);
//
//   // console.log(result);
//   //
//   // const abi = web3.eth.abi.encodeFunctionSignature('myMethod(uint256,string)');
//   // console.log(abi);
//   //
//   // const a = web3.eth.abi.encodeParameters(['uint256','string'], ['2345675643', 'Hello!%']);
//   // console.log(a);
//   // web3.eth.signTransaction({
//   //   from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
//   //   gasPrice: '20000000000',
//   //   gas: '21000',
//   //   to: '0x3535353535353535353535353535353535353535',
//   //   value: '1000000000000000000',
//   //   data: '',
//   // }).then(console.log);
//
//   const ECRECOVER_PRECOMPILE_ADDRESS = '0000000000000000000000000000000000000001';
//   // Signing a message using the standard Ethereum/web3js toolchain
//   const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P. Eaedem res maneant alio modo.';
//   const messageHex = '0x' + Buffer.from(message).toString('hex');
//   const sig = (await web3.eth.sign(messageHex, account)).slice(2);
//   // Parse v,r,s from signature
//   const r = `${sig.slice(0, 64)}`;
//   const s = `${sig.slice(64, 128)}`;
//   const v = `${sig.slice(128, 130)}`;
//   // Pad v with 31 bytes of zeroes and append to r,s values
//   const sigPart = `${Buffer.alloc(31).toString('hex')}${v}${r}${s}`;
//   // Hash the message for first 32 bytes of input
//   const hash = web3.utils.sha3('\\x19Ethereum Signed Message:\\n' + message.length + message).slice(2);
//   // Send a transaction to the precompile address with the proper input
//   // formatted to ensure the specific ECRecover exec can process it correctly.
//   const tx = await web3.eth.sendTransaction({
//     from: account,
//     to: ECRECOVER_PRECOMPILE_ADDRESS,
//     value: '0x0',
//     gas: '0x10000000',
//     data: `0x${hash.toString('hex')}${sigPart}`,
//   });
//
// };
//
// main();