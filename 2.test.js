let Koa = require('./koa/application');
let app = new Koa();
app.use((ctx)=>{
    console.log(ctx.req.url);
})
app.listen('3002')