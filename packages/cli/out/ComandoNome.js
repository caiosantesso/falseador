"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ComandoNome_gêneroArgumento;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComandoNome = void 0;
const commander_1 = require("commander");
const falseador_lib_1 = require("falseador-lib");
class ComandoNome {
    constructor() {
        _ComandoNome_gêneroArgumento.set(this, new commander_1.Argument('[gênero]', 'F, M ou nenhum').choices(['F', 'f', 'm', 'M']));
    }
    obtenha() {
        return new commander_1.Command('nome')
            .description('Gera/transforma nomes.')
            .alias('n')
            .addCommand(this.completo(), { isDefault: true })
            .addCommand(this.sobrenome())
            .addCommand(this.sobrenomes())
            .addCommand(this.composto())
            .addCommand(this.abreviado())
            .addCommand(this.primeiro());
    }
    primeiro() {
        return new commander_1.Command('primeiro')
            .description('Primeiro nome.')
            .addArgument(__classPrivateFieldGet(this, _ComandoNome_gêneroArgumento, "f"))
            .action((gênero) => {
            console.info(falseador_lib_1.falseador.nome.primeiro(gênero));
        });
    }
    composto() {
        return new commander_1.Command('composto')
            .description('Nome composto.')
            .addArgument(__classPrivateFieldGet(this, _ComandoNome_gêneroArgumento, "f"))
            .action((gênero) => {
            console.info(falseador_lib_1.falseador.nome.composto(gênero));
        });
    }
    sobrenome() {
        return new commander_1.Command('sobrenome')
            .description('Sobrenome único.')
            .action(() => {
            console.info(falseador_lib_1.falseador.nome.sobrenome());
        });
    }
    sobrenomes() {
        return new commander_1.Command('sobrenomes')
            .description('Conjunto de sobrenomes.')
            .argument('[num]', 'Número de sobrenomes, entre 1 e 3 caso indefinido.')
            .action((num) => {
            console.info(falseador_lib_1.falseador.nome.sobrenomes(num));
        });
    }
    completo() {
        return new commander_1.Command('completo')
            .description('Nome completo.')
            .addArgument(__classPrivateFieldGet(this, _ComandoNome_gêneroArgumento, "f"))
            .action((gênero) => {
            console.info(falseador_lib_1.falseador.nome.completo(gênero));
        });
    }
    abreviado() {
        return new commander_1.Command('abreviado')
            .description('Abrevia nomes.')
            .argument('nome', 'Nome a ser abreviado entre aspas.')
            .action((nome) => {
            console.info(falseador_lib_1.falseador.nome.abreviado(nome));
        });
    }
}
exports.ComandoNome = ComandoNome;
_ComandoNome_gêneroArgumento = new WeakMap();
