import { Component, OnInit, ViewChild } from '@angular/core';
import { TarefasService } from '../services/tarefas.service';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {
  // Dados da tabela
  data: any[] = []; // Substitua pelo array de dados da sua tabela
  currentDate: Date = new Date();

  // Configurações da paginação
  itemsPerPage: number = 5; // Número de itens por página
  currentPage: number = 1; // Página atual
  tarefas: any[] = [];
  tarefaExcluir: any | null = null;
  @ViewChild('confirmacaoModal', { static: false }) confirmacaoModal: any;

  constructor(private tarefasService : TarefasService,
    private http: HttpClient,
    private modalService: NgbModal){}

  ngOnInit(): void {
      this.getTarefas();
  }

  openModal(tarefa: any) {
    this.tarefas = tarefa;
    this.modalService.open(this.confirmacaoModal).result.then(
      (result) => {
        if (result === 'Excluir') {
          this.excluirTarefa(tarefa);
        } else {
          // Ação de cancelamento
          this.tarefaExcluir = null;
        }
      },
      () => {
        // Ação de cancelamento (clique fora do modal)
        this.tarefaExcluir = null;
      }
    );
  }

  getFormattedDate(): string {
    return format(this.currentDate, 'dd/MM/yyyy');
  }

  isTarefaAtrasada(dataPrevista: string): boolean {
    const dataPrevistaDate = new Date(dataPrevista);
    const dataAtual = new Date();
    // Define a hora da data atual para 00:00:00 para garantir uma comparação precisa apenas em relação à data.
    dataAtual.setHours(0, 0, 0, 0);
    return dataPrevistaDate <= dataAtual;
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
  excluirTarefa(tarefa: any) {
    // Mostrar a confirmação antes de realizar a exclusão
      this.tarefasService.excluirTarefa(tarefa.id).subscribe(
        () => {
          // Exclusão bem-sucedida, atualiza os dados da tabela
          this.getTarefas();
        },
        (error: any) => {
          console.error('Erro ao excluir tarefa:', error);
        }
      );
  }

}
