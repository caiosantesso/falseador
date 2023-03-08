import { Número } from './Número';
import { Tipo } from './Tipo';
import { ListaDeNomes } from './ListaDeNomes';

type Gênero = 'F' | 'M';

export class Nome {
  readonly #número = new Número();
  readonly #tipo = new Tipo();

  #primeiroComGênero(gênero: Gênero): string {
    const nomes = ListaDeNomes[gênero];
    const índice = this.#número.entreZeroE(nomes.length);
    return nomes[índice];
  }

  public primeiro(gênero?: Gênero): string {
    gênero = gênero?.toUpperCase() as Gênero;
    if (gênero === 'F') return this.#primeiroComGênero(gênero);
    else if (gênero === 'M') return this.#primeiroComGênero(gênero);
    return this.#tipo.booleano()
      ? this.#primeiroComGênero('F')
      : this.#primeiroComGênero('M');
  }

  public composto(gênero?: Gênero): string {
    gênero = gênero?.toUpperCase() as Gênero;
    if (gênero)
      return (
        this.#primeiroComGênero(gênero) + ' ' + this.#primeiroComGênero(gênero)
      );
    return this.#tipo.booleano()
      ? this.#primeiroComGênero('F') + ' ' + this.#primeiroComGênero('F')
      : this.#primeiroComGênero('M') + ' ' + this.#primeiroComGênero('M');
  }

  public sobrenome(): string {
    const { sobrenomes } = ListaDeNomes;
    const índice = this.#número.exclusivoEntreZeroE(sobrenomes.length);
    return sobrenomes[índice];
  }

  public sobrenomes(quantidade?: number): string {
    const número =
      quantidade && quantidade >= 1 ? quantidade : this.#número.entreUmE(3);

    const sobrenomes = [];
    for (let i = 0; i < número; i++) {
      sobrenomes.push(this.sobrenome());
    }
    return sobrenomes.join(' ');
  }
}
