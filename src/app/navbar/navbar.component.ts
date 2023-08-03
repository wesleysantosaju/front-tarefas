import { Component, OnInit, ViewChild, ElementRef   } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TarefasService } from '../services/tarefas.service';
import { ToastrService } from 'ngx-toastr'; // Importe o ToastrService
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
// Referência ao elemento do modal
@ViewChild('modalContent', { static: true, read: ElementRef }) modalContent!: ElementRef;
@ViewChild('modalTemplate') modalTemplate: any;
  formulario: FormGroup;
  showSuccessMessage: boolean = false;
  modalVisible: boolean = false;
  novaTarefa: any = { tipo: '' , descricao: '', acoes: '', data_inicial: '', data_conclusao: '', status_tarefa: 'Em andamento'};
  exibirBotao: boolean = false;
  constructor(private router: Router,
    private modalService: NgbModal,
    private tarefaService: TarefasService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder){
      this.formulario = this.formBuilder.group({
        tipo: ['', Validators.required],
        descricao: ['', Validators.required],
        data_inicial: ['', Validators.required],
        data_conclusao: ['', Validators.required]
      });

  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.exibirBotao = (event.url === '/listar');
      }
    });
  }
  abrirModal(modalContent : any) {
    this.modalService.open(modalContent, { centered: true });
  }

  fecharModal(): void {
    this.modalVisible = false;
    this.showSuccessMessage = false;
    this.formulario.reset();
  }

  cadastrarTarefa(): void {
    this.tarefaService.cadastrarTarefa(this.novaTarefa)
      .subscribe(() => {
        this.showSuccessMessage = true;
        this.fecharModalFun();
        setTimeout(() => {
      this.showSuccessMessage = false;

    }, 3000);
    setTimeout(() => {
    }, 3500);

      });
  }
  fecharModalFun(): void {
    // Fecha o modal removendo-o do DOM
    this.modalContent.nativeElement.remove();
  }

}
