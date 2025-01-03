export type Gênero = 'F' | 'M';
export declare class Nome {
    #private;
    primeiro(gênero?: Gênero): string;
    composto(gênero?: Gênero): string;
    sobrenome(): string;
    sobrenomes(quantidade?: number): string;
    completo(gênero?: Gênero): string;
    abreviado(nomeCompleto: string): string;
    private agnome;
    éNomeCompletoVálido(nomeCompleto: string): boolean;
    private éNomeVálido;
    private éPreposição;
}
