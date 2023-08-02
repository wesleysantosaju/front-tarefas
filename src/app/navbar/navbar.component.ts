import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  exibirBotao: boolean = false;
  constructor(private router: Router,
    private modalService: NgbModal){

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

}
