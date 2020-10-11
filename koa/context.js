let proto = {
};
function definedGetter(property,name) {
    proto.__defineGetter__(name,function () {
        return this[property][name]
    })
}
definedGetter('request','url')
definedGetter('request','path')
module.exports = proto;