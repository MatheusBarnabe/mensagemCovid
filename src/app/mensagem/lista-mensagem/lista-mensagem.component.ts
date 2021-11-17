import { Component, OnInit, OnDestroy } from '@angular/core';

//importe do módulo
import { Mensagem } from '../mensagem.model';

//importe da classe de serviço
import { MensagemService } from '../mensagem.service';

import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-mensagem',
  templateUrl: './lista-mensagem.component.html',
  styleUrls: ['./lista-mensagem.component.css']
})
export class ListaMensagemComponent implements OnInit {

  mensagens: Mensagem[] = [];
  private mensagensSubscription: Subscription;

  //injeteando depedência
  constructor(public mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.mensagens = this.mensagemService.getMensagens();
    this.mensagensSubscription = this.mensagemService
    .getListarDeMensagensAtualizadaObservable()
    .subscribe((mensagens: Mensagem[])=>{
      this.mensagens;
    });
  }

  ngOnDestroy(): void{
    this.mensagensSubscription.unsubscribe();
  }

}
