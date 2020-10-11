let response = {
    set body(value){
        this.statusCode = 200//只要调用了ctx.body = 'XXX'就会成功
        this._body = value
    },
    get body(){
        return this._body
    }
}
;
module.exports = response;