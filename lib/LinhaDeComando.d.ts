import { Falseador } from './Falseador';
export declare class LinhaDeComando {
    #private;
    private falseador;
    constructor(falseador: Falseador);
    execute(): void;
}
