import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importe o BrowserAnimationsModule
import { ToastrModule } from 'ngx-toastr'; // Importe o ToastrModule
import { NgxPaginationModule } from 'ngx-pagination';
import { TarefasService } from './services/tarefas.service';

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
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // Adicione o BrowserAnimationsModule
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [TarefasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
