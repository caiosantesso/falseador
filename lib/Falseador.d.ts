import { Número } from './Número';
import { Nome } from './Nome';
import { Tipo } from './Tipo';
import { Documento } from './Documento';
import { Texto } from './Texto';
import { Pessoa } from './Pessoa';
export declare class Falseador {
    #private;
    get nome(): Nome;
    get número(): Número;
    get tipo(): Tipo;
    get texto(): Texto;
    get doc(): Documento;
    get pessoa(): Pessoa;
}
