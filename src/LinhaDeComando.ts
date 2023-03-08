import { Falseador } from './Falseador';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChavesDe<T> = T extends any ? keyof T : never;
type Categoria = Falseador[keyof Falseador];

export class LinhaDeComando {
  public constructor(private readonly falseador: Falseador) {}

  public execute() {
    const idDaCategoria = this.#obtenhaIdDaCategoria();
    const categoria = this.falseador[idDaCategoria];
    const idDoMétodo = this.#obtenhaIdDoMétodo(categoria);

    this.#invoqueMétodo(categoria, idDoMétodo);
  }

  #imprimeErro(mensagem: string) {
    console.error('\x1b[31m%s\x1b[0m', mensagem);
    process.exit(127);
  }

  #obtenhaIdDaCategoria() {
    const possívelIdDaCategoria = process.argv?.[2];
    this.#verifiqueErroEmCategoria(possívelIdDaCategoria);

    return possívelIdDaCategoria as keyof Falseador;
  }

  #verifiqueErroEmCategoria(id: string) {
    const protótipo = Object.getPrototypeOf(this.falseador);
    const propriedades = Object.getOwnPropertyDescriptors(protótipo);
    const categorias = Object.entries(propriedades)
      .filter(([, valor]) => valor.get)
      .map(([chave]) => chave);

    let erro;
    if (!id) erro = `Categoria deve ser informada.`;
    else if (!categorias.includes(id)) erro = `Não há a categoria ${id}.`;

    if (erro) this.#imprimeErro(`${erro}\nCategorias: ${categorias.join('|')}`);
  }

  #obtenhaIdDoMétodo(categoria: Categoria) {
    const possívelIdDoMétodo = process.argv?.[3];

    this.#verifiqueErroEmMétodo(possívelIdDoMétodo, categoria);

    return possívelIdDoMétodo as ChavesDe<Categoria>;
  }

  #verifiqueErroEmMétodo(id: string, categoria: Categoria) {
    const protótipo = Object.getPrototypeOf(categoria);
    const propriedades = Object.getOwnPropertyDescriptors(protótipo);
    const métodos = Object.entries(propriedades)
      .filter(
        ([chave, valor]) =>
          typeof valor.value === 'function' && chave !== 'constructor'
      )
      .map(([chave]) => chave);

    let erro;
    if (!id) erro = `Método deve ser informado.`;
    else if (!(id in categoria)) erro = `Não há o método ${id}.`;

    if (erro) this.#imprimeErro(`${erro}\nMétodos: ${métodos.join('|')}`);
  }

  #invoqueMétodo<T extends Categoria>(categoria: T, idDoMétodo: ChavesDe<T>) {
    const argumento = process.argv?.[4];
    const parâmetros = (categoria[idDoMétodo] as () => void).length;
    if (parâmetros && !argumento) {
      this.#imprimeErro(`Argumento é requerido para método ${idDoMétodo}.`);
    }

    const arg = /^-?\d+$/.test(argumento) ? Number(argumento) : argumento;

    const resultado = (
      categoria[idDoMétodo] as (arg?: string | number) => void
    )(arg);
    console.log(resultado);
  }
}
