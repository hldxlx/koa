// Koa是一个类
let Koa = require('koa');// app可以实现常用的方法 listen use方法
let app = new Koa();
app.use((ctx,next)=>{
    ctx.body = 'hello yibin'
})
app.listen(3001)