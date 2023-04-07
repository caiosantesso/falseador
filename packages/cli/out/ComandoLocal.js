"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CommandoLocal_argUF;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandoLocal = void 0;
const commander_1 = require("commander");
const falseador_lib_1 = require("falseador-lib");
class CommandoLocal {
    constructor() {
        _CommandoLocal_argUF.set(this, new commander_1.Argument('[uf]', 'Unidade Federativa ou nenhuma.').choices(Object.keys(falseador_lib_1.UF)));
    }
    obtenha() {
        return new commander_1.Command('local')
            .description('Obtém municípios.')
            .alias('l')
            .addCommand(this.cidade(), { isDefault: true });
    }
    cidade() {
        return new commander_1.Command('cidade')
            .description('cidade brasileira.')
            .addArgument(__classPrivateFieldGet(this, _CommandoLocal_argUF, "f"))
            .option('--sem-sigla', 'remove UF após cidade.')
            .action((uf, opções) => {
            const local = falseador_lib_1.falseador.local.cidade(uf);
            const estado = `${opções.semSigla ? '' : ` - ${local[1]}`}`;
            console.info(`${local[0]}${estado}`);
        });
    }
}
exports.CommandoLocal = CommandoLocal;
_CommandoLocal_argUF = new WeakMap();
