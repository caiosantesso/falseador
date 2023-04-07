import { ListaDeCidades } from './ListaDeCidades';
import { Número } from './Número';

export enum UF {
  AC = 'Acre',
  AL = 'Alagoas',
  AP = 'Amapá',
  AM = 'Amazonas',
  BA = 'Bahia',
  CE = 'Ceará',
  DF = 'Distrito Federal',
  ES = 'Espírito Santo',
  GO = 'Goiás',
  MA = 'Maranhão',
  MT = 'Mato Grosso',
  MS = 'Mato Grosso do Sul',
  MG = 'Minas Gerais',
  PA = 'Pará',
  PB = 'Paraíba',
  PR = 'Paraná',
  PE = 'Pernambuco',
  PI = 'Piauí',
  RJ = 'Rio de Janeiro',
  RN = 'Rio Grande do Norte',
  RS = 'Rio Grande do Sul',
  RO = 'Rondônia',
  RR = 'Roraima',
  SC = 'Santa Catarina',
  SP = 'São Paulo',
  SE = 'Sergipe',
  TO = 'Tocantins',
}

export class Local {
  readonly #número = new Número();

  public cidade(uf?: UF): [string, UF] {
    let cidades = ListaDeCidades.cidades;
    if (uf && Object.keys(UF).includes(uf.toUpperCase()))
      cidades = cidades.filter((c) => c[1] === uf.toUpperCase());

    const índice = this.#número.exclusivoEntreZeroE(cidades.length);
    const cidade = cidades[índice];
    const nomeDaCidade = cidade[2];
    const ufSigla = cidade[1] as UF;
    return [nomeDaCidade, ufSigla];
  }
}
