import { Número } from './Número';

export class Documento {
  private número = new Número();

  private criaVetor(largura: number, dígitoLimite: number) {
    return Array.from(Array(largura), () =>
      this.número.entreZeroE(dígitoLimite)
    );
  }

  private mod(dividendo: number, divisor: number) {
    return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
  }

  public cpf() {
    const d = this.criaVetor(9, 9);

    const penúltimo =
      d[8] * 2 +
      d[7] * 3 +
      d[6] * 4 +
      d[5] * 5 +
      d[4] * 6 +
      d[3] * 7 +
      d[2] * 8 +
      d[1] * 9 +
      d[0] * 10;
    d[9] = 11 - this.mod(penúltimo, 11);
    if (d[9] >= 10) d[9] = 0;

    const último =
      d[9] * 2 +
      d[8] * 3 +
      d[7] * 4 +
      d[6] * 5 +
      d[5] * 6 +
      d[4] * 7 +
      d[3] * 8 +
      d[2] * 9 +
      d[1] * 10 +
      d[0] * 11;
    d[10] = 11 - this.mod(último, 11);
    if (d[10] >= 10) d[10] = 0;

    return d.join('');
  }

  public cnpj() {
    const d = this.criaVetor(8, 9);
    d[8] = 0;
    d[9] = 0;
    d[10] = 0;
    d[11] = 1;

    const penúltimo =
      d[11] * 2 +
      d[10] * 3 +
      d[9] * 4 +
      d[8] * 5 +
      d[7] * 6 +
      d[6] * 7 +
      d[5] * 8 +
      d[4] * 9 +
      d[3] * 2 +
      d[2] * 3 +
      d[1] * 4 +
      d[0] * 5;
    d[12] = 11 - this.mod(penúltimo, 11);
    if (d[12] >= 10) d[12] = 0;

    const último =
      d[12] * 2 +
      d[11] * 3 +
      d[10] * 4 +
      d[9] * 5 +
      d[8] * 6 +
      d[7] * 7 +
      d[6] * 8 +
      d[5] * 9 +
      d[4] * 2 +
      d[3] * 3 +
      d[2] * 4 +
      d[1] * 5 +
      d[0] * 6;
    d[13] = 11 - this.mod(último, 11);
    if (d[13] >= 10) d[13] = 0;

    return d.join('');
  }
}
