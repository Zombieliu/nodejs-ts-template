import Koa from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();

router.get('/', async ctx => {
  ctx.body = 'Index';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
