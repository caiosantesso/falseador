import { Número } from './Número';
import { Exceção } from '../integridade/Exceção';

export class Tipo {
  readonly #número = new Número();

  public booleano(): boolean {
    return Math.random() < 0.5;
  }

  public entre<T>(valores: T[]): T {
    const possibilidades = valores.length;
    if (possibilidades <= 1)
      throw new Exceção('Lista deve ter ao menos 2 itens.');

    return valores[this.#número.exclusivoEntreZeroE(possibilidades)];
  }

  public cópiaEmbaralhada<T>(original: T[]): T[] {
    if (original.length <= 1)
      throw new Exceção('Lista deve ter ao menos 2 itens.');

    const cópia: T[] = new Array(original.length);

    for (let i = 0; i < original.length; i++) {
      const aleatório = i === 0 ? 0 : this.#número.entreZeroE(i);
      cópia[i] = cópia[aleatório];
      cópia[aleatório] = original[i];
    }

    return cópia;
  }
}
