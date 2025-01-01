import { falseador } from '@falseador/lib';
import {
  validaNúmeroInteiro,
  validaNúmeroInteiroNãoNegativo,
  validaNúmeroInteiroPositivo,
  validaNúmeroMaiorQue1,
} from './Utilitários';
import { Comando } from './Comando';

export class ComandoNúmero extends Comando {
  public constructor() {
    super('numero');

    super
      .description('Gera números aleatórios.')
      .alias('no')
      .addCommand(this.subcomandoZero())
      .addCommand(this.subcomandoUm())
      .addCommand(this.subcomandoEntre(), { isDefault: true })
      .addCommand(this.subcomandoRomano())
      .addCommand(this.subcomandoExtenso());
  }

  private subcomandoZero() {
    return new Comando('0')
      .description('entre zero e x.')
      .argument('x', 'Limite superior.', validaNúmeroInteiroPositivo)
      .option('--exclusivo', 'exclui limite superior.', false)
      .action((x: number, opções: { exclusivo: boolean }) => {
        const resultado = falseador.número.entreZeroE(x, !opções.exclusivo);
        console.info(resultado.toString());
      });
  }

  private subcomandoUm() {
    return new Comando('1')
      .description('entre um e x.')
      .argument('x', 'Limite superior.', validaNúmeroMaiorQue1)
      .option('--exclusivo', 'exclui limite superior.', false)
      .action((x: number, opções: { exclusivo: boolean }) => {
        const resultado = falseador.número.entreUmE(x, !opções.exclusivo);
        console.info(resultado.toString());
      });
  }

  private subcomandoEntre() {
    return new Comando('entre')
      .description(
        'entre y e z, inclusivos.\nUtilize "\\ " para especificar negativos, p. ex:\n\tfalseador no entre \\ -7 10',
      )
      .argument('y', 'Limite inferior.', validaNúmeroInteiro)
      .argument('z', 'Limite superior.', validaNúmeroInteiro)
      .action((y: number, z: number) => {
        const resultado = falseador.número.entre(y, z);
        console.info(resultado.toString());
      });
  }

  private subcomandoRomano() {
    return new Comando('romano')
      .description('inteiro positivo para número romano.')
      .argument(
        'x',
        'número arábico entre 1 e 3999.',
        validaNúmeroInteiroPositivo,
      )
      .action((x: number) => {
        const resultado = falseador.número.romano(x);
        console.info(resultado);
      });
  }

  private subcomandoExtenso() {
    return new Comando('porextenso')
      .description('inteiro não-negativo por extenso.')
      .alias('pe')
      .argument(
        'x',
        'número arábico entre 0 e 999999999999.',
        validaNúmeroInteiroNãoNegativo,
      )
      .action((x: number) => {
        const resultado = falseador.número.porExtenso(x);
        console.info(resultado);
      });
  }
}
