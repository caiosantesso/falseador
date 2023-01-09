import { Número } from './Número';

export class Texto {
  private número = new Número();

  public letra(): string {
    const código = this.número.exclusivoEntreZeroE(26) + 65;
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
    const índice = this.número.exclusivoEntreZeroE(letras.length);
    return letras[índice];
  }
}
