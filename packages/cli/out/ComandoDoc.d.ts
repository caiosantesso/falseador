import { Command } from 'commander';
import { Comando } from './Comando';
export declare class ComandoDoc implements Comando {
    obtenha(): Command;
    private cpf;
    private cnpj;
}
