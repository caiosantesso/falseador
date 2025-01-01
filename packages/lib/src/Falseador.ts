import { Número } from './módulos/Número';
import { Nome } from './módulos/Nome';
import { Tipo } from './módulos/Tipo';
import { Documento } from './módulos/Documento';
import { Texto } from './módulos/Texto';
import { Pessoa } from './módulos/Pessoa';
import { Data } from './módulos/Data';
import { Local } from './módulos/Local';

export class Falseador {
  readonly #categoriaNome = new Nome();
  readonly #categoriaNúmero = new Número();
  readonly #categoriaTipo = new Tipo();
  readonly #categoriaTexto = new Texto();
  readonly #categoriaDocumento = new Documento();
  readonly #categoriaPessoa = new Pessoa();
  readonly #categoriaLocal = new Local();
  readonly #categoriaData = new Data();

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

  get local(): Local {
    return this.#categoriaLocal;
  }

  get data(): Data {
    return this.#categoriaData;
  }
}
