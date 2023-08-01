import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';

const routes: Routes = [

  {path: '', component: CadastroTarefasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
