import { Número } from './Número';
import { Tipo } from './Tipo';
import { ListaDeNomes } from './ListaDeNomes';

type Gênero = 'F' | 'M';

export class Nome {
  readonly #número = new Número();
  readonly #tipo = new Tipo();
  readonly #agnomes = new Set([
    'Júnior',
    'Junior',
    'Filho',
    'Segundo',
    'Neto',
    'Terceiro',
    'Irmão',
    'Sobrinho',
    'Filha',
    'Segunda',
    'Neta',
    'Terceira',
    'Irmã',
    'Sobrinha',
  ]);
  readonly #preposições = new Set([
    'dos',
    'das',
    'do',
    'da',
    'de',
    'del',
    'di',
  ]);

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

  public abreviado(nomeCompleto: string): string {
    if (typeof nomeCompleto !== 'string')
      throw new Error('nome deve ser string.');

    const nomes = nomeCompleto
      .trim()
      .split(' ')
      .filter((pedaço) => !this.#preposições.has(pedaço));

    if (nomes.length <= 2) return nomeCompleto;

    const temAgnome = this.#agnomes.has(nomes[nomes.length - 1]);
    if (temAgnome && nomes.length === 3) {
      return nomeCompleto;
    }

    const primeiro = nomes.shift();
    const agnome = temAgnome ? this.agnome(nomes) : '';
    const último = nomes.pop() + agnome;
    const abreviaturas = nomes.map((nome) => nome[0] + '.').join(' ');

    return `${primeiro} ${abreviaturas} ${último}`;
  }

  private agnome(nomes: string[]): string {
    let agnome = nomes.pop();
    agnome = agnome === 'Júnior' || agnome === 'Junior' ? 'Jr.' : agnome;
    return ` ${agnome}`;
  }

  public completoVálido(nomeCompleto: string): boolean {
    if (typeof nomeCompleto !== 'string') return false;

    const nomes = nomeCompleto.split(' ');
    if (!this.éNomeVálido(nomes[0]) || nomes.length <= 1) return false;

    let últimaFoiPreposição = false;
    for (let i = 1; i < nomes.length; i++) {
      const nome = nomes[i];

      if (this.éPreposição(nome)) {
        if (últimaFoiPreposição) return false;
        últimaFoiPreposição = true;
      } else {
        if (!this.éNomeVálido(nome)) return false;
        últimaFoiPreposição = false;
      }
    }

    return !últimaFoiPreposição;
  }

  private éNomeVálido(nome: string): boolean {
    return /^[a-zàáâãçéêíóôõú']{3,}$/i.test(nome);
  }

  private éPreposição(nome: string): boolean {
    return this.#preposições.has(nome.toLowerCase());
  }
}
