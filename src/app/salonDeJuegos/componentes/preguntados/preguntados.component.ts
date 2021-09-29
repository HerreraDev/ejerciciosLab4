import { Component, OnInit } from '@angular/core';
import { PreguntadosServiceService } from '../../servicios/preguntados-service.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  constructor(private shService:PreguntadosServiceService) {

   }
   paisX!:any;
   paisesX:any = [];
   random:number = 0;
   puntos:number = 0;
   async getPaises(){
      this.shService.obtenerPaises().subscribe((paises:any)=>
      {
        this.paisesX = [];

        this.paisesX.push(paises[Math.floor(Math.random()*paises.length)]);
        document.getElementById("rtaUno")!.innerHTML = this.paisesX[0].name;

        this.paisesX.push(paises[Math.floor(Math.random()*paises.length)]);
        document.getElementById("rtaDos")!.innerHTML = this.paisesX[1].name;

        this.paisesX.push(paises[Math.floor(Math.random()*paises.length)]);
        document.getElementById("rtaTres")!.innerHTML = this.paisesX[2].name;

        this.paisesX.push(paises[Math.floor(Math.random()*paises.length)]);
        document.getElementById("rtaCuatro")!.innerHTML = this.paisesX[3].name;

        this.random = Math.floor(Math.random()*this.paisesX.length);

        console.log(this.paisesX[this.random]);

      }
      , error=>{console.log(error)});

   }

   validarRta(rta:number){
     switch(rta){
       case 1:
         if(document.getElementById("rtaUno")!.innerHTML == this.paisesX[this.random].name){
          this.getPaises();
          this.puntos++;
         }
         else{
          this.getPaises();
           this.puntos--;
         }
         break;
       case 2:
        if(document.getElementById("rtaDos")!.innerHTML == this.paisesX[this.random].name){
          this.getPaises();
          this.puntos++;         
        }
         else{
          this.getPaises();
           this.puntos--;         
          }
         break;
       case 3:
        if(document.getElementById("rtaTres")!.innerHTML == this.paisesX[this.random].name){
          this.getPaises();
          this.puntos++;         
        }
         else{
          this.getPaises();
           this.puntos--;         
          }
         break;
       case 4:
        if(document.getElementById("rtaCuatro")!.innerHTML == this.paisesX[this.random].name){
          this.getPaises();
          this.puntos++;         
        }
         else{
          this.getPaises();
           this.puntos--;         
          }         
        break;
     }
   }

   terminarJuego(){
     this.getPaises();
     this.puntos = 0;
   }

  ngOnInit(): void {
    this.getPaises();
  }

}
