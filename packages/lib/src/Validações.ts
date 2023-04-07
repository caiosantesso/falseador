import { Exception } from './Exception';

/* eslint @typescript-eslint/no-explicit-any : 0*/
export class Validações {
  static númeroInteiroPositivo(número: any): void {
    if (!Number.isInteger(número))
      throw new Exception(`Número deve ser inteiro. Recebido ${número}.`);

    if (número < 0)
      throw new Exception(`Número deve ser positivo. Recebido ${número}.`);

    if (número > Number.MAX_SAFE_INTEGER)
      throw new Exception(
        `Número deve estar dentro do limite de inteiros. Recebido ${número}.`,
      );
  }

  static númeroInteiro(número: any): void {
    if (!Number.isInteger(número))
      throw new Exception(`Número deve ser inteiro. Recebido ${número}.`);

    if (número > Number.MAX_SAFE_INTEGER || número < Number.MIN_SAFE_INTEGER)
      throw new Exception(
        `Número deve estar dentro do limite de inteiros. Recebido ${número}.`,
      );
  }

  static data(data: any): void {
    if (!(data instanceof Date))
      throw new Exception(`Data inválida. Recebido ${data}`);
  }
}
