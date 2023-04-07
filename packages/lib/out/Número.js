"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Número_instances, _Número_dígitoRomano, _Número_unidades, _Número_dezenas, _Número_centenas, _Número_dezenaPorExtenso, _Número_centenaPorExtenso, _Número_milharesPorExtenso;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Número = void 0;
const Valida__es_1 = require("./Valida\u00E7\u00F5es");
const Exception_1 = require("./Exception");
class Número {
    constructor() {
        _Número_instances.add(this);
        _Número_unidades.set(this, [
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
        ]);
        _Número_dezenas.set(this, [
            undefined,
            undefined,
            'vinte',
            'trinta',
            'quarenta',
            'cinquenta',
            'sessenta',
            'setenta',
            'oitenta',
            'noventa',
        ]);
        _Número_centenas.set(this, [
            undefined,
            'cento',
            'duzentos',
            'trezentos',
            'quatrocentos',
            'quinhentos',
            'seiscentos',
            'setecentos',
            'oitocentos',
            'novecentos',
        ]);
    }
    entreZeroE(limite, inclusivo = true) {
        Valida__es_1.Validações.númeroInteiroPositivo(limite);
        if ((inclusivo && limite <= 0) || (!inclusivo && limite <= 1))
            throw new Exception_1.Exception(`Número limite inferior ao mínimo. Recebido ${limite}.`);
        inclusivo && limite++;
        return Math.floor(limite * Math.random());
    }
    exclusivoEntreZeroE(limite) {
        return this.entreZeroE(limite, false);
    }
    entreUmE(limite, inclusivo = true) {
        return this.entreZeroE(limite - 1, inclusivo) + 1;
    }
    exclusivoEntreUmE(limite) {
        return this.entreUmE(limite, false);
    }
    entre(limiteInf, limiteSup) {
        Valida__es_1.Validações.númeroInteiro(limiteInf);
        Valida__es_1.Validações.númeroInteiro(limiteSup);
        if (limiteInf > limiteSup)
            [limiteInf, limiteSup] = [limiteSup, limiteInf];
        const limite = limiteSup - limiteInf;
        return this.entreZeroE(limite) + limiteInf;
    }
    romano(número) {
        Valida__es_1.Validações.númeroInteiroPositivo(número);
        if (número <= 0 || número >= 4000)
            throw new Exception_1.Exception(`Número deve estar entre 1 e 3.999. Recebido ${número}`);
        const milhar = __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, Math.trunc(número / 1000), 3);
        número %= 1000;
        const centena = __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, Math.trunc(número / 100), 2);
        número %= 100;
        const dezena = __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, Math.trunc(número / 10), 1);
        número %= 10;
        const unidade = __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, número, 0);
        return `${milhar}${centena}${dezena}${unidade}`;
    }
    porExtenso(número) {
        Valida__es_1.Validações.númeroInteiroPositivo(número);
        if (número < 0 || número > 999999999999)
            throw new Exception_1.Exception(`${número} deve estar entre 0 e 999.999.999.999.`);
        let resultado = '';
        const bilhões = __classPrivateFieldGet(this, _Número_instances, "m", _Número_centenaPorExtenso).call(this, Math.trunc(número / 1000000000));
        if (bilhões !== 'zero')
            resultado = bilhões === 'um' ? 'um bilhão' : `${bilhões} bilhões`;
        número %= 1000000000;
        const milhões = __classPrivateFieldGet(this, _Número_instances, "m", _Número_centenaPorExtenso).call(this, Math.trunc(número / 1000000));
        if (milhões !== 'zero') {
            if (resultado !== '')
                resultado += ' ';
            resultado += milhões === 'um' ? 'um milhão' : `${milhões} milhões`;
        }
        const milhares = __classPrivateFieldGet(this, _Número_instances, "m", _Número_milharesPorExtenso).call(this, (número %= 1000000));
        if (milhares !== 'zero' || (milhares === 'zero' && resultado === '')) {
            if (resultado !== '')
                resultado += ' ';
            resultado += milhares;
        }
        return resultado;
    }
}
exports.Número = Número;
_Número_unidades = new WeakMap(), _Número_dezenas = new WeakMap(), _Número_centenas = new WeakMap(), _Número_instances = new WeakSet(), _Número_dígitoRomano = function _Número_dígitoRomano(dígito, base10) {
    if (dígito >= 1 && dígito <= 3) {
        return ['I', 'X', 'C', 'M'][base10].repeat(dígito);
    }
    else if (dígito === 4) {
        return __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, 1, base10) + __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, 5, base10);
    }
    else if (dígito === 5) {
        return ['V', 'L', 'D'][base10];
    }
    else if (dígito >= 6 && dígito <= 8) {
        return (__classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, 5, base10) + __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, dígito - 5, base10));
    }
    else if (dígito === 9) {
        return __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, 1, base10) + __classPrivateFieldGet(this, _Número_instances, "m", _Número_dígitoRomano).call(this, 1, base10 + 1);
    }
    return '';
}, _Número_dezenaPorExtenso = function _Número_dezenaPorExtenso(número) {
    if (número <= 19)
        return __classPrivateFieldGet(this, _Número_unidades, "f")[número];
    const dezena = __classPrivateFieldGet(this, _Número_dezenas, "f")[Math.trunc(número / 10)];
    const unidade = __classPrivateFieldGet(this, _Número_unidades, "f")[número % 10];
    return unidade === 'zero' ? `${dezena}` : `${dezena} e ${unidade}`;
}, _Número_centenaPorExtenso = function _Número_centenaPorExtenso(número) {
    const centena = __classPrivateFieldGet(this, _Número_centenas, "f")[Math.trunc(número / 100)];
    const dezena = __classPrivateFieldGet(this, _Número_instances, "m", _Número_dezenaPorExtenso).call(this, (número %= 100));
    if (centena === undefined)
        return dezena;
    else if (dezena === 'zero')
        return centena === 'cento' ? 'cem' : centena;
    else
        return `${centena} e ${dezena}`;
}, _Número_milharesPorExtenso = function _Número_milharesPorExtenso(número) {
    let milhares = __classPrivateFieldGet(this, _Número_instances, "m", _Número_centenaPorExtenso).call(this, Math.trunc(número / 1000));
    const unidades = __classPrivateFieldGet(this, _Número_instances, "m", _Número_centenaPorExtenso).call(this, número % 1000);
    if (milhares === 'zero')
        return unidades;
    else {
        milhares = milhares === 'um' ? 'mil' : `${milhares} mil`;
        if (unidades === 'zero')
            return milhares;
        else {
            const separador = número % 100 === 0 || número % 1000 < 100;
            return `${milhares}${separador ? ' e' : ''} ${unidades}`;
        }
    }
};
