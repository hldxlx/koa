let Koa = require('./koa/application');
let app = new Koa();
app.use((ctx)=>{
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);
    console.log(ctx.request.url);
    console.log(ctx.url);

    console.log(ctx.req.path);
    console.log(ctx.request.req.path);
    console.log(ctx.request.path);
    console.log(ctx.path);
})
app.listen('3002')