import { Número } from './Número';
import { Exceção } from '../integridade/Exceção';

export class Texto {
  readonly #número = new Número();
  readonly #acentuadas = [
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
  readonly #alfabeto = Array.from(new Array(26), (_, i) =>
    String.fromCharCode(i + 65),
  );

  public letra(incluiAcentuadas = false): string {
    const letras = [...this.#alfabeto];
    if (incluiAcentuadas) letras.push(...this.#acentuadas);

    const índice = this.#número.exclusivoEntreZeroE(letras.length);
    return letras[índice];
  }

  public removeAcentos(texto: string): string {
    if (typeof texto !== 'string') throw new Exceção('texto deve ser string.');

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

    return [...texto].map((letra) => letrasAcentuadas[letra] ?? letra).join('');
  }
}
