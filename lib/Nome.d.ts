type Gênero = 'F' | 'M';
export declare class Nome {
    #private;
    primeiro(gênero?: Gênero): string;
    composto(gênero?: Gênero): string;
    sobrenome(): string;
    sobrenomes(quantidade?: number): string;
}
export {};
