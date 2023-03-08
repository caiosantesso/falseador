import { Número } from './Número';
import { Nome } from './Nome';
import { Tipo } from './Tipo';
import { Documento } from './Documento';
import { Texto } from './Texto';
export declare class Falseador {
    private readonly categoriaNome;
    private readonly categoriaNúmero;
    private readonly categoriaTipo;
    private readonly categoriaTexto;
    private readonly categoriaDocumento;
    get nome(): Nome;
    get número(): Número;
    get tipo(): Tipo;
    get texto(): Texto;
    get doc(): Documento;
}
