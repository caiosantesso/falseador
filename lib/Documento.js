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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
var _número = /*#__PURE__*/ new WeakMap(), _criaVetor = /*#__PURE__*/ new WeakSet(), _mod = /*#__PURE__*/ new WeakSet();
export var Documento = /*#__PURE__*/ function() {
    "use strict";
    function Documento() {
        _class_call_check(this, Documento);
        _class_private_method_init(this, _criaVetor);
        _class_private_method_init(this, _mod);
        _class_private_field_init(this, _número, {
            writable: true,
            value: new Número()
        });
    }
    _create_class(Documento, [
        {
            key: "cpf",
            value: function cpf() {
                var d = _class_private_method_get(this, _criaVetor, criaVetor).call(this, 9, 9);
                var penúltimo = d[8] * 2 + d[7] * 3 + d[6] * 4 + d[5] * 5 + d[4] * 6 + d[3] * 7 + d[2] * 8 + d[1] * 9 + d[0] * 10;
                d[9] = 11 - _class_private_method_get(this, _mod, mod).call(this, penúltimo, 11);
                if (d[9] >= 10) d[9] = 0;
                var último = d[9] * 2 + d[8] * 3 + d[7] * 4 + d[6] * 5 + d[5] * 6 + d[4] * 7 + d[3] * 8 + d[2] * 9 + d[1] * 10 + d[0] * 11;
                d[10] = 11 - _class_private_method_get(this, _mod, mod).call(this, último, 11);
                if (d[10] >= 10) d[10] = 0;
                return d.join("");
            }
        },
        {
            key: "cnpj",
            value: function cnpj() {
                var d = _class_private_method_get(this, _criaVetor, criaVetor).call(this, 8, 9);
                d[8] = 0;
                d[9] = 0;
                d[10] = 0;
                d[11] = 1;
                var penúltimo = d[11] * 2 + d[10] * 3 + d[9] * 4 + d[8] * 5 + d[7] * 6 + d[6] * 7 + d[5] * 8 + d[4] * 9 + d[3] * 2 + d[2] * 3 + d[1] * 4 + d[0] * 5;
                d[12] = 11 - _class_private_method_get(this, _mod, mod).call(this, penúltimo, 11);
                if (d[12] >= 10) d[12] = 0;
                var último = d[12] * 2 + d[11] * 3 + d[10] * 4 + d[9] * 5 + d[8] * 6 + d[7] * 7 + d[6] * 8 + d[5] * 9 + d[4] * 2 + d[3] * 3 + d[2] * 4 + d[1] * 5 + d[0] * 6;
                d[13] = 11 - _class_private_method_get(this, _mod, mod).call(this, último, 11);
                if (d[13] >= 10) d[13] = 0;
                return d.join("");
            }
        }
    ]);
    return Documento;
}();
function criaVetor(largura, dígitoLimite) {
    var _this = this;
    return Array.from(Array(largura), function() {
        return _class_private_field_get(_this, _número).entreZeroE(dígitoLimite);
    });
}
function mod(dividendo, divisor) {
    return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
}
