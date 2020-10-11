let Koa = require('koa');
let app = new Koa();
app.use((ctx,next)=>{
    ctx.body = 'hello yibin'
})
app.listen(3001)