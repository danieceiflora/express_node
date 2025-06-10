import { Injectable } from '@angular/core';
import { Livro } from './livro';

var baseUrl = 'http://localhost:3030/livros';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  async obterLivros(): Promise<Array<Livro>> {
    const resposta = await fetch(baseUrl, { method: 'GET' });
    const vetor = await resposta.json();
    return vetor.map((livro: any) => new Livro(livro.codigo, livro.CodEditora, livro.titulo, livro.resumo, livro.autores));
  }

  async incluir(livro: Livro): Promise<boolean> {
    const interfaceLivro = {
      codigo: livro.codigo,
      CodEditora: livro.CodEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };
    const resposta = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(interfaceLivro),
    });
    return resposta.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseUrl}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
  }

  constructor() { }
}
