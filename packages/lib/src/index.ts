import { Falseador } from './Falseador';
import { ListaDeLocais, UFSigla } from './coleções/ListaDeLocais';
import { Gênero } from './módulos/Nome';
import { Validações } from './integridade/Validações';
import { Exceção } from './integridade/Exceção';

export const falseador = new Falseador();
export const util = {
  ufs: ListaDeLocais.ufs,
  númeroInteiroPositivoOuLançaErro: Validações.númeroInteiroPositivo,
  númeroInteiroNãoNegativoOuLançaErro: Validações.númeroInteiroNãoNegativo,
  númeroInteiroOuLançaErro: Validações.númeroInteiro,
  Exceção: Exceção,
};

export type { Gênero, UFSigla };
