import { Argument } from 'commander';
export declare function validaNúmeroInteiroNãoNegativo(valor: never): number;
export declare function validaNúmeroInteiroPositivo(valor: string): number;
export declare function validaNúmeroMaiorQue1(valor: string): number;
export declare function validaNúmeroInteiro(valor: never): number;
export declare function validaOpçãoNúmeroInteiroPositivo(valor: string, _anterior: number): number;
export declare const gênero: Argument;
export declare const carmesim: (estático: TemplateStringsArray, dinâmico?: string) => string;
