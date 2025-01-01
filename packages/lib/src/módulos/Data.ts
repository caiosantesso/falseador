import { Validações } from '../integridade/Validações';
import { falseador } from '../index';
import { Exceção } from '../integridade/Exceção';

export class Data {
  static readonly #milisEmUmDia = 24 * 60 * 60 * 1000;

  #limiteEmMili(data: Date, limite: number, ajusteEmMili: number): number {
    Validações.númeroInteiro(limite);
    const maisAnos = data.getFullYear() + limite;
    return new Date(data).setFullYear(maisAnos) + ajusteEmMili;
  }

  /**
   *
   * @param {Date} data
   * @param {number} limiteInf data a partir de <limiteInf> e 0 dias.
   * @param {number} limiteSup data até <limiteSup> ano(s) e 0 dias.
   */
  public entrePeríodoEmAnos(
    data: Date,
    limiteInf: number,
    limiteSup: number,
  ): Date {
    Validações.data(data);
    Validações.númeroInteiro(limiteInf);
    Validações.númeroInteiro(limiteSup);

    data.setHours(0, 0, 0, 0);

    if (limiteInf === 0 && limiteSup === 0)
      throw new Exceção('Ambos não podem ser zero.');

    if (limiteInf !== 0 && limiteSup !== 0 && limiteInf > limiteSup) {
      [limiteSup, limiteInf] = [limiteInf, limiteSup];
    }

    let inferiorEmMili: number;
    if (limiteInf === 0) {
      inferiorEmMili = data.getTime();
    } else {
      inferiorEmMili = this.#limiteEmMili(data, limiteInf, 1);
    }

    let superiorEmMili: number;
    if (limiteSup === 0) {
      superiorEmMili = data.getTime();
    } else {
      superiorEmMili = this.#limiteEmMili(
        data,
        limiteSup,
        Data.#milisEmUmDia - 1,
      );
    }

    const dataEmMili = falseador.número.entre(inferiorEmMili, superiorEmMili);

    return new Date(dataEmMili);
  }
}
