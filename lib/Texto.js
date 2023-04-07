function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { Número } from "./N\xfamero";
var _número = /*#__PURE__*/ new WeakMap();
export var Texto = /*#__PURE__*/ function() {
    "use strict";
    function Texto() {
        _class_call_check(this, Texto);
        _class_private_field_init(this, _número, {
            writable: true,
            value: new Número()
        });
    }
    _create_class(Texto, [
        {
            key: "letra",
            value: function letra() {
                var código = _class_private_field_get(this, _número).exclusivoEntreZeroE(26) + 65;
                return String.fromCharCode(código);
            }
        },
        {
            key: "letraAcentuada",
            value: function letraAcentuada() {
                var letras = [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "M",
                    "N",
                    "O",
                    "P",
                    "Q",
                    "R",
                    "S",
                    "T",
                    "U",
                    "V",
                    "W",
                    "X",
                    "Y",
                    "Z",
                    "\xc0",
                    "\xc1",
                    "\xc2",
                    "\xc3",
                    "\xc7",
                    "\xc9",
                    "\xca",
                    "\xcd",
                    "\xd3",
                    "\xd4",
                    "\xd5",
                    "\xda"
                ];
                var índice = _class_private_field_get(this, _número).exclusivoEntreZeroE(letras.length);
                return letras[índice];
            }
        },
        {
            key: "removeAcentos",
            value: function removeAcentos(palavra) {
                if (typeof palavra !== "string") throw new Error("palavra deve ser string.");
                var letrasAcentuadas = {
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ç: "C",
                    É: "E",
                    Ê: "E",
                    Í: "I",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ú: "U",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ç: "c",
                    é: "e",
                    ê: "e",
                    í: "i",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ú: "u"
                };
                var palavraSemAcentuação = _to_consumable_array(palavra).map(function(letra) {
                    var _letrasAcentuadas_letra;
                    return (_letrasAcentuadas_letra = letrasAcentuadas[letra]) !== null && _letrasAcentuadas_letra !== void 0 ? _letrasAcentuadas_letra : letra;
                }).join("");
                return palavraSemAcentuação;
            }
        }
    ]);
    return Texto;
}();
