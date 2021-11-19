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
  private listaMensagensAtualizada = new Subject<Mensagem[]>();

  getMensagens(): Mensagem[]{
    return [...this.mensagens];
  }

  adicionarMensagem(men: string){
    const mensagem: Mensagem = {
      mensagem: men,
    };
    this.mensagens.push(mensagem)
    this.listaMensagensAtualizada.next([...this.mensagens]);
  }
  getListaDeMensagensAtualizadaObservable(){
    return this.listaMensagensAtualizada.asObservable();
  }

}
