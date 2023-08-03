import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../services/tarefas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {
  // Dados da tabela
  data: any[] = []; // Substitua pelo array de dados da sua tabela

  // Configurações da paginação
  itemsPerPage: number = 5; // Número de itens por página
  currentPage: number = 1; // Página atual
  tarefas!: any[];

  constructor(private tarefasService : TarefasService,
    private http: HttpClient){}

  ngOnInit(): void {
      this.getTarefas();
  }

  get dataToShow(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tarefas.slice(startIndex, endIndex);
  }

  anteriorPagina(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  proximaPagina(): void {
    const totalPages = Math.ceil(this.tarefas.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  getTarefas(): void{
    this.tarefasService.getTarefas()
    .subscribe(tarefas => this.tarefas = tarefas);
  }
  // Método para atualizar a página atual
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  obterDadosDaTabela() {
    const apiUrl = 'http://localhost:3000/dados'; // URL da API do servidor JSON

    // Realizar a requisição GET para obter os dados da tabela
    this.http.get<any[]>(apiUrl).subscribe((data) => {
      this.data = data; // Preencher o array de dados com os dados recebidos do servidor
    });
  }

  marcarTarefaConcluida(tarefa: any): void {
    tarefa.status_tarefa = 'Concluída'; // Atualiza o campo status_tarefa para "concluída"

    this.tarefasService.atualizarTarefaConcluida(tarefa).subscribe(
      () => {
        console.log('Tarefa marcada como concluída com sucesso!');
        // Atualize a lista de tarefas para refletir o novo status
        // Por exemplo, recarregando as tarefas novamente
        // this.tarefas = this.tarefasService.obterTarefas();
      },
      (error) => {
        console.error('Erro ao marcar a tarefa como concluída:', error);
      }
    );
  }

}
