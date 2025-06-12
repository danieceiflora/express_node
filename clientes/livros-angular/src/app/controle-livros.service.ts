import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseUrl = 'http://localhost:3030/livros';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  async obterLivros(): Promise<Array<Livro>> {
    const resposta = await fetch(baseUrl);
    const dados = await resposta.json();
    return dados.map((livro: any) => {
      return new Livro(
        livro._id,
        Number(livro.codEditora),
        livro.titulo,
        livro.resumo,
        livro.autores
      );
    });
  }

  async incluir(livro: Livro): Promise<boolean> {
    const dados = {
      codEditora: livro.CodEditora.toString(),
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    try {
      const resposta = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      });
      return resposta.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  }

  async excluir(codigo: string): Promise<boolean> {
    try {
      const resposta = await fetch(`${baseUrl}/${codigo}`, {
        method: 'DELETE'
      });
      return resposta.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  }
}
