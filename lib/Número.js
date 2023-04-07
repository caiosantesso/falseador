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
var _dígitoRomano = /*#__PURE__*/ new WeakSet(), _unidades = /*#__PURE__*/ new WeakMap(), _dezenas = /*#__PURE__*/ new WeakMap(), _centenas = /*#__PURE__*/ new WeakMap(), _dezenaPorExtenso = /*#__PURE__*/ new WeakSet(), _centenaPorExtenso = /*#__PURE__*/ new WeakSet(), _milharesPorExtenso = /*#__PURE__*/ new WeakSet();
export var Número = /*#__PURE__*/ function() {
    "use strict";
    function Número() {
        _class_call_check(this, Número);
        _class_private_method_init(this, _dígitoRomano);
        _class_private_method_init(this, _dezenaPorExtenso);
        _class_private_method_init(this, _centenaPorExtenso);
        _class_private_method_init(this, _milharesPorExtenso);
        _class_private_field_init(this, _unidades, {
            writable: true,
            value: [
                "zero",
                "um",
                "dois",
                "tr\xeas",
                "quatro",
                "cinco",
                "seis",
                "sete",
                "oito",
                "nove",
                "dez",
                "onze",
                "doze",
                "treze",
                "catorze",
                "quinze",
                "dezesseis",
                "dezesste",
                "dezoito",
                "dezenove"
            ]
        });
        _class_private_field_init(this, _dezenas, {
            writable: true,
            value: [
                ,
                ,
                "vinte",
                "trinta",
                "quarenta",
                "cinquenta",
                "sessenta",
                "setenta",
                "oitenta",
                "noventa"
            ]
        });
        _class_private_field_init(this, _centenas, {
            writable: true,
            value: [
                ,
                "cento",
                "duzentos",
                "trezentos",
                "quatrocentos",
                "quinhentos",
                "seiscentos",
                "setecentos",
                "oitocentos",
                "novecentos"
            ]
        });
    }
    _create_class(Número, [
        {
            key: "entreZeroE",
            value: function entreZeroE(limite) {
                var inclusivo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                if (inclusivo && limite <= 0 || !inclusivo && limite <= 1) throw new Error("N\xfamero limite inv\xe1lido.");
                inclusivo && limite++;
                return Math.floor(limite * Math.random());
            }
        },
        {
            key: "exclusivoEntreZeroE",
            value: function exclusivoEntreZeroE(limite) {
                return this.entreZeroE(limite, false);
            }
        },
        {
            key: "entreUmE",
            value: function entreUmE(limite) {
                var inclusivo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return this.entreZeroE(limite - 1, inclusivo) + 1;
            }
        },
        {
            key: "exclusivoEntreUmE",
            value: function exclusivoEntreUmE(limite) {
                return this.entreUmE(limite, false);
            }
        },
        {
            key: "romano",
            value: function romano(número) {
                if (!Number.isInteger(número)) throw Error("".concat(número, " deve ser inteiro."));
                if (número <= 0 || número >= 4000) throw Error("N\xfamero inv\xe1lido. Escolha entre 1 e 3999.");
                var milhar = _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, Math.trunc(número / 1000), 3);
                número %= 1000;
                var centena = _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, Math.trunc(número / 100), 2);
                número %= 100;
                var dezena = _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, Math.trunc(número / 10), 1);
                número %= 10;
                var unidade = _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, número, 0);
                return "".concat(milhar).concat(centena).concat(dezena).concat(unidade);
            }
        },
        {
            key: "porExtenso",
            value: function porExtenso(número) {
                if (!Number.isInteger(número)) throw Error("".concat(número, " deve ser n\xfamero inteiro."));
                if (número < 0 || número > 999999999999) throw Error("".concat(número, " deve estar entre 0 e 999.999.999.999."));
                var resultado = "";
                var bilhões = _class_private_method_get(this, _centenaPorExtenso, centenaPorExtenso).call(this, Math.trunc(número / 1000000000));
                if (bilhões !== "zero") resultado = bilhões === "um" ? "um bilh\xe3o" : "".concat(bilhões, " bilh\xf5es");
                número %= 1000000000;
                var milhões = _class_private_method_get(this, _centenaPorExtenso, centenaPorExtenso).call(this, Math.trunc(número / 1000000));
                if (milhões !== "zero") {
                    if (resultado !== "") resultado += " ";
                    resultado += milhões === "um" ? "um milh\xe3o" : "".concat(milhões, " milh\xf5es");
                }
                var milhares = _class_private_method_get(this, _milharesPorExtenso, milharesPorExtenso).call(this, número %= 1000000);
                if (milhares !== "zero" || milhares === "zero" && resultado === "") {
                    if (resultado !== "") resultado += " ";
                    resultado += milhares;
                }
                return resultado;
            }
        }
    ]);
    return Número;
}();
function dígitoRomano(dígito, base10) {
    if (dígito >= 1 && dígito <= 3) {
        return [
            "I",
            "X",
            "C",
            "M"
        ][base10].repeat(dígito);
    } else if (dígito === 4) {
        return _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, 1, base10) + _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, 5, base10);
    } else if (dígito === 5) {
        return [
            "V",
            "L",
            "D"
        ][base10];
    } else if (dígito >= 6 && dígito <= 8) {
        return _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, 5, base10) + _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, dígito - 5, base10);
    } else if (dígito === 9) {
        return _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, 1, base10) + _class_private_method_get(this, _dígitoRomano, dígitoRomano).call(this, 1, base10 + 1);
    }
    return "";
}
function dezenaPorExtenso(número) {
    if (número <= 19) return _class_private_field_get(this, _unidades)[número];
    var dezena = _class_private_field_get(this, _dezenas)[Math.trunc(número / 10)];
    var unidade = _class_private_field_get(this, _unidades)[número % 10];
    return unidade === "zero" ? "".concat(dezena) : "".concat(dezena, " e ").concat(unidade);
}
function centenaPorExtenso(número) {
    var centena = _class_private_field_get(this, _centenas)[Math.trunc(número / 100)];
    var dezena = _class_private_method_get(this, _dezenaPorExtenso, dezenaPorExtenso).call(this, número %= 100);
    if (centena === undefined) return dezena;
    else if (dezena === "zero") return centena === "cento" ? "cem" : centena;
    else return "".concat(centena, " e ").concat(dezena);
}
function milharesPorExtenso(número) {
    var milhares = _class_private_method_get(this, _centenaPorExtenso, centenaPorExtenso).call(this, Math.trunc(número / 1000));
    var unidades = _class_private_method_get(this, _centenaPorExtenso, centenaPorExtenso).call(this, número % 1000);
    if (milhares === "zero") return unidades;
    else {
        milhares = milhares === "um" ? "mil" : "".concat(milhares, " mil");
        if (unidades === "zero") return milhares;
        else {
            var separador = número % 100 === 0 || número % 1000 < 100;
            return "".concat(milhares).concat(separador ? " e" : "", " ").concat(unidades);
        }
    }
}
