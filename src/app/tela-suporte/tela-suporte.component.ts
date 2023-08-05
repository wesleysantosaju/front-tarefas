import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-suporte',
  templateUrl: './tela-suporte.component.html',
  styleUrls: ['./tela-suporte.component.scss']
})
export class TelaSuporteComponent {
  nome: string = '';
  email: string = '';
  mensagem: string = '';

  constructor(form: FormsModule){}

  enviarMensagem() {
    const mensagem = `Olá, me chamo ${this.nome}, meu email é o ${this.email}. Gostaria de resolver o meu problema descrito a seguir: *${this.mensagem}*`;
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=5579998141623&text=${encodeURIComponent(mensagem)}`;

    // Abre o link do WhatsApp no navegador
    window.open(urlWhatsapp);
  }
}
