"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tipo_número;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tipo = void 0;
const N_mero_1 = require("./N\u00FAmero");
const Exception_1 = require("./Exception");
class Tipo {
    constructor() {
        _Tipo_número.set(this, new N_mero_1.Número());
    }
    booleano() {
        return Math.random() < 0.5;
    }
    entre(valores) {
        const possibilidades = valores.length;
        if (possibilidades <= 1)
            throw new Exception_1.Exception('Lista deve ter ao menos 2 itens.');
        return valores[__classPrivateFieldGet(this, _Tipo_número, "f").exclusivoEntreZeroE(possibilidades)];
    }
}
exports.Tipo = Tipo;
_Tipo_número = new WeakMap();
