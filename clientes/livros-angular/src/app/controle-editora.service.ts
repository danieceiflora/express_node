import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    new Editora(1, 'Oxford'),
    new Editora(2, 'Longman'),
    new Editora(3, 'Pearson')
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codigo: number): string {
    const editora = this.editoras.filter(editora => editora.Codigo == codigo)[0];
    return editora ? editora.nome : '';
  }

  constructor() { }
}
