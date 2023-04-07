"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validações = void 0;
const Exception_1 = require("./Exception");
/* eslint @typescript-eslint/no-explicit-any : 0*/
class Validações {
    static númeroInteiroPositivo(número) {
        if (!Number.isInteger(número))
            throw new Exception_1.Exception(`Número deve ser inteiro. Recebido ${número}.`);
        if (número < 0)
            throw new Exception_1.Exception(`Número deve ser positivo. Recebido ${número}.`);
        if (número > Number.MAX_SAFE_INTEGER)
            throw new Exception_1.Exception(`Número deve estar dentro do limite de inteiros. Recebido ${número}.`);
    }
    static númeroInteiro(número) {
        if (!Number.isInteger(número))
            throw new Exception_1.Exception(`Número deve ser inteiro. Recebido ${número}.`);
        if (número > Number.MAX_SAFE_INTEGER || número < Number.MIN_SAFE_INTEGER)
            throw new Exception_1.Exception(`Número deve estar dentro do limite de inteiros. Recebido ${número}.`);
    }
    static data(data) {
        if (!(data instanceof Date))
            throw new Exception_1.Exception(`Data inválida. Recebido ${data}`);
    }
}
exports.Validações = Validações;
