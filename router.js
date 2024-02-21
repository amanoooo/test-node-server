const Router = require('@koa/router');
const { nmr } = require("./nmr_service")
const router = new Router({
    prefix: '/nmr'
});




router.get('/', async (ctx, next) => {
    // ctx.router available
    const r = await nmr.list()
    ctx.body = r
});

router.post('/', async (ctx, next) => {
    // ctx.router available
    const r = await nmr.insert(ctx.query)
    ctx.body = r
});


router.delete('/', async (ctx, next) => {
    // ctx.router available
    ctx.body = "test delete"
});

exports.router = router