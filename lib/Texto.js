"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Texto = void 0;
var N_mero_1 = require("./N\u00FAmero");
var Texto = /** @class */ (function () {
    function Texto() {
        this.número = new N_mero_1.Número();
    }
    Texto.prototype.letra = function () {
        var código = this.número.exclusivoEntreZeroE(26) + 65;
        return String.fromCharCode(código);
    };
    Texto.prototype.letraAcentuada = function () {
        var letras = [
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
        var índice = this.número.exclusivoEntreZeroE(letras.length);
        return letras[índice];
    };
    return Texto;
}());
exports.Texto = Texto;
