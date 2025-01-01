import { falseador } from '@falseador/lib';
import { gênero, validaNúmeroInteiroPositivo } from './Utilitários';
import { Comando } from './Comando';

export class ComandoNome extends Comando {
  public constructor() {
    super('nome');

    super
      .description('Gera/transforma nomes.')
      .alias('n')
      .addCommand(this.subcomandoCompleto(), { isDefault: true })
      .addCommand(this.subcomandoSobrenomes())
      .addCommand(this.subcomandoComposto())
      .addCommand(this.subcomandoAbreviado())
      .addCommand(this.subcomandoPrimeiro());
  }

  private subcomandoCompleto() {
    return new Comando('completo')
      .description('Nome completo.')
      .addArgument(gênero)
      .allowExcessArguments(false)
      .action((gênero) => {
        console.info(falseador.nome.completo(gênero));
      });
  }

  private subcomandoPrimeiro() {
    return new Comando('primeiro')
      .description('Primeiro nome.')
      .addArgument(gênero)
      .allowExcessArguments(false)
      .action((gênero) => {
        console.info(falseador.nome.primeiro(gênero));
      });
  }

  private subcomandoComposto() {
    return new Comando('composto')
      .description('Nome composto.')
      .addArgument(gênero)
      .allowExcessArguments(false)
      .action((gênero) => {
        console.info(falseador.nome.composto(gênero));
      });
  }

  private subcomandoSobrenomes() {
    return new Comando('sobrenomes')
      .description('Conjunto de sobrenomes.')
      .argument(
        '[num]',
        'Número de sobrenomes, entre 1 e 3 caso indefinido.',
        validaNúmeroInteiroPositivo,
      )
      .allowExcessArguments(false)
      .action((num) => {
        console.info(falseador.nome.sobrenomes(num));
      });
  }

  private subcomandoAbreviado() {
    return new Comando('abreviado')
      .description('Abrevia nomes.')
      .argument('nome', 'Nome a ser abreviado entre aspas.')
      .action((nome) => {
        console.info(falseador.nome.abreviado(nome));
      });
  }
}
