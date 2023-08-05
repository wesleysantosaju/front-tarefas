import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { TelaSuporteComponent } from './tela-suporte/tela-suporte.component';

const routes: Routes = [

  {path: '', component: CadastroTarefasComponent},
  {path: 'listar', component: ListarTarefasComponent},
  {path: 'suporte', component: TelaSuporteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
