"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CommandoPessoa_argGênero;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandoPessoa = void 0;
const commander_1 = require("commander");
const falseador_lib_1 = require("falseador-lib");
class CommandoPessoa {
    constructor() {
        _CommandoPessoa_argGênero.set(this, new commander_1.Argument('[gênero]', 'F, M ou nenhum.').choices([
            'F',
            'f',
            'm',
            'M',
        ]));
    }
    obtenha() {
        return new commander_1.Command('pessoa')
            .description('Gera dados pessoais.')
            .alias('p')
            .addCommand(this.completa(), { isDefault: true })
            .addCommand(this.email());
    }
    email() {
        return new commander_1.Command('email')
            .description('e-mail pessoal.')
            .argument('[nome]', 'Nome a derivar para endereço de e-mail.')
            .action((nome) => {
            console.info(falseador_lib_1.falseador.pessoa.email(nome));
        });
    }
    completa() {
        const { local, data, doc, pessoa: ps, nome: nm } = falseador_lib_1.falseador;
        return new commander_1.Command('completa')
            .description('Dados pessoais.')
            .addArgument(__classPrivateFieldGet(this, _CommandoPessoa_argGênero, "f"))
            .addOption(new commander_1.Option('--json', 'exibe como JSON.').conflicts('tabela'))
            .option('--tabela', 'exibe como tabela.')
            .action((gênero, opções) => {
            const nome = nm.completo(gênero);
            const ddn = data.entrePeríodoEmAnos(new Date(), -100, -18);
            const idade = Math.floor((new Date().getTime() - ddn.getTime()) / 3.15576e10);
            const [cidade, estado] = local.cidade();
            const pessoa = {
                nome,
                nascimento: ddn.toISOString().split('T')[0],
                idade,
                cpf: doc.cpf(),
                email: ps.email(nome),
                cidade,
                estado,
            };
            let resultado = '';
            if (opções?.tabela) {
                Object.entries(pessoa).forEach(([atributo, valor]) => {
                    resultado += atributo.padEnd(20) + valor + '\n';
                });
                resultado = resultado.substring(0, resultado.length - 1);
            }
            else
                resultado = JSON.stringify(pessoa);
            console.info(resultado);
        });
    }
}
exports.CommandoPessoa = CommandoPessoa;
_CommandoPessoa_argGênero = new WeakMap();
