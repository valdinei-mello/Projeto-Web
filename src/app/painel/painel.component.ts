import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASE } from '../painel/frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  public frases: Frase[] = FRASE
  public instrucao: string = "Traduza a frase.."
  public resposta: string = ""

  public rodada: number = 0
  public rodadaFrase!: Frase

  public progresso: number = 0

  public tentativas: number = 3


  constructor() {
    this.atualizaRodada()
  }

  public atualizaResp(resp: Event): void {
    this.resposta = (<HTMLInputElement>resp.target).value

  }

  public verificarResp(): void {
    //trocar perguntar da rodada
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert("Traduzação correra !")
      //trpcar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + 25;

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()

    }
    else {
      alert("Tradução incorreta !")
      
      //diminuir tentivas
      this.tentativas--

      if(this.tentativas === -1){
        alert("Tentivas esgotadas !")
      }

    }

  }

  public atualizaRodada(): void {
    //definine a frase da rodad comm base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]
    //limpart campo de resposta
    this.resposta = ""
  }
  ngOnInit(): void {
  }

}
