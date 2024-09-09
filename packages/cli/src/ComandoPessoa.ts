import { Option } from 'commander';
import { falseador, type Gênero, type UFSigla } from 'falseador-lib';

import { gênero } from './Utilitários';
import { Comando } from './Comando';

type Pessoa = {
  nome: string;
  nascimento: string;
  idade: number;
  email: string;
  cpf: string;
  cidade: string;
  estado: UFSigla;
};

export class ComandoPessoa extends Comando {
  public constructor() {
    super('pessoa');

    super
      .description('Gera dados pessoais.')
      .alias('p')
      .addCommand(this.subcomandoCompleta(), { isDefault: true })
      .addCommand(this.subcomandoEmail());
  }

  private subcomandoEmail() {
    return new Comando('email')
      .description('e-mail pessoal.')
      .argument('[nome]', 'Nome a derivar para endereço de e-mail.')
      .action((nome) => {
        process.stdout.write(falseador.pessoa.email(nome));
      });
  }

  private subcomandoCompleta() {
    const { local, data, doc, pessoa: ps, nome: nm } = falseador;

    return new Comando('completa')
      .description(
        'Dados pessoais: nome, nascimento, idade, cpf, email, cidade e UF.',
      )
      .addArgument(gênero)
      .addOption(
        new Option('--json', 'exibe como JSON (padrão).').conflicts('tabela'),
      )
      .option('--tabela', 'exibe como tabela.')
      .action(
        (gênero: Gênero, opções: { tabela?: boolean; json?: boolean }) => {
          const nome = nm.completo(gênero);
          const ddn = data.entrePeríodoEmAnos(new Date(), -100, -18);
          const nascimento = this.#removaHoras(ddn);
          const idade = this.#calculeIdade(ddn);
          const cpf = doc.cpf();
          const email = ps.email(nome);
          const [cidade, estado] = local.cidade();

          const pessoa: Pessoa = {
            nome,
            nascimento,
            idade,
            cpf,
            email,
            cidade,
            estado,
          };

          let resultado = '';

          if (opções?.tabela) resultado = this.#monteTabela(pessoa);
          else resultado = JSON.stringify(pessoa);

          process.stdout.write(resultado);
        },
      );
  }

  #monteTabela(pessoa: Pessoa) {
    let tabela = '';
    Object.entries(pessoa).forEach(([atributo, valor]) => {
      tabela += atributo.padEnd(20) + valor + '\n';
    });
    return tabela.substring(0, tabela.length - 1);
  }

  #removaHoras(data: Date) {
    return data.toISOString().split('T')[0];
  }

  #calculeIdade(data: Date) {
    const hoje = new Date().getTime();
    return Math.floor((hoje - data.getTime()) / 3.15576e10);
  }
}
