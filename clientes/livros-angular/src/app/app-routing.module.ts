import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroVistaComponent } from './livro-vista/livro-vista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

const routes: Routes = [
  {
    path: 'lista',
    component: LivroVistaComponent
  },
  {
    path: 'dados',
    component: LivroDadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
