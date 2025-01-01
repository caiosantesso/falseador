export declare class Data {
    #private;
    /**
     *
     * @param {Date} data
     * @param {number} limiteInf data a partir de <limiteInf> e 0 dias.
     * @param {number} limiteSup data até <limiteSup> ano(s) e 0 dias.
     */
    entrePeríodoEmAnos(data: Date, limiteInf: number, limiteSup: number): Date;
}
