import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {
  tarefas!: any[];

  constructor(private tarefasService : TarefasService){}

  ngOnInit(): void {
      this.getTarefas();
  }

  getTarefas(): void{
    this.tarefasService.getTarefas()
    .subscribe(tarefas => this.tarefas = tarefas);
  }

}
