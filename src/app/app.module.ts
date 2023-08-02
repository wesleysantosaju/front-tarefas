import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroTarefasComponent,
    CadastroTarefasComponent,
    NavbarComponent,
    ListarTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
