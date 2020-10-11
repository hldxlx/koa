let response = {
    set body(value){
        this.statusCode = 200
        this._body = value
    },
    get body(){
        return this._body
    }
}
;
module.exports = response;