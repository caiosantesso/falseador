"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Número = void 0;
var Número = /** @class */ (function () {
    function Número() {
        this.unidades = [
            'zero',
            'um',
            'dois',
            'três',
            'quatro',
            'cinco',
            'seis',
            'sete',
            'oito',
            'nove',
            'dez',
            'onze',
            'doze',
            'treze',
            'catorze',
            'quinze',
            'dezesseis',
            'dezesste',
            'dezoito',
            'dezenove',
        ];
        this.dezenas = [
            ,
            ,
            'vinte',
            'trinta',
            'quarenta',
            'cinquenta',
            'sessenta',
            'setenta',
            'oitenta',
            'noventa',
        ];
        this.centenas = [
            ,
            'cento',
            'duzentos',
            'trezentos',
            'quatrocentos',
            'quinhentos',
            'seiscentos',
            'setecentos',
            'oitocentos',
            'novecentos',
        ];
    }
    Número.prototype.entreZeroE = function (limite, inclusivo) {
        if (inclusivo === void 0) { inclusivo = true; }
        if ((inclusivo && limite <= 0) || (!inclusivo && limite <= 1))
            throw new Error('Número limite inválido.');
        inclusivo && limite++;
        return Math.floor(limite * Math.random());
    };
    Número.prototype.exclusivoEntreZeroE = function (limite) {
        return this.entreZeroE(limite, false);
    };
    Número.prototype.entreUmE = function (limite, inclusivo) {
        if (inclusivo === void 0) { inclusivo = true; }
        return this.entreZeroE(limite - 1, inclusivo) + 1;
    };
    Número.prototype.exclusivoEntreUmE = function (limite) {
        return this.entreUmE(limite, false);
    };
    Número.prototype.dígitoRomano = function (dígito, base10) {
        if (dígito >= 1 && dígito <= 3) {
            return ['I', 'X', 'C', 'M'][base10].repeat(dígito);
        }
        else if (dígito === 4) {
            return this.dígitoRomano(1, base10) + this.dígitoRomano(5, base10);
        }
        else if (dígito === 5) {
            return ['V', 'L', 'D'][base10];
        }
        else if (dígito >= 6 && dígito <= 8) {
            return (this.dígitoRomano(5, base10) + this.dígitoRomano(dígito - 5, base10));
        }
        else if (dígito === 9) {
            return this.dígitoRomano(1, base10) + this.dígitoRomano(1, base10 + 1);
        }
        return '';
    };
    Número.prototype.romano = function (número) {
        if (número <= 0 || número >= 4000)
            throw Error('Número romano inválido. Escolha entre 1 e 3999.');
        var milhar = this.dígitoRomano(Math.trunc(número / 1000), 3);
        número %= 1000;
        var centena = this.dígitoRomano(Math.trunc(número / 100), 2);
        número %= 100;
        var dezena = this.dígitoRomano(Math.trunc(número / 10), 1);
        número %= 10;
        var unidade = this.dígitoRomano(número, 0);
        return "".concat(milhar).concat(centena).concat(dezena).concat(unidade);
    };
    Número.prototype.dezenaPorExtenso = function (número) {
        if (número <= 19)
            return this.unidades[número];
        var dezena = this.dezenas[Math.trunc(número / 10)];
        var unidade = this.unidades[número % 10];
        return unidade === 'zero' ? "".concat(dezena) : "".concat(dezena, " e ").concat(unidade);
    };
    Número.prototype.centenaPorExtenso = function (número) {
        var centena = this.centenas[Math.trunc(número / 100)];
        var dezena = this.dezenaPorExtenso((número %= 100));
        if (centena === undefined)
            return dezena;
        else if (dezena === 'zero')
            return centena === 'cento' ? 'cem' : centena;
        else
            return "".concat(centena, " e ").concat(dezena);
    };
    Número.prototype.milharesPorExtenso = function (número) {
        var milhares = this.centenaPorExtenso(Math.trunc(número / 1000));
        var unidades = this.centenaPorExtenso(número % 1000);
        if (milhares === 'zero')
            return unidades;
        else {
            milhares = milhares === 'um' ? 'mil' : "".concat(milhares, " mil");
            if (unidades === 'zero')
                return milhares;
            else {
                var separador = número % 100 === 0 || número % 1000 < 100;
                return "".concat(milhares).concat(separador ? ' e' : '', " ").concat(unidades);
            }
        }
    };
    Número.prototype.porExtenso = function (número) {
        if (número < 0 || número > 999999999999)
            throw Error();
        if (!Number.isInteger(número))
            throw Error();
        var resultado = '';
        var bilhões = this.centenaPorExtenso(Math.trunc(número / 1000000000));
        if (bilhões !== 'zero')
            resultado = bilhões === 'um' ? 'um bilhão' : "".concat(bilhões, " bilh\u00F5es");
        número %= 1000000000;
        var milhões = this.centenaPorExtenso(Math.trunc(número / 1000000));
        if (milhões !== 'zero') {
            if (resultado !== '')
                resultado += ' ';
            resultado += milhões === 'um' ? 'um milhão' : "".concat(milhões, " milh\u00F5es");
        }
        var milhares = this.milharesPorExtenso((número %= 1000000));
        if (milhares !== 'zero' || (milhares === 'zero' && resultado === '')) {
            if (resultado !== '')
                resultado += ' ';
            resultado += milhares;
        }
        return resultado;
    };
    return Número;
}());
exports.Número = Número;
