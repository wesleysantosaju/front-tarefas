import { Component } from '@angular/core';

interface Tarefas {
	tipo: string;
	descricao: string;
	acoes: string;
  data_inicial: string;
  data_conclusao: string;
  status_tarefa: string;
}

const TAREFAS: Tarefas[] = [
	{
		tipo: 'Estudar',
		descricao: 'Estudar para prova!',
		acoes: 'Marcar como concluída',
    data_inicial: '01/08/2023',
    data_conclusao: '15/08/2023',
    status_tarefa: 'Em andamento',
	},
  {
		tipo: 'Desenvolver',
		descricao: 'Desenvolver um site',
		acoes: 'Marcar como concluída',
    data_inicial: '02/08/2023',
    data_conclusao: '02/09/2023',
    status_tarefa: 'Em andamento',
	},
  {
		tipo: 'Limpar a Casa',
		descricao: 'Fazer limpeza da casa',
		acoes: 'Marcar como concluída',
    data_inicial: '01/08/2023',
    data_conclusao: '01/08/2023',
    status_tarefa: 'Concluída',
	},
];

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent {

  constructor(){

  }
  tarefas = TAREFAS;
}
