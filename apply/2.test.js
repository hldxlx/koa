let Koa = require('koa');
let app = new Koa();
app.use((ctx)=>{
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);
    console.log(ctx.request.url);
    console.log(ctx.url);
})
app.listen(3001)