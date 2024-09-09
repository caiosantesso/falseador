import { Exceção } from './Exceção';

/* eslint @typescript-eslint/no-explicit-any : 0*/
export class Validações {
  private static inteiroOuLançaErro(número: any) {
    if (!Number.isInteger(número))
      throw new Exceção(`Número deve ser inteiro. Recebido ${número}.`);
  }

  private static menorQueInteiroLimiteOuLançaErro(número: any) {
    if (número > Number.MAX_SAFE_INTEGER)
      throw new Exceção(
        `Número deve estar dentro do limite de inteiros. Recebido ${número}.`,
      );
  }

  static númeroInteiroNãoNegativo(número: any): void {
    Validações.inteiroOuLançaErro(número);
    Validações.menorQueInteiroLimiteOuLançaErro(número);

    if (número < 0)
      throw new Exceção(`Número deve ser não-negativo. Recebido ${número}.`);
  }

  static númeroInteiroPositivo(número: any): void {
    Validações.inteiroOuLançaErro(número);
    Validações.menorQueInteiroLimiteOuLançaErro(número);

    if (número < 1)
      throw new Exceção(`Número deve ser positivo. Recebido ${número}.`);
  }

  static númeroInteiro(número: any): void {
    Validações.inteiroOuLançaErro(número);

    if (número > Number.MAX_SAFE_INTEGER || número < Number.MIN_SAFE_INTEGER)
      throw new Exceção(
        `Número deve estar dentro do limite de inteiros. Recebido ${número}.`,
      );
  }

  static data(data: any): void {
    if (!(data instanceof Date) || data.toString() === 'Invalid Date')
      throw new Exceção(`Data inválida. Recebido ${data}`);
  }
}
