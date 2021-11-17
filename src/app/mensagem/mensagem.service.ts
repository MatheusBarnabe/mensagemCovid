import { Mensagem } from './mensagem.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
//tornando providers
@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor() { }

  private mensagens: Mensagem[] = [];
  private listaMensagensAtualiuzada = new Subject<Mensagem[]>();

  getMensagens(): Mensagem[]{
    return [...this.mensagens];
  }

  adicionarMensagem(men: string){
    const mensagem: Mensagem = {
      mensagem: men,
    };
    this.mensagens.push(mensagem)
    this.listaMensagensAtualiuzada.next([...this.mensagens]);
  }
  getListarDeMensagensAtualizadaObservable(){
    return this.listaMensagensAtualiuzada.asObservable();
  }

}
