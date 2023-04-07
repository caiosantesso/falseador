"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComandoDoc = void 0;
const commander_1 = require("commander");
const falseador_lib_1 = require("falseador-lib");
class ComandoDoc {
    obtenha() {
        return new commander_1.Command('doc')
            .description('Gera números de documento.')
            .alias('d')
            .addCommand(this.cnpj())
            .addCommand(this.cpf());
    }
    cpf() {
        return new commander_1.Command('cpf')
            .description('Cadastro de Pessoa Física.')
            .action(() => {
            console.info(falseador_lib_1.falseador.doc.cpf());
        });
    }
    cnpj() {
        return new commander_1.Command('cnpj')
            .description('Cadastro Nacional de Pessoa Jurídica.')
            .action(() => {
            console.info(falseador_lib_1.falseador.doc.cnpj());
        });
    }
}
exports.ComandoDoc = ComandoDoc;
