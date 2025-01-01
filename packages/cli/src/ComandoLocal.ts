import { Argument } from 'commander';
import { falseador, type UFSigla, util } from '@falseador/lib';
import { Comando } from './Comando';

export class ComandoLocal extends Comando {
  public constructor() {
    super('local');

    super
      .description('Obtém municípios.')
      .alias('l')
      .addCommand(this.subcomandoCidade(), { isDefault: true });
  }

  private subcomandoCidade() {
    const uf = new Argument('[uf]', 'Unidade Federativa').choices([
      ...util.ufs.keys(),
    ]);

    return new Comando('cidade')
      .description('cidade brasileira.')
      .addArgument(uf)
      .option('--sem-uf', 'remove UF após cidade.')
      .action((uf: UFSigla, opções: { semUf?: boolean }) => {
        const local = falseador.local.cidade(uf);
        const estado = `${opções.semUf ? '' : ` - ${local[1]}`}`;
        process.stdout.write(`${local[0]}${estado}`);
      });
  }
}
