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
import { Nome } from "./Nome";
import { Tipo } from "./Tipo";
import { Documento } from "./Documento";
import { Texto } from "./Texto";
import { Pessoa } from "./Pessoa";
var _categoriaNome = /*#__PURE__*/ new WeakMap(), _categoriaNúmero = /*#__PURE__*/ new WeakMap(), _categoriaTipo = /*#__PURE__*/ new WeakMap(), _categoriaTexto = /*#__PURE__*/ new WeakMap(), _categoriaDocumento = /*#__PURE__*/ new WeakMap(), _categoriaPessoa = /*#__PURE__*/ new WeakMap();
export var Falseador = /*#__PURE__*/ function() {
    "use strict";
    function Falseador() {
        _class_call_check(this, Falseador);
        _class_private_field_init(this, _categoriaNome, {
            writable: true,
            value: new Nome()
        });
        _class_private_field_init(this, _categoriaNúmero, {
            writable: true,
            value: new Número()
        });
        _class_private_field_init(this, _categoriaTipo, {
            writable: true,
            value: new Tipo()
        });
        _class_private_field_init(this, _categoriaTexto, {
            writable: true,
            value: new Texto()
        });
        _class_private_field_init(this, _categoriaDocumento, {
            writable: true,
            value: new Documento()
        });
        _class_private_field_init(this, _categoriaPessoa, {
            writable: true,
            value: new Pessoa()
        });
    }
    _create_class(Falseador, [
        {
            key: "nome",
            get: function get() {
                return _class_private_field_get(this, _categoriaNome);
            }
        },
        {
            key: "n\xfamero",
            get: function get() {
                return _class_private_field_get(this, _categoriaNúmero);
            }
        },
        {
            key: "tipo",
            get: function get() {
                return _class_private_field_get(this, _categoriaTipo);
            }
        },
        {
            key: "texto",
            get: function get() {
                return _class_private_field_get(this, _categoriaTexto);
            }
        },
        {
            key: "doc",
            get: function get() {
                return _class_private_field_get(this, _categoriaDocumento);
            }
        },
        {
            key: "pessoa",
            get: function get() {
                return _class_private_field_get(this, _categoriaPessoa);
            }
        }
    ]);
    return Falseador;
}();
