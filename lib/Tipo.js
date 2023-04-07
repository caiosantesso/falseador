function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
import { Número } from "./N\xfamero";
var _número = /*#__PURE__*/ new WeakMap();
export var Tipo = /*#__PURE__*/ function() {
    "use strict";
    function Tipo() {
        _class_call_check(this, Tipo);
        _class_private_field_init(this, _número, {
            writable: true,
            value: new Número()
        });
    }
    _create_class(Tipo, [
        {
            key: "booleano",
            value: function booleano() {
                return Math.random() < 0.5;
            }
        },
        {
            key: "entre",
            value: function entre(valores) {
                var possibilidades = valores.length;
                if (possibilidades <= 1) throw Error("Lista deve ter ao menos 2 itens.");
                return valores[_class_private_field_get(this, _número).exclusivoEntreZeroE(possibilidades)];
            }
        }
    ]);
    return Tipo;
}();
