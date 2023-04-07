import { Command } from 'commander';
import { Comando } from './Comando';
export declare class CommandoLocal implements Comando {
    #private;
    obtenha(): Command;
    private cidade;
}
