import { Nome } from './Nome';
import { Número } from './Número';
import { Texto } from './Texto';
import { Tipo } from './Tipo';

export class Pessoa {
  readonly #domínios = [
    'gmail.com',
    'outlook.com',
    'yahoo.com.br',
    'terra.com.br',
    'icloud.com',
    'hotmail.com',
    'uol.com.br',
    'bol.com.br',
  ];

  readonly #nome = new Nome();
  readonly #tipo = new Tipo();
  readonly #texto = new Texto();
  readonly #número = new Número();
  readonly #estratégiaLocal = [
    this.#iniciais,
    this.#primeiroMaisIniciais,
    this.#iniciaisMaisÚltimo,
    this.#abreviado,
    this.#primeiroEÚltimo,
  ];

  #iniciais(nomeCompleto: string) {
    return this.#nome
      .abreviado(nomeCompleto)
      .split(' ')
      .map((nome: string) => nome[0])
      .join('');
  }

  #primeiroMaisIniciais(nomeCompleto: string) {
    return this.#nome
      .abreviado(nomeCompleto)
      .split(' ')
      .map((nome: string, índice: number, nomes: string[]) =>
        índice + 1 === nomes.length ? ` ${nome}` : nome[0],
      )
      .join('');
  }

  #iniciaisMaisÚltimo(nomeCompleto: string) {
    return this.#nome
      .abreviado(nomeCompleto)
      .split(' ')
      .map((nome: string, índice: number) =>
        índice === 0 ? `${nome} ` : nome[0],
      )
      .join('');
  }

  #abreviado(nomeCompleto: string) {
    return this.#nome
      .abreviado(nomeCompleto)
      .replaceAll(/\. (?=[A-Z]\.)/g, '')
      .replaceAll(/\./g, '');
  }

  #primeiroEÚltimo(nomeCompleto: string) {
    return this.#nome.abreviado(nomeCompleto).replaceAll(/ .\./g, '');
  }

  public email(nomeCompleto?: string): string {
    if (!nomeCompleto || !this.#nome.completoVálido(nomeCompleto))
      nomeCompleto = this.#nome.completo();

    const estratégia = this.#tipo.entre(this.#estratégiaLocal);
    nomeCompleto = estratégia.call(this, nomeCompleto);

    const partes = nomeCompleto.split(' ');

    const separador = this.#tipo.entre(['', '_', '.']);
    let local = partes.join(separador);

    if (this.#tipo.booleano()) {
      const sufixo = this.#tipo.booleano()
        ? this.#número.entreZeroE(73) + 1950
        : this.#número.entreZeroE(99);
      local += sufixo;
    }

    local = this.#texto.removeAcentos(local).toLowerCase();

    const domínio = this.#tipo.entre(this.#domínios);

    return `${local}@${domínio}`;
  }
}
