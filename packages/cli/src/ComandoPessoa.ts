import { Argument, Command, Option } from 'commander';
import { falseador, Gênero, UF } from 'falseador-lib';
import { Comando } from './Comando';

type Pessoa = {
  nome: string;
  nascimento: string;
  idade: number;
  email: string;
  cpf: string;
  cidade: string;
  estado: UF;
};

export class CommandoPessoa implements Comando {
  readonly #argGênero = new Argument('[gênero]', 'F, M ou nenhum.').choices([
    'F',
    'f',
    'm',
    'M',
  ]);

  public obtenha(): Command {
    return new Command('pessoa')
      .description('Gera dados pessoais.')
      .alias('p')
      .addCommand(this.completa(), { isDefault: true })
      .addCommand(this.email());
  }

  private email() {
    return new Command('email')
      .description('e-mail pessoal.')
      .argument('[nome]', 'Nome a derivar para endereço de e-mail.')
      .action((nome) => {
        console.info(falseador.pessoa.email(nome));
      });
  }

  private completa() {
    const { local, data, doc, pessoa: ps, nome: nm } = falseador;

    return new Command('completa')
      .description('Dados pessoais.')
      .addArgument(this.#argGênero)
      .addOption(new Option('--json', 'exibe como JSON.').conflicts('tabela'))
      .option('--tabela', 'exibe como tabela.')
      .action(
        (gênero: Gênero, opções: { tabela?: boolean; json?: boolean }) => {
          const nome = nm.completo(gênero);
          const ddn = data.entrePeríodoEmAnos(new Date(), -100, -18);
          const idade = Math.floor(
            (new Date().getTime() - ddn.getTime()) / 3.15576e10,
          );
          const [cidade, estado] = local.cidade();

          const pessoa: Pessoa = {
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
          } else resultado = JSON.stringify(pessoa);

          console.info(resultado);
        },
      );
  }
}
