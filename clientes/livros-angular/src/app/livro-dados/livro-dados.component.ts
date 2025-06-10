import { Component } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {
  public livro: Livro = new Livro(0, 0, '', '', []);
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService, private router: Router) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    console.log('incluindo livro: ', this.livro);
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  }
}

