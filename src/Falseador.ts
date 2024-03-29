import { Número } from './Número';
import { Nome } from './Nome';
import { Tipo } from './Tipo';
import { Documento } from './Documento';
import { Texto } from './Texto';
import { Pessoa } from './Pessoa';

export class Falseador {
  readonly #categoriaNome = new Nome();
  readonly #categoriaNúmero = new Número();
  readonly #categoriaTipo = new Tipo();
  readonly #categoriaTexto = new Texto();
  readonly #categoriaDocumento = new Documento();
  readonly #categoriaPessoa = new Pessoa();

  get nome(): Nome {
    return this.#categoriaNome;
  }

  get número(): Número {
    return this.#categoriaNúmero;
  }

  get tipo(): Tipo {
    return this.#categoriaTipo;
  }

  get texto(): Texto {
    return this.#categoriaTexto;
  }

  get doc(): Documento {
    return this.#categoriaDocumento;
  }

  get pessoa(): Pessoa {
    return this.#categoriaPessoa;
  }
}
