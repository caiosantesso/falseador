"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Nome_instances, _Nome_número, _Nome_tipo, _Nome_agnomes, _Nome_preposições, _Nome_primeiroComGênero, _Nome_gêneroVálido;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nome = void 0;
const N_mero_1 = require("./N\u00FAmero");
const Tipo_1 = require("./Tipo");
const ListaDeNomes_1 = require("./ListaDeNomes");
const Exception_1 = require("./Exception");
class Nome {
    constructor() {
        _Nome_instances.add(this);
        _Nome_número.set(this, new N_mero_1.Número());
        _Nome_tipo.set(this, new Tipo_1.Tipo());
        _Nome_agnomes.set(this, new Set([
            'Júnior',
            'Junior',
            'Filho',
            'Segundo',
            'Neto',
            'Terceiro',
            'Irmão',
            'Sobrinho',
            'Filha',
            'Segunda',
            'Neta',
            'Terceira',
            'Irmã',
            'Sobrinha',
        ]));
        _Nome_preposições.set(this, new Set([
            'dos',
            'das',
            'do',
            'da',
            'de',
            'del',
            'di',
        ]));
    }
    primeiro(gênero) {
        gênero = __classPrivateFieldGet(this, _Nome_instances, "m", _Nome_gêneroVálido).call(this, gênero);
        return __classPrivateFieldGet(this, _Nome_instances, "m", _Nome_primeiroComGênero).call(this, gênero);
    }
    composto(gênero) {
        gênero = __classPrivateFieldGet(this, _Nome_instances, "m", _Nome_gêneroVálido).call(this, gênero);
        return (__classPrivateFieldGet(this, _Nome_instances, "m", _Nome_primeiroComGênero).call(this, gênero) + ' ' + __classPrivateFieldGet(this, _Nome_instances, "m", _Nome_primeiroComGênero).call(this, gênero));
    }
    sobrenome() {
        const { sobrenomes } = ListaDeNomes_1.ListaDeNomes;
        const índice = __classPrivateFieldGet(this, _Nome_número, "f").exclusivoEntreZeroE(sobrenomes.length);
        return sobrenomes[índice];
    }
    sobrenomes(quantidade) {
        const número = quantidade && quantidade >= 1 ? quantidade : __classPrivateFieldGet(this, _Nome_número, "f").entreUmE(3);
        const sobrenomes = [];
        for (let i = 0; i < número; i++) {
            sobrenomes.push(this.sobrenome());
        }
        return sobrenomes.join(' ');
    }
    completo(gênero) {
        gênero = __classPrivateFieldGet(this, _Nome_instances, "m", _Nome_gêneroVálido).call(this, gênero);
        const nome = __classPrivateFieldGet(this, _Nome_tipo, "f").booleano()
            ? __classPrivateFieldGet(this, _Nome_instances, "m", _Nome_primeiroComGênero).call(this, gênero)
            : this.composto(gênero);
        return `${nome} ${this.sobrenomes()}`;
    }
    abreviado(nomeCompleto) {
        if (typeof nomeCompleto !== 'string')
            throw new Exception_1.Exception('nome deve ser string.');
        const nomes = nomeCompleto
            .trim()
            .split(' ')
            .filter((pedaço) => !__classPrivateFieldGet(this, _Nome_preposições, "f").has(pedaço));
        if (nomes.length <= 2)
            return nomeCompleto;
        const temAgnome = __classPrivateFieldGet(this, _Nome_agnomes, "f").has(nomes[nomes.length - 1]);
        if (temAgnome && nomes.length === 3) {
            return nomeCompleto;
        }
        const primeiro = nomes.shift();
        const agnome = temAgnome ? this.agnome(nomes) : '';
        const último = nomes.pop() + agnome;
        const abreviaturas = nomes.map((nome) => nome[0] + '.').join(' ');
        return `${primeiro} ${abreviaturas} ${último}`;
    }
    agnome(nomes) {
        let agnome = nomes.pop();
        agnome = agnome === 'Júnior' || agnome === 'Junior' ? 'Jr.' : agnome;
        return ` ${agnome}`;
    }
    completoVálido(nomeCompleto) {
        if (typeof nomeCompleto !== 'string')
            return false;
        const nomes = nomeCompleto.split(' ');
        if (!this.éNomeVálido(nomes[0]) || nomes.length <= 1)
            return false;
        let últimaFoiPreposição = false;
        for (let i = 1; i < nomes.length; i++) {
            const nome = nomes[i];
            if (this.éPreposição(nome)) {
                if (últimaFoiPreposição)
                    return false;
                últimaFoiPreposição = true;
            }
            else {
                if (!this.éNomeVálido(nome))
                    return false;
                últimaFoiPreposição = false;
            }
        }
        return !últimaFoiPreposição;
    }
    éNomeVálido(nome) {
        return /^[a-zàáâãçéêíóôõú']{3,}$/i.test(nome);
    }
    éPreposição(nome) {
        return __classPrivateFieldGet(this, _Nome_preposições, "f").has(nome.toLowerCase());
    }
}
exports.Nome = Nome;
_Nome_número = new WeakMap(), _Nome_tipo = new WeakMap(), _Nome_agnomes = new WeakMap(), _Nome_preposições = new WeakMap(), _Nome_instances = new WeakSet(), _Nome_primeiroComGênero = function _Nome_primeiroComGênero(gênero) {
    const nomes = ListaDeNomes_1.ListaDeNomes[gênero];
    const índice = __classPrivateFieldGet(this, _Nome_número, "f").exclusivoEntreZeroE(nomes.length);
    return nomes[índice];
}, _Nome_gêneroVálido = function _Nome_gêneroVálido(gênero) {
    gênero = gênero?.toUpperCase();
    return gênero === 'F' || gênero === 'M'
        ? gênero
        : __classPrivateFieldGet(this, _Nome_tipo, "f").entre(['F', 'M']);
};
