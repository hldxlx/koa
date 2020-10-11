let Koa = require('./koa/application');
let app = new Koa();
app.use((req,res)=>{
    res.end(`cc`)
})
app.listen('3002')