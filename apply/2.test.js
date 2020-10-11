// Koa是一个类
// let Koa = require('koa');
let app = new Koa();// app可以实现常用的方法 listen use方法
// 获取请求的路径 req.url
app.use((ctx)=>{
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);//ctx.request是koa自己封装的属性
    console.log(ctx.request.url);
    console.log(ctx.url);// 用ctx来代理一下ctx.request属性
    ctx.body = 'kk'
})
app.listen(3001)