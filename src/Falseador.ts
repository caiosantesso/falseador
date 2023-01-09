import { Número } from './Número';
import { Nome } from './Nome';
import { Tipo } from './Tipo';
import { Documento } from './Documento';
import { Texto } from './Texto';

export class Falseador {
  private readonly nomes = new Nome();
  private readonly números = new Número();
  private readonly tipos = new Tipo();
  private readonly textos = new Texto();
  private readonly documentos = new Documento();

  get nome(): Nome {
    return this.nomes;
  }

  get número(): Número {
    return this.números;
  }

  get tipo(): Tipo {
    return this.tipos;
  }

  get texto(): Texto {
    return this.textos;
  }

  get doc(): Documento {
    return this.documentos;
  }
}
