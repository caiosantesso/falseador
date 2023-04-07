"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Data_instances, _a, _Data_milisEmUmDia, _Data_limiteEmMili;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const Valida__es_1 = require("./Valida\u00E7\u00F5es");
const index_1 = require("./index");
const Exception_1 = require("./Exception");
class Data {
    constructor() {
        _Data_instances.add(this);
    }
    entrePeríodoEmAnos(data, limiteInf, limiteSup) {
        Valida__es_1.Validações.data(data);
        if (limiteInf === null && limiteSup === null)
            throw new Exception_1.Exception('Ambos não podem ser nulos.');
        if (limiteInf !== null && limiteSup !== null && limiteInf > limiteSup) {
            [limiteSup, limiteInf] = [limiteInf, limiteSup];
        }
        let inferiorEmMili;
        if (limiteInf === null) {
            inferiorEmMili = data.getTime();
        }
        else {
            inferiorEmMili =
                limiteInf <= 0
                    ? __classPrivateFieldGet(this, _Data_instances, "m", _Data_limiteEmMili).call(this, data, limiteInf - 1, __classPrivateFieldGet(_a, _a, "f", _Data_milisEmUmDia))
                    : __classPrivateFieldGet(this, _Data_instances, "m", _Data_limiteEmMili).call(this, data, limiteInf, 0);
        }
        let superiorEmMili;
        if (limiteSup === null) {
            superiorEmMili = data.getTime();
        }
        else {
            superiorEmMili =
                limiteSup >= 0
                    ? __classPrivateFieldGet(this, _Data_instances, "m", _Data_limiteEmMili).call(this, data, limiteSup + 1, __classPrivateFieldGet(_a, _a, "f", _Data_milisEmUmDia))
                    : __classPrivateFieldGet(this, _Data_instances, "m", _Data_limiteEmMili).call(this, data, limiteSup, 0);
        }
        const dataEmMili = index_1.falseador.número.entre(inferiorEmMili, superiorEmMili);
        return new Date(dataEmMili);
    }
}
exports.Data = Data;
_a = Data, _Data_instances = new WeakSet(), _Data_limiteEmMili = function _Data_limiteEmMili(data, limite, ajusteEmMili) {
    Valida__es_1.Validações.númeroInteiro(limite);
    const maisAnos = data.getFullYear() + limite;
    return new Date(data).setFullYear(maisAnos) + ajusteEmMili;
};
_Data_milisEmUmDia = { value: 24 * 60 * 60 * 1000 };
