import { Component, OnInit } from '@angular/core';
import { GuardarPuntosService } from '../../servicios/guardar-puntos.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { EncuestaComponent } from '../encuesta/encuesta.component';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  constructor(
  private guardarPuntosService:GuardarPuntosService, 
  private usuarioService: UsuarioService, 
  private toastrService: ToastrService,    
  private userService:UsuarioService,
  private matDialog: MatDialog) { }
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

  terminarJuego(){
    this.guardarPuntosService.puntosMayorMenor(this.usuarioService.usuario.mail,this.puntos);
    this.toastrService.success('Sus puntos de esta partida han sido guardados', 'Puntos guardados')
    this.inicioJuego();
    this.puntos=0;
    this.abrirModal();
  }

  abrirModal(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      usuario: this.userService.usuario.mail,
      title: 'Encuesta juego Mayor-Menor',
      juego: 'Mayor y Menor'
    };
    this.matDialog.open(EncuestaComponent, dialogConfig);
  }
}
