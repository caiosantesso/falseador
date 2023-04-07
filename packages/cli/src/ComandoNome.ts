import { Argument, Command } from 'commander';
import { falseador } from 'falseador-lib';
import { Comando } from './Comando';

export class ComandoNome implements Comando {
  readonly #gêneroArgumento = new Argument(
    '[gênero]',
    'F, M ou nenhum',
  ).choices(['F', 'f', 'm', 'M']);

  public obtenha(): Command {
    return new Command('nome')
      .description('Gera/transforma nomes.')
      .alias('n')
      .addCommand(this.completo(), { isDefault: true })
      .addCommand(this.sobrenome())
      .addCommand(this.sobrenomes())
      .addCommand(this.composto())
      .addCommand(this.abreviado())
      .addCommand(this.primeiro());
  }

  private primeiro() {
    return new Command('primeiro')
      .description('Primeiro nome.')
      .addArgument(this.#gêneroArgumento)
      .action((gênero) => {
        console.info(falseador.nome.primeiro(gênero));
      });
  }

  private composto() {
    return new Command('composto')
      .description('Nome composto.')
      .addArgument(this.#gêneroArgumento)
      .action((gênero) => {
        console.info(falseador.nome.composto(gênero));
      });
  }

  private sobrenome() {
    return new Command('sobrenome')
      .description('Sobrenome único.')
      .action(() => {
        console.info(falseador.nome.sobrenome());
      });
  }

  private sobrenomes() {
    return new Command('sobrenomes')
      .description('Conjunto de sobrenomes.')
      .argument('[num]', 'Número de sobrenomes, entre 1 e 3 caso indefinido.')
      .action((num) => {
        console.info(falseador.nome.sobrenomes(num));
      });
  }

  private completo() {
    return new Command('completo')
      .description('Nome completo.')
      .addArgument(this.#gêneroArgumento)
      .action((gênero) => {
        console.info(falseador.nome.completo(gênero));
      });
  }

  private abreviado() {
    return new Command('abreviado')
      .description('Abrevia nomes.')
      .argument('nome', 'Nome a ser abreviado entre aspas.')
      .action((nome) => {
        console.info(falseador.nome.abreviado(nome));
      });
  }
}
