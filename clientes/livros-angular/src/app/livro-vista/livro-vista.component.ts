import { Component } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-vista',
  standalone: false,
  templateUrl: './livro-vista.component.html',
  styleUrl: './livro-vista.component.css'
})
export class LivroVistaComponent {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then(vetor => this.livros = vetor);
  }

  excluir = (codigo: string) => {
    this.servLivros.excluir(codigo).then(() => this.servLivros.obterLivros()).then(vetor => this.livros = vetor);
  }

  obterNome = (codEditora: number) => this.servEditora.getNomeEditora(codEditora);

}
