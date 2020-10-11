let proto = {
};
function definedGetter(property,name) {
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