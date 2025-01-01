import { falseador } from '@falseador/lib';
import { validaOpçãoNúmeroInteiroPositivo } from './Utilitários';
import { Comando } from './Comando';

export class ComandoData extends Comando {
  public constructor() {
    super('data');
    super
      .description('Gera data.')
      .alias('dt')
      .addCommand(this.entrePeriodoEmAnos());
  }

  private entrePeriodoEmAnos() {
    return new Comando('futura')
      .description('Entre hoje e intervalo em anos no futuro.')
      .option(
        '-b, --base <data>',
        'Data base no formato aaaa-mm-dd. Padrão: hoje.',
      )
      .option(
        '-i, --inf <anos>',
        'Limite inferior (em anos). Padrão: hoje em diante.',
        validaOpçãoNúmeroInteiroPositivo,
        0,
      )
      .option(
        '-s, --sup <anos>',
        'Limite superior (em anos). Padrão: até um ano e zero dias a frente.',
        validaOpçãoNúmeroInteiroPositivo,
        1,
      )
      .action((opções: { base?: string; inf: string; sup: string }) => {
        const referência = opções.base ? new Date(opções.base) : new Date();

        const limiteInf = parseInt(opções.inf);
        const limiteSup = parseInt(opções.sup);

        const dataHora = falseador.data.entrePeríodoEmAnos(
          referência,
          limiteInf,
          limiteSup,
        );
        const data = dataHora.toISOString().split('T')[0];
        console.info(data);
      });
  }
}
