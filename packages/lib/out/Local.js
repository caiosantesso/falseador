"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Local_número;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = exports.UF = void 0;
const ListaDeCidades_1 = require("./ListaDeCidades");
const N_mero_1 = require("./N\u00FAmero");
var UF;
(function (UF) {
    UF["AC"] = "Acre";
    UF["AL"] = "Alagoas";
    UF["AP"] = "Amap\u00E1";
    UF["AM"] = "Amazonas";
    UF["BA"] = "Bahia";
    UF["CE"] = "Cear\u00E1";
    UF["DF"] = "Distrito Federal";
    UF["ES"] = "Esp\u00EDrito Santo";
    UF["GO"] = "Goi\u00E1s";
    UF["MA"] = "Maranh\u00E3o";
    UF["MT"] = "Mato Grosso";
    UF["MS"] = "Mato Grosso do Sul";
    UF["MG"] = "Minas Gerais";
    UF["PA"] = "Par\u00E1";
    UF["PB"] = "Para\u00EDba";
    UF["PR"] = "Paran\u00E1";
    UF["PE"] = "Pernambuco";
    UF["PI"] = "Piau\u00ED";
    UF["RJ"] = "Rio de Janeiro";
    UF["RN"] = "Rio Grande do Norte";
    UF["RS"] = "Rio Grande do Sul";
    UF["RO"] = "Rond\u00F4nia";
    UF["RR"] = "Roraima";
    UF["SC"] = "Santa Catarina";
    UF["SP"] = "S\u00E3o Paulo";
    UF["SE"] = "Sergipe";
    UF["TO"] = "Tocantins";
})(UF || (exports.UF = UF = {}));
class Local {
    constructor() {
        _Local_número.set(this, new N_mero_1.Número());
    }
    cidade(uf) {
        let cidades = ListaDeCidades_1.ListaDeCidades.cidades;
        if (uf && Object.keys(UF).includes(uf.toUpperCase()))
            cidades = cidades.filter((c) => c[1] === uf.toUpperCase());
        const índice = __classPrivateFieldGet(this, _Local_número, "f").exclusivoEntreZeroE(cidades.length);
        const cidade = cidades[índice];
        const nomeDaCidade = cidade[2];
        const ufSigla = cidade[1];
        return [nomeDaCidade, ufSigla];
    }
}
exports.Local = Local;
_Local_número = new WeakMap();
