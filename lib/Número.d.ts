export declare class Número {
    entreZeroE(limite: number, inclusivo?: boolean): number;
    exclusivoEntreZeroE(limite: number): number;
    entreUmE(limite: number, inclusivo?: boolean): number;
    exclusivoEntreUmE(limite: number): number;
    private dígitoRomano;
    romano(número: number): string;
    private unidades;
    private dezenas;
    private centenas;
    private dezenaPorExtenso;
    private centenaPorExtenso;
    private milharesPorExtenso;
    porExtenso(número: number): string;
}
