import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';

const routes: Routes = [

  {path: '', component: CadastroTarefasComponent},
  {path: 'listar', component: ListarTarefasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
