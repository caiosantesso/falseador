import { ListaDeLocais, UFSigla } from '../coleções/ListaDeLocais';
import { Número } from './Número';

export class Local {
  readonly #número = new Número();

  public cidade(uf?: string): [string, UFSigla] {
    let cidades = ListaDeLocais.cidades;
    if (uf && ListaDeLocais.ufs.has(<UFSigla>uf.toUpperCase())) {
      cidades = cidades.filter((c) => c[1] === uf.toUpperCase());
    }

    const índice =
      cidades.length === 1
        ? 0
        : this.#número.exclusivoEntreZeroE(cidades.length);
    const cidade = cidades[índice];
    const nomeDaCidade = cidade[2];
    const ufSigla = cidade[1];
    return [nomeDaCidade, ufSigla];
  }
}
