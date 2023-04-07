"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Pessoa_instances, _Pessoa_domínios, _Pessoa_nome, _Pessoa_tipo, _Pessoa_texto, _Pessoa_número, _Pessoa_estratégiaLocal, _Pessoa_iniciais, _Pessoa_primeiroMaisIniciais, _Pessoa_iniciaisMaisÚltimo, _Pessoa_abreviado, _Pessoa_primeiroEÚltimo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const Nome_1 = require("./Nome");
const N_mero_1 = require("./N\u00FAmero");
const Texto_1 = require("./Texto");
const Tipo_1 = require("./Tipo");
class Pessoa {
    constructor() {
        _Pessoa_instances.add(this);
        _Pessoa_domínios.set(this, [
            'gmail.com',
            'outlook.com',
            'yahoo.com.br',
            'terra.com.br',
            'icloud.com',
            'hotmail.com',
            'uol.com.br',
            'bol.com.br',
        ]);
        _Pessoa_nome.set(this, new Nome_1.Nome());
        _Pessoa_tipo.set(this, new Tipo_1.Tipo());
        _Pessoa_texto.set(this, new Texto_1.Texto());
        _Pessoa_número.set(this, new N_mero_1.Número());
        _Pessoa_estratégiaLocal.set(this, [
            __classPrivateFieldGet(this, _Pessoa_instances, "m", _Pessoa_iniciais),
            __classPrivateFieldGet(this, _Pessoa_instances, "m", _Pessoa_primeiroMaisIniciais),
            __classPrivateFieldGet(this, _Pessoa_instances, "m", _Pessoa_iniciaisMaisÚltimo),
            __classPrivateFieldGet(this, _Pessoa_instances, "m", _Pessoa_abreviado),
            __classPrivateFieldGet(this, _Pessoa_instances, "m", _Pessoa_primeiroEÚltimo),
        ]);
    }
    email(nomeCompleto) {
        if (!nomeCompleto || !__classPrivateFieldGet(this, _Pessoa_nome, "f").completoVálido(nomeCompleto))
            nomeCompleto = __classPrivateFieldGet(this, _Pessoa_nome, "f").completo();
        const estratégia = __classPrivateFieldGet(this, _Pessoa_tipo, "f").entre(__classPrivateFieldGet(this, _Pessoa_estratégiaLocal, "f"));
        nomeCompleto = estratégia.call(this, nomeCompleto);
        const partes = nomeCompleto.split(' ');
        const separador = __classPrivateFieldGet(this, _Pessoa_tipo, "f").entre(['', '_', '.']);
        let local = partes.join(separador);
        if (__classPrivateFieldGet(this, _Pessoa_tipo, "f").booleano()) {
            const sufixo = __classPrivateFieldGet(this, _Pessoa_tipo, "f").booleano()
                ? __classPrivateFieldGet(this, _Pessoa_número, "f").entreZeroE(73) + 1950
                : __classPrivateFieldGet(this, _Pessoa_número, "f").entreZeroE(99);
            local += sufixo;
        }
        local = __classPrivateFieldGet(this, _Pessoa_texto, "f").removeAcentos(local).toLowerCase();
        const domínio = __classPrivateFieldGet(this, _Pessoa_tipo, "f").entre(__classPrivateFieldGet(this, _Pessoa_domínios, "f"));
        return `${local}@${domínio}`;
    }
}
exports.Pessoa = Pessoa;
_Pessoa_domínios = new WeakMap(), _Pessoa_nome = new WeakMap(), _Pessoa_tipo = new WeakMap(), _Pessoa_texto = new WeakMap(), _Pessoa_número = new WeakMap(), _Pessoa_estratégiaLocal = new WeakMap(), _Pessoa_instances = new WeakSet(), _Pessoa_iniciais = function _Pessoa_iniciais(nomeCompleto) {
    return __classPrivateFieldGet(this, _Pessoa_nome, "f")
        .abreviado(nomeCompleto)
        .split(' ')
        .map((nome) => nome[0])
        .join('');
}, _Pessoa_primeiroMaisIniciais = function _Pessoa_primeiroMaisIniciais(nomeCompleto) {
    return __classPrivateFieldGet(this, _Pessoa_nome, "f")
        .abreviado(nomeCompleto)
        .split(' ')
        .map((nome, índice, nomes) => índice + 1 === nomes.length ? ` ${nome}` : nome[0])
        .join('');
}, _Pessoa_iniciaisMaisÚltimo = function _Pessoa_iniciaisMaisÚltimo(nomeCompleto) {
    return __classPrivateFieldGet(this, _Pessoa_nome, "f")
        .abreviado(nomeCompleto)
        .split(' ')
        .map((nome, índice) => índice === 0 ? `${nome} ` : nome[0])
        .join('');
}, _Pessoa_abreviado = function _Pessoa_abreviado(nomeCompleto) {
    return __classPrivateFieldGet(this, _Pessoa_nome, "f")
        .abreviado(nomeCompleto)
        .replaceAll(/\. (?=[A-Z]\.)/g, '')
        .replaceAll(/\./g, '');
}, _Pessoa_primeiroEÚltimo = function _Pessoa_primeiroEÚltimo(nomeCompleto) {
    return __classPrivateFieldGet(this, _Pessoa_nome, "f").abreviado(nomeCompleto).replaceAll(/ .\./g, '');
};
