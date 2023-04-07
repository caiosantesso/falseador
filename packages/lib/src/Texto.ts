import { Número } from './Número';
import { Exception } from './Exception';

export class Texto {
  readonly #número = new Número();

  public letra(): string {
    const código = this.#número.exclusivoEntreZeroE(26) + 65;
    return String.fromCharCode(código);
  }

  public letraAcentuada(): string {
    const letras = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'À',
      'Á',
      'Â',
      'Ã',
      'Ç',
      'É',
      'Ê',
      'Í',
      'Ó',
      'Ô',
      'Õ',
      'Ú',
    ];
    const índice = this.#número.exclusivoEntreZeroE(letras.length);
    return letras[índice];
  }

  public removeAcentos(palavra: string): string {
    if (typeof palavra !== 'string')
      throw new Exception('palavra deve ser string.');

    const letrasAcentuadas: { [key: string]: string } = {
      À: 'A',
      Á: 'A',
      Â: 'A',
      Ã: 'A',
      Ç: 'C',
      É: 'E',
      Ê: 'E',
      Í: 'I',
      Ó: 'O',
      Ô: 'O',
      Õ: 'O',
      Ú: 'U',
      à: 'a',
      á: 'a',
      â: 'a',
      ã: 'a',
      ç: 'c',
      é: 'e',
      ê: 'e',
      í: 'i',
      ó: 'o',
      ô: 'o',
      õ: 'o',
      ú: 'u',
    };

    return [...palavra]
      .map((letra) => letrasAcentuadas[letra] ?? letra)
      .join('');
  }
}
