"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Documento_instances, _Documento_número, _Documento_criaVetor, _Documento_mod;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
const N_mero_1 = require("./N\u00FAmero");
class Documento {
    constructor() {
        _Documento_instances.add(this);
        _Documento_número.set(this, new N_mero_1.Número());
    }
    cpf() {
        const d = __classPrivateFieldGet(this, _Documento_instances, "m", _Documento_criaVetor).call(this, 9, 9);
        const penúltimo = d[8] * 2 +
            d[7] * 3 +
            d[6] * 4 +
            d[5] * 5 +
            d[4] * 6 +
            d[3] * 7 +
            d[2] * 8 +
            d[1] * 9 +
            d[0] * 10;
        d[9] = 11 - __classPrivateFieldGet(this, _Documento_instances, "m", _Documento_mod).call(this, penúltimo, 11);
        if (d[9] >= 10)
            d[9] = 0;
        const último = d[9] * 2 +
            d[8] * 3 +
            d[7] * 4 +
            d[6] * 5 +
            d[5] * 6 +
            d[4] * 7 +
            d[3] * 8 +
            d[2] * 9 +
            d[1] * 10 +
            d[0] * 11;
        d[10] = 11 - __classPrivateFieldGet(this, _Documento_instances, "m", _Documento_mod).call(this, último, 11);
        if (d[10] >= 10)
            d[10] = 0;
        return d.join('');
    }
    cnpj() {
        const d = __classPrivateFieldGet(this, _Documento_instances, "m", _Documento_criaVetor).call(this, 8, 9);
        d[8] = 0;
        d[9] = 0;
        d[10] = 0;
        d[11] = 1;
        const penúltimo = d[11] * 2 +
            d[10] * 3 +
            d[9] * 4 +
            d[8] * 5 +
            d[7] * 6 +
            d[6] * 7 +
            d[5] * 8 +
            d[4] * 9 +
            d[3] * 2 +
            d[2] * 3 +
            d[1] * 4 +
            d[0] * 5;
        d[12] = 11 - __classPrivateFieldGet(this, _Documento_instances, "m", _Documento_mod).call(this, penúltimo, 11);
        if (d[12] >= 10)
            d[12] = 0;
        const último = d[12] * 2 +
            d[11] * 3 +
            d[10] * 4 +
            d[9] * 5 +
            d[8] * 6 +
            d[7] * 7 +
            d[6] * 8 +
            d[5] * 9 +
            d[4] * 2 +
            d[3] * 3 +
            d[2] * 4 +
            d[1] * 5 +
            d[0] * 6;
        d[13] = 11 - __classPrivateFieldGet(this, _Documento_instances, "m", _Documento_mod).call(this, último, 11);
        if (d[13] >= 10)
            d[13] = 0;
        return d.join('');
    }
}
exports.Documento = Documento;
_Documento_número = new WeakMap(), _Documento_instances = new WeakSet(), _Documento_criaVetor = function _Documento_criaVetor(largura, dígitoLimite) {
    return Array.from(Array(largura), () => __classPrivateFieldGet(this, _Documento_número, "f").entreZeroE(dígitoLimite));
}, _Documento_mod = function _Documento_mod(dividendo, divisor) {
    return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
};
