export class MocksPadrão {
  private readonly exit;
  private readonly stderr;
  private readonly stdout;
  private readonly info;

  constructor() {
    this.exit = jest.spyOn(process, 'exit').mockImplementation();
    this.stderr = jest.spyOn(process.stderr, 'write').mockImplementation();
    this.stdout = jest.spyOn(process.stdout, 'write').mockImplementation();
    this.info = jest.spyOn(console, 'info').mockImplementation();
  }

  public textoDaÚltimaSaída() {
    return (this.info.mock.lastCall?.[0] ??
      this.stdout.mock.lastCall?.[0]) as string;
  }

  private espereErroContendo(texto: string) {
    expect(this.exit).toHaveBeenCalled();

    const saída = this.stderr.mock.lastCall?.[0];
    expect(saída).toContain(texto);
  }

  public espereArgumentoFaltante() {
    this.espereErroContendo(`error: missing required argument`);
  }

  public espereArgumentosDemasiados(subcomando: string) {
    this.espereErroContendo(`too many arguments for '${subcomando}'`);
  }

  public espereArgumentoInválido(argumento: string) {
    this.espereErroContendo(`argument '${argumento}' is invalid`);
  }

  public espereSaídaDeErroContendo(texto: string) {
    this.espereErroContendo(texto);
  }

  public espereArgumentoComVerificadorInválido(valor: string, arg = '') {
    this.espereErroContendo(
      `command-argument value '${valor}' is invalid for argument '${arg}`,
    );
  }
}
