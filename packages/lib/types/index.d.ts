import { Falseador } from './Falseador';
import { UFSigla } from './coleções/ListaDeLocais';
import { Gênero } from './módulos/Nome';
import { Validações } from './integridade/Validações';
import { Exceção } from './integridade/Exceção';
export declare const falseador: Falseador;
export declare const util: {
    ufs: Map<UFSigla, string>;
    númeroInteiroPositivoOuLançaErro: typeof Validações.númeroInteiroPositivo;
    númeroInteiroNãoNegativoOuLançaErro: typeof Validações.númeroInteiroNãoNegativo;
    númeroInteiroOuLançaErro: typeof Validações.númeroInteiro;
    Exceção: typeof Exceção;
};
export type { Gênero, UFSigla };
