export class Número {
  public entreZeroE(limite: number, inclusivo = true): number {
    if ((inclusivo && limite <= 0) || (!inclusivo && limite <= 1))
      throw new Error('Número limite inválido.');

    inclusivo && limite++;
    return Math.floor(limite * Math.random());
  }

  public exclusivoEntreZeroE(limite: number): number {
    return this.entreZeroE(limite, false);
  }

  public entreUmE(limite: number, inclusivo = true): number {
    return this.entreZeroE(limite - 1, inclusivo) + 1;
  }

  public exclusivoEntreUmE(limite: number): number {
    return this.entreUmE(limite, false);
  }

  private dígitoRomano(dígito: number, base10: number): string {
    if (dígito >= 1 && dígito <= 3) {
      return ['I', 'X', 'C', 'M'][base10].repeat(dígito);
    } else if (dígito === 4) {
      return this.dígitoRomano(1, base10) + this.dígitoRomano(5, base10);
    } else if (dígito === 5) {
      return ['V', 'L', 'D'][base10];
    } else if (dígito >= 6 && dígito <= 8) {
      return (
        this.dígitoRomano(5, base10) + this.dígitoRomano(dígito - 5, base10)
      );
    } else if (dígito === 9) {
      return this.dígitoRomano(1, base10) + this.dígitoRomano(1, base10 + 1);
    }
    return '';
  }

  public romano(número: number): string {
    if (número <= 0 || número >= 4000)
      throw Error('Número romano inválido. Escolha entre 1 e 3999.');
    const milhar = this.dígitoRomano(Math.trunc(número / 1000), 3);
    número %= 1000;
    const centena = this.dígitoRomano(Math.trunc(número / 100), 2);
    número %= 100;
    const dezena = this.dígitoRomano(Math.trunc(número / 10), 1);
    número %= 10;
    const unidade = this.dígitoRomano(número, 0);
    return `${milhar}${centena}${dezena}${unidade}`;
  }

  private unidades = [
    'zero',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
    'onze',
    'doze',
    'treze',
    'catorze',
    'quinze',
    'dezesseis',
    'dezesste',
    'dezoito',
    'dezenove',
  ];

  private dezenas = [
    ,
    ,
    'vinte',
    'trinta',
    'quarenta',
    'cinquenta',
    'sessenta',
    'setenta',
    'oitenta',
    'noventa',
  ];

  private centenas = [
    ,
    'cento',
    'duzentos',
    'trezentos',
    'quatrocentos',
    'quinhentos',
    'seiscentos',
    'setecentos',
    'oitocentos',
    'novecentos',
  ];

  private dezenaPorExtenso(número: number): string {
    if (número <= 19) return this.unidades[número];
    const dezena = this.dezenas[Math.trunc(número / 10)];
    const unidade = this.unidades[número % 10];
    return unidade === 'zero' ? `${dezena}` : `${dezena} e ${unidade}`;
  }

  private centenaPorExtenso(número: number): string {
    const centena = this.centenas[Math.trunc(número / 100)];
    const dezena = this.dezenaPorExtenso((número %= 100));

    if (centena === undefined) return dezena;
    else if (dezena === 'zero') return centena === 'cento' ? 'cem' : centena;
    else return `${centena} e ${dezena}`;
  }

  private milharesPorExtenso(número: number): string {
    let milhares = this.centenaPorExtenso(Math.trunc(número / 1_000));
    const unidades = this.centenaPorExtenso(número % 1_000);

    if (milhares === 'zero') return unidades;
    else {
      milhares = milhares === 'um' ? 'mil' : `${milhares} mil`;

      if (unidades === 'zero') return milhares;
      else {
        const separador = número % 100 === 0 || número % 1_000 < 100;
        return `${milhares}${separador ? ' e' : ''} ${unidades}`;
      }
    }
  }

  public porExtenso(número: number): string {
    if (número < 0 || número > 999_999_999_999) throw Error();
    if (!Number.isInteger(número)) throw Error();

    let resultado = '';
    const bilhões = this.centenaPorExtenso(Math.trunc(número / 1_000_000_000));
    if (bilhões !== 'zero')
      resultado = bilhões === 'um' ? 'um bilhão' : `${bilhões} bilhões`;

    número %= 1_000_000_000;
    const milhões = this.centenaPorExtenso(Math.trunc(número / 1_000_000));
    if (milhões !== 'zero') {
      if (resultado !== '') resultado += ' ';
      resultado += milhões === 'um' ? 'um milhão' : `${milhões} milhões`;
    }

    const milhares = this.milharesPorExtenso((número %= 1_000_000));
    if (milhares !== 'zero' || (milhares === 'zero' && resultado === '')) {
      if (resultado !== '') resultado += ' ';
      resultado += milhares;
    }

    return resultado;
  }
}
