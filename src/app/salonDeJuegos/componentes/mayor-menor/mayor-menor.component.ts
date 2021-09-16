import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  constructor() { }
  numAleatorio!:number;
  puntos = 0;

  eligio(x:string){
    let siguienteAleatorio= this.getAleatorio();
    if(x==='mayor'){
      if(siguienteAleatorio > this.numAleatorio){
        this.numAleatorio = siguienteAleatorio;
        this.puntos += 3;
      }
      else{
        this.numAleatorio = siguienteAleatorio;
        this.puntos -= 1;
      }
    }
    else{
      if(siguienteAleatorio < this.numAleatorio){
        this.numAleatorio = siguienteAleatorio;
        this.puntos += 3;
      }
      else{
        this.numAleatorio = siguienteAleatorio;
        this.puntos -= 1;
      } 
    }
  }

  getAleatorio(){
    return Math.floor(Math.random() * (20 - 0)) + 0;
  }
  inicioJuego(){
    this.numAleatorio=this.getAleatorio();
  }

  ngOnInit(): void {
    this.inicioJuego();
  }

}
