let proto = {
};
// proto.url = proto.request.url
function definedGetter(property,name) {
    // 自定义获取器 代理
    proto.__defineGetter__(name,function () {
        return this[property][name]
    })
}
function definedSetter(property,name) {
    proto.__defineSetter__(name,function (value) {
         this[property][name] = value
    })
}
definedGetter('request','url')
definedGetter('request','path')
definedGetter('response','body');
definedSetter('response','body');
module.exports = proto;