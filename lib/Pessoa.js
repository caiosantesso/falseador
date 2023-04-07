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
import { Nome } from "./Nome";
import { Número } from "./N\xfamero";
import { Texto } from "./Texto";
import { Tipo } from "./Tipo";
var _domínios = /*#__PURE__*/ new WeakMap(), _nome = /*#__PURE__*/ new WeakMap(), _tipo = /*#__PURE__*/ new WeakMap(), _texto = /*#__PURE__*/ new WeakMap(), _número = /*#__PURE__*/ new WeakMap(), _estratégiaLocal = /*#__PURE__*/ new WeakMap();
export var Pessoa = /*#__PURE__*/ function() {
    "use strict";
    function Pessoa() {
        _class_call_check(this, Pessoa);
        _class_private_field_init(this, _domínios, {
            writable: true,
            value: [
                "gmail.com",
                "outlook.com",
                "yahoo.com.br",
                "terra.com.br",
                "icloud.com",
                "hotmail.com",
                "uol.com.br",
                "bol.com.br"
            ]
        });
        _class_private_field_init(this, _nome, {
            writable: true,
            value: new Nome()
        });
        _class_private_field_init(this, _tipo, {
            writable: true,
            value: new Tipo()
        });
        _class_private_field_init(this, _texto, {
            writable: true,
            value: new Texto()
        });
        _class_private_field_init(this, _número, {
            writable: true,
            value: new Número()
        });
        _class_private_field_init(this, _estratégiaLocal, {
            writable: true,
            value: [
                this.iniciais,
                this.primeiroMaisIniciais,
                this.iniciaisMaisÚltimo,
                this.abreviado,
                this.primeiroEÚltimo
            ]
        });
    }
    _create_class(Pessoa, [
        {
            key: "iniciais",
            value: function iniciais(nomeCompleto) {
                return _class_private_field_get(this, _nome).abreviado(nomeCompleto).split(" ").map(function(nome) {
                    return nome[0];
                }).join("");
            }
        },
        {
            key: "primeiroMaisIniciais",
            value: function primeiroMaisIniciais(nomeCompleto) {
                return _class_private_field_get(this, _nome).abreviado(nomeCompleto).split(" ").map(function(nome, índice, nomes) {
                    return índice + 1 === nomes.length ? " ".concat(nome) : nome[0];
                }).join("");
            }
        },
        {
            key: "iniciaisMais\xdaltimo",
            value: function iniciaisMaisÚltimo(nomeCompleto) {
                return _class_private_field_get(this, _nome).abreviado(nomeCompleto).split(" ").map(function(nome, índice) {
                    return índice === 0 ? "".concat(nome, " ") : nome[0];
                }).join("");
            }
        },
        {
            key: "abreviado",
            value: function abreviado(nomeCompleto) {
                return _class_private_field_get(this, _nome).abreviado(nomeCompleto).replaceAll(/\. (?=[A-Z]\.)/g, "").replaceAll(/\./g, "");
            }
        },
        {
            key: "primeiroE\xdaltimo",
            value: function primeiroEÚltimo(nomeCompleto) {
                return _class_private_field_get(this, _nome).abreviado(nomeCompleto).replaceAll(/ .\./g, "");
            }
        },
        {
            key: "email",
            value: function email(nomeCompleto) {
                if (!nomeCompleto || !_class_private_field_get(this, _nome).completoVálido(nomeCompleto)) nomeCompleto = _class_private_field_get(this, _nome).completo();
                var estratégia = _class_private_field_get(this, _tipo).entre(_class_private_field_get(this, _estratégiaLocal));
                nomeCompleto = estratégia.call(this, nomeCompleto);
                var partes = nomeCompleto.split(" ");
                var separador = _class_private_field_get(this, _tipo).entre([
                    "",
                    "_",
                    "."
                ]);
                var local = partes.join(separador);
                if (_class_private_field_get(this, _tipo).booleano()) {
                    var sufixo = _class_private_field_get(this, _tipo).booleano() ? _class_private_field_get(this, _número).entreZeroE(73) + 1950 : _class_private_field_get(this, _número).entreZeroE(99);
                    local += sufixo;
                }
                local = _class_private_field_get(this, _texto).removeAcentos(local).toLowerCase();
                var domínio = _class_private_field_get(this, _tipo).entre(_class_private_field_get(this, _domínios));
                return "".concat(local, "@").concat(domínio);
            }
        }
    ]);
    return Pessoa;
}();
