import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { GuardarPuntosService } from '../../servicios/guardar-puntos.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { EncuestaComponent } from '../encuesta/encuesta.component';

@Component({
  selector: 'app-juego-ahorcado',
  templateUrl: './juego-ahorcado.component.html',
  styleUrls: ['./juego-ahorcado.component.css']
})
export class JuegoAhorcadoComponent implements OnInit {

  palabras = ['perro','gato','hombre','mujer','animal','auto','camioneta','barco','pez'];
  pistas = ['Ladra...','Felino','Genero masc','Genero fem','Clasificacion de ser vivo','Vehiculo','Vehiculo','Vehiculo en el mar','Animal marino'];
  random = '';
  letras = '';
  cantOportunidades=0;
  exito=0;
  pista='';
  mailDeljugador='';

  constructor(
    private userService:UsuarioService, 
    private guadarPuntosService: GuardarPuntosService, 
    private toastr: ToastrService,
    private matDialog: MatDialog) {
    this.mailDeljugador = userService.usuario.mail;
  }

  setLetter(x:string){
    this.random = this.random.toUpperCase();
    var indice = this.random.indexOf(x.toString());
    if((indice) == -1){
      if(this.cantOportunidades > 1){
        var html = '';
        html += '<button>' + x + '</button>';
        document.getElementById('letrasError')!.innerHTML += x;
        this.cantOportunidades = this.cantOportunidades - 1;
      }
      else{
        //this.cantOportunidades = this.cantOportunidades - 1;
        document.getElementById('letra')!.setAttribute('style','color:black');
        this.letras = "¡¡¡¡PERDISTE!!!!";
        setTimeout(()=>{ 
          //guardo puntos
          this.toastr.success('Tus puntos de esta partida de ahorcados fueron guardados con exito', 'Puntuación guardada');
          this.guadarPuntosService.puntosAhorcado(this.mailDeljugador,'No', this.random.length + 3);
          this.generarRandom(); 
          this.abrirModal();
        }, 2000);
      }

      console.log("letra mal");
    }
    else{
      this.letras += x;
      if(this.cantOportunidades === 0){
        this.letras = "¡¡¡¡PERDISTE!!!!";
        setTimeout(()=>{ 
          //guardo puntos
          this.toastr.success('Tus puntos de esta partida de ahorcados fueron guardados con exito', 'Puntuación guardada');
          this.guadarPuntosService.puntosAhorcado(this.mailDeljugador,'No', this.random.length + 3);
          this.generarRandom(); 
          this.abrirModal();
        }, 2000);
      }
      else
      {
        //sumo exito
        for(var i = 0; i < 1; i++){
          if(this.random.indexOf(x.toString()) != -1){
            this.exito++;
          }
        }

        //reemplazo _
        var guionBajo = document.getElementById(indice.toString());
        guionBajo!.innerHTML = this.letras[this.letras.length-1];

        //aca ya gano
        if(this.exito==this.random.length){
          document.getElementById('letra')!.setAttribute('style','color:black');
          this.letras ="¡¡¡¡GANASTE!!!!";
          setTimeout(()=>{ 
            //guardo puntos
            this.toastr.success('Tus puntos de esta partida de ahorcados fueron guardados con exito', 'Puntuación guardada');
            let intentosUsados = (this.random.length + 3) - (this.cantOportunidades - this.exito);
            this.guadarPuntosService.puntosAhorcado(this.mailDeljugador,'Si', intentosUsados);
            this.generarRandom(); 
            this.abrirModal();
          }, 2000);
        }
      }
      console.log(this.exito);
      console.log("letra bien");
    }
  }

  generarRandom(){
    this.letras='';
    this.random = this.palabras[Math.floor(Math.random()*this.palabras.length)];
    this.pista = this.pistas[this.palabras.indexOf(this.random)];
    this.cantOportunidades= this.random.length + 3;

    document.getElementById('letrasError')!.innerHTML = '';
    document.getElementById('box')!.innerHTML = '';
    for(var i=0; i < this.random.length; i++){
      var html = '';
      html += '<h3 id= '+ i +' style="display:inline; margin-left:4px; font-size:30px">' + '_' + '</h3>';
      document.getElementById('box')!.innerHTML += html;
    }

    document.getElementById('letra')!.setAttribute('style','color:white');
    this.exito = 0;
    console.log(this.random);
  }

  resetGame(){
    this.generarRandom();
    // this.abrirModal();
  }

  ngOnInit(): void {
    this.generarRandom();
  }

  abrirModal(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      usuario: this.userService.usuario.mail,
      title: 'Encuesta juego Ahorcado',
      juego: 'Ahorcado'
    };
    this.matDialog.open(EncuestaComponent, dialogConfig);
  }

}
