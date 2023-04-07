import { Command } from 'commander';
import { Comando } from './Comando';
export declare class CommandoPessoa implements Comando {
    #private;
    obtenha(): Command;
    private email;
    private completa;
}
