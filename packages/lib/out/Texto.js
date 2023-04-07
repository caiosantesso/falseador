"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Texto_número;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Texto = void 0;
const N_mero_1 = require("./N\u00FAmero");
const Exception_1 = require("./Exception");
class Texto {
    constructor() {
        _Texto_número.set(this, new N_mero_1.Número());
    }
    letra() {
        const código = __classPrivateFieldGet(this, _Texto_número, "f").exclusivoEntreZeroE(26) + 65;
        return String.fromCharCode(código);
    }
    letraAcentuada() {
        const letras = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'À',
            'Á',
            'Â',
            'Ã',
            'Ç',
            'É',
            'Ê',
            'Í',
            'Ó',
            'Ô',
            'Õ',
            'Ú',
        ];
        const índice = __classPrivateFieldGet(this, _Texto_número, "f").exclusivoEntreZeroE(letras.length);
        return letras[índice];
    }
    removeAcentos(palavra) {
        if (typeof palavra !== 'string')
            throw new Exception_1.Exception('palavra deve ser string.');
        const letrasAcentuadas = {
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ç: 'C',
            É: 'E',
            Ê: 'E',
            Í: 'I',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ú: 'U',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ç: 'c',
            é: 'e',
            ê: 'e',
            í: 'i',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ú: 'u',
        };
        return [...palavra]
            .map((letra) => letrasAcentuadas[letra] ?? letra)
            .join('');
    }
}
exports.Texto = Texto;
_Texto_número = new WeakMap();
