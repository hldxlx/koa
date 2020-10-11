let http = require('http');
let context = require('./context')
let request = require('./request')
let response = require('./response')
class koa {
    constructor(){
        this.callbackFn;
        this.context = context;
        this.request = request;
        this.response = response;
    }
    use(cb){
        this.callbackFn = cb;
    }
    createContext(req,res){
        let ctx = Object.create(this.context);
        ctx.request = Object.create(this.request);
        ctx.req = ctx.request.req = req;
        ctx.response = Object.create(this.response);
        ctx.res = ctx.response.res = res;
        return ctx;

    }
    handleRequest(req,res){
        this.statusCode = 404
        let ctx = this.createContext(req,res);
        this.callbackFn(ctx)
        let body = ctx.body
        if(typeof body === 'undefined'){
            res.end(`Not Found`)
        }else if(typeof body === 'string'){
            res.end(body)
        }
    }
    listen(){
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(...arguments)
    }
}
module.exports = koa;