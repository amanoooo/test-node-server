const Router = require('@koa/router');
const router = new Router();


router.get('/test', (ctx, next) => {
    // ctx.router available
    ctx.body = "test success"
  });


  exports.router = router