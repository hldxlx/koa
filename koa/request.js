let url = require('url')
let request = {
    get url(){
        return this.req.url
    },
    get path(){
        return url.parse(this.req.url).pathname
    }
};
// 等同于
// Object.defineProperty(obj,'url',{
//     get(){
//
//     }
// })
module.exports = request;