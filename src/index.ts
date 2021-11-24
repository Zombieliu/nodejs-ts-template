import Koa from 'koa';
import KoaRouter from 'koa-router';

import * as nearAPI from 'near-api-js';
import PRIVATE_KEY from './constant';
import cors from '@koa/cors';

const { keyStores, KeyPair, connect } = nearAPI;
const keyStore = new keyStores.InMemoryKeyStore();
const keyPair = KeyPair.fromString(PRIVATE_KEY);
const config = {
  networkId: 'testnet',
  keyStore, // optional if not signing transactions
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
};


const app = new Koa();
const router = new KoaRouter();

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

router.get('/', async ctx => {
  await keyStore.setKey('testnet', 'zombie6.testnet', keyPair);
  const near = await connect(config);
  // console.log(keyStore);
  ctx.body = near;
});


router.post('/hello', async ctx => {
  await keyStore.setKey('testnet', 'zombie6.testnet', keyPair);
  const near = await connect(config);
  const account = await near.account('zombie6.testnet');
  // dev(near);
  const contract = new nearAPI.Contract(
    account, // the account object that is connecting
    'dev-1637745574876-62432390270619',
    {
      viewMethods: [],
      changeMethods: ['random'], // change methods modify state
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sender: account, // account object to initialize and sign transactions.
    },
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const result = await contract.random(
    {},
    300000000000000, // attached GAS (optional)
    // 1000000000000000000000000, // attached deposit in yoctoNEAR (optional)
  );
  ctx.body = result;
});


app.listen(9000);


