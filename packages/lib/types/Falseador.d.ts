import { Número } from './módulos/Número';
import { Nome } from './módulos/Nome';
import { Tipo } from './módulos/Tipo';
import { Documento } from './módulos/Documento';
import { Texto } from './módulos/Texto';
import { Pessoa } from './módulos/Pessoa';
import { Data } from './módulos/Data';
import { Local } from './módulos/Local';
export declare class Falseador {
    #private;
    get nome(): Nome;
    get número(): Número;
    get tipo(): Tipo;
    get texto(): Texto;
    get doc(): Documento;
    get pessoa(): Pessoa;
    get local(): Local;
    get data(): Data;
}
