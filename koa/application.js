let http = require('http');
class koa {
    constructor(){
        this.callbackFn;
    }
    use(cb){
        this.callbackFn = cb;
    }
    handleRequest(req,res){
        this.callbackFn(req,res)
    }
    listen(){
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(...arguments)
    }
}
module.exports = koa;