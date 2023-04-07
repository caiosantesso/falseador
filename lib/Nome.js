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
import { Tipo } from "./Tipo";
import { ListaDeNomes } from "./ListaDeNomes";
var _número = /*#__PURE__*/ new WeakMap(), _tipo = /*#__PURE__*/ new WeakMap(), _agnomes = /*#__PURE__*/ new WeakMap(), _preposições = /*#__PURE__*/ new WeakMap(), _primeiroComGênero = /*#__PURE__*/ new WeakSet(), _gêneroVálido = /*#__PURE__*/ new WeakSet();
export var Nome = /*#__PURE__*/ function() {
    "use strict";
    function Nome() {
        _class_call_check(this, Nome);
        _class_private_method_init(this, _primeiroComGênero);
        _class_private_method_init(this, _gêneroVálido);
        _class_private_field_init(this, _número, {
            writable: true,
            value: new Número()
        });
        _class_private_field_init(this, _tipo, {
            writable: true,
            value: new Tipo()
        });
        _class_private_field_init(this, _agnomes, {
            writable: true,
            value: new Set([
                "J\xfanior",
                "Junior",
                "Filho",
                "Segundo",
                "Neto",
                "Terceiro",
                "Irm\xe3o",
                "Sobrinho",
                "Filha",
                "Segunda",
                "Neta",
                "Terceira",
                "Irm\xe3",
                "Sobrinha"
            ])
        });
        _class_private_field_init(this, _preposições, {
            writable: true,
            value: new Set([
                "dos",
                "das",
                "do",
                "da",
                "de",
                "del",
                "di"
            ])
        });
    }
    _create_class(Nome, [
        {
            key: "primeiro",
            value: function primeiro(gênero) {
                gênero = _class_private_method_get(this, _gêneroVálido, gêneroVálido).call(this, gênero);
                return _class_private_method_get(this, _primeiroComGênero, primeiroComGênero).call(this, gênero);
            }
        },
        {
            key: "composto",
            value: function composto(gênero) {
                gênero = _class_private_method_get(this, _gêneroVálido, gêneroVálido).call(this, gênero);
                return _class_private_method_get(this, _primeiroComGênero, primeiroComGênero).call(this, gênero) + " " + _class_private_method_get(this, _primeiroComGênero, primeiroComGênero).call(this, gênero);
            }
        },
        {
            key: "sobrenome",
            value: function sobrenome() {
                var sobrenomes = ListaDeNomes.sobrenomes;
                var índice = _class_private_field_get(this, _número).exclusivoEntreZeroE(sobrenomes.length);
                return sobrenomes[índice];
            }
        },
        {
            key: "sobrenomes",
            value: function sobrenomes(quantidade) {
                var número = quantidade && quantidade >= 1 ? quantidade : _class_private_field_get(this, _número).entreUmE(3);
                var sobrenomes = [];
                for(var i = 0; i < número; i++){
                    sobrenomes.push(this.sobrenome());
                }
                return sobrenomes.join(" ");
            }
        },
        {
            key: "completo",
            value: function completo(gênero) {
                gênero = _class_private_method_get(this, _gêneroVálido, gêneroVálido).call(this, gênero);
                var nome = _class_private_field_get(this, _tipo).booleano() ? _class_private_method_get(this, _primeiroComGênero, primeiroComGênero).call(this, gênero) : this.composto(gênero);
                return "".concat(nome, " ").concat(this.sobrenomes());
            }
        },
        {
            key: "abreviado",
            value: function abreviado(nomeCompleto) {
                var _this = this;
                if (typeof nomeCompleto !== "string") throw new Error("nome deve ser string.");
                var nomes = nomeCompleto.trim().split(" ").filter(function(pedaço) {
                    return !_class_private_field_get(_this, _preposições).has(pedaço);
                });
                if (nomes.length <= 2) return nomeCompleto;
                var temAgnome = _class_private_field_get(this, _agnomes).has(nomes[nomes.length - 1]);
                if (temAgnome && nomes.length === 3) {
                    return nomeCompleto;
                }
                var primeiro = nomes.shift();
                var agnome = temAgnome ? this.agnome(nomes) : "";
                var último = nomes.pop() + agnome;
                var abreviaturas = nomes.map(function(nome) {
                    return nome[0] + ".";
                }).join(" ");
                return "".concat(primeiro, " ").concat(abreviaturas, " ").concat(último);
            }
        },
        {
            key: "agnome",
            value: function agnome(nomes) {
                var agnome = nomes.pop();
                agnome = agnome === "J\xfanior" || agnome === "Junior" ? "Jr." : agnome;
                return " ".concat(agnome);
            }
        },
        {
            key: "completoV\xe1lido",
            value: function completoVálido(nomeCompleto) {
                if (typeof nomeCompleto !== "string") return false;
                var nomes = nomeCompleto.split(" ");
                if (!this.éNomeVálido(nomes[0]) || nomes.length <= 1) return false;
                var últimaFoiPreposição = false;
                for(var i = 1; i < nomes.length; i++){
                    var nome = nomes[i];
                    if (this.éPreposição(nome)) {
                        if (últimaFoiPreposição) return false;
                        últimaFoiPreposição = true;
                    } else {
                        if (!this.éNomeVálido(nome)) return false;
                        últimaFoiPreposição = false;
                    }
                }
                return !últimaFoiPreposição;
            }
        },
        {
            key: "\xe9NomeV\xe1lido",
            value: function éNomeVálido(nome) {
                return /^[a-zàáâãçéêíóôõú']{3,}$/i.test(nome);
            }
        },
        {
            key: "\xe9Preposi\xe7\xe3o",
            value: function éPreposição(nome) {
                return _class_private_field_get(this, _preposições).has(nome.toLowerCase());
            }
        }
    ]);
    return Nome;
}();
function primeiroComGênero(gênero) {
    var nomes = ListaDeNomes[gênero];
    var índice = _class_private_field_get(this, _número).exclusivoEntreZeroE(nomes.length);
    return nomes[índice];
}
function gêneroVálido(gênero) {
    gênero = gênero === null || gênero === void 0 ? void 0 : gênero.toUpperCase();
    return gênero === "F" || gênero === "M" ? gênero : _class_private_field_get(this, _tipo).entre([
        "F",
        "M"
    ]);
}
