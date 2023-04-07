import { Argument, Command } from 'commander';
import { falseador, UF } from 'falseador-lib';
import { Comando } from './Comando';

export class CommandoLocal implements Comando {
  readonly #argUF = new Argument(
    '[uf]',
    'Unidade Federativa ou nenhuma.',
  ).choices(Object.keys(UF));

  public obtenha(): Command {
    return new Command('local')
      .description('Obtém municípios.')
      .alias('l')
      .addCommand(this.cidade(), { isDefault: true });
  }

  private cidade() {
    return new Command('cidade')
      .description('cidade brasileira.')
      .addArgument(this.#argUF)
      .option('--sem-sigla', 'remove UF após cidade.')
      .action((uf: UF, opções: { semSigla?: boolean }) => {
        const local = falseador.local.cidade(uf);
        const estado = `${opções.semSigla ? '' : ` - ${local[1]}`}`;
        console.info(`${local[0]}${estado}`);
      });
  }
}
