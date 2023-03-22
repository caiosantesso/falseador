import { Número } from './Número';
import { Tipo } from './Tipo';
import { ListaDeNomes } from './ListaDeNomes';

type Gênero = 'F' | 'M';

export class Nome {
  readonly #número = new Número();
  readonly #tipo = new Tipo();

  #primeiroComGênero(gênero: Gênero): string {
    const nomes = ListaDeNomes[gênero];
    const índice = this.#número.exclusivoEntreZeroE(nomes.length);
    return nomes[índice];
  }

  #gêneroVálido(gênero?: Gênero): Gênero {
    gênero = gênero?.toUpperCase() as Gênero;

    return gênero === 'F' || gênero === 'M'
      ? gênero
      : this.#tipo.entre<Gênero>(['F', 'M']);
  }

  public primeiro(gênero?: Gênero): string {
    gênero = this.#gêneroVálido(gênero);

    return this.#primeiroComGênero(gênero);
  }

  public composto(gênero?: Gênero): string {
    gênero = this.#gêneroVálido(gênero);

    return (
      this.#primeiroComGênero(gênero) + ' ' + this.#primeiroComGênero(gênero)
    );
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

  public completo(gênero?: Gênero): string {
    gênero = this.#gêneroVálido(gênero);

    const nome = this.#tipo.booleano()
      ? this.#primeiroComGênero(gênero)
      : this.composto(gênero);

    return `${nome} ${this.sobrenomes()}`;
  }
}
