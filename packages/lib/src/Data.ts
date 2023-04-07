import { Validações } from './Validações';
import { falseador } from './index';
import { Exception } from './Exception';

export class Data {
  static readonly #milisEmUmDia = 24 * 60 * 60 * 1000;

  #limiteEmMili(data: Date, limite: number, ajusteEmMili: number): number {
    Validações.númeroInteiro(limite);
    const maisAnos = data.getFullYear() + limite;
    return new Date(data).setFullYear(maisAnos) + ajusteEmMili;
  }

  public entrePeríodoEmAnos(
    data: Date,
    limiteInf: number | null,
    limiteSup: number | null,
  ): Date {
    Validações.data(data);

    if (limiteInf === null && limiteSup === null)
      throw new Exception('Ambos não podem ser nulos.');

    if (limiteInf !== null && limiteSup !== null && limiteInf > limiteSup) {
      [limiteSup, limiteInf] = [limiteInf, limiteSup];
    }

    let inferiorEmMili: number;
    if (limiteInf === null) {
      inferiorEmMili = data.getTime();
    } else {
      inferiorEmMili =
        limiteInf <= 0
          ? this.#limiteEmMili(data, limiteInf - 1, Data.#milisEmUmDia)
          : this.#limiteEmMili(data, limiteInf, 0);
    }

    let superiorEmMili: number;
    if (limiteSup === null) {
      superiorEmMili = data.getTime();
    } else {
      superiorEmMili =
        limiteSup >= 0
          ? this.#limiteEmMili(data, limiteSup + 1, Data.#milisEmUmDia)
          : this.#limiteEmMili(data, limiteSup, 0);
    }

    const dataEmMili = falseador.número.entre(inferiorEmMili, superiorEmMili);

    return new Date(dataEmMili);
  }
}
