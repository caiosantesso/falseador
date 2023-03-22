import { Falseador } from './Falseador';
export declare class LinhaDeComando {
    #private;
    private readonly falseador;
    constructor(falseador: Falseador);
    execute(): void;
}
