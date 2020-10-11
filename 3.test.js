function app() {

}
app.middleware = []
app.use = function (callback) {
    app.middleware.push(callback)
}
app.use((ctx,next)=>{
    console.log(1);
    next();
    console.log(2);
});
app.use((ctx,next)=>{
    console.log(3);
    next();
    console.log(4);
});
app.use((ctx,next)=>{
    console.log(5);
    next();
    console.log(6);
});
function dispatch(index) {
    if(index === app.middleware.length) return
    let middleware = app.middleware[index]
    middleware({},()=>dispatch(index+1))
}
dispatch(0)