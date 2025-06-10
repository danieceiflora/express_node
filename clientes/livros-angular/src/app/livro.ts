export class Livro {
  codigo: string;
  CodEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(codigo: "", CodEditora: number, titulo: string, resumo: string, autores: string[]) {
    this.codigo = codigo;
    this.CodEditora = CodEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
   }

}
