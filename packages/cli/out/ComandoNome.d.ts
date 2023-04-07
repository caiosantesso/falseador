import { Command } from 'commander';
import { Comando } from './Comando';
export declare class ComandoNome implements Comando {
    #private;
    obtenha(): Command;
    private primeiro;
    private composto;
    private sobrenome;
    private sobrenomes;
    private completo;
    private abreviado;
}
