import { Número } from './Número';

export class Tipo {
  readonly #número = new Número();

  public booleano(): boolean {
    return Math.random() < 0.5;
  }

  public entre<T>(valores: T[]): T {
    const possibilidades = valores.length;
    if (possibilidades <= 1)
      throw Error('Lista deve ter ao menos 2 itens.');
    
    return valores[this.#número.exclusivoEntreZeroE(possibilidades)];
  }
}
