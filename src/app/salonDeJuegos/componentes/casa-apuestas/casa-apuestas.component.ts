import { Component, OnInit } from '@angular/core';
import { GuardarPuntosService } from '../../servicios/guardar-puntos.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { EncuestaComponent } from '../encuesta/encuesta.component';

@Component({
  selector: 'app-casa-apuestas',
  templateUrl: './casa-apuestas.component.html',
  styleUrls: ['./casa-apuestas.component.css']
})
export class CasaApuestasComponent implements OnInit {

  constructor(
    private guardarPuntosService:GuardarPuntosService, 
    private usuarioService: UsuarioService, 
    private toastrService: ToastrService,
    private matDialog: MatDialog) {}

  puntosActuales:number = 100;
  montoAcumulado:number = 0;
  probabilidadPerder:string = "0%";

  multiplicadorRecompensa!:number;
  probPerder:number = 2;
  nMax:number = 98;
  apuesta!:number;
  ganancia = 0.5;

  jugar(){
    let random = Math.floor(Math.random() * 101);
    if(random >= 0 && random <= this.nMax){
      this.montoAcumulado += this.apuesta*this.ganancia;
      this.ganancia += 0.5;
      this.nMax = this.nMax - 2;

      this.probPerder += 2;
      this.probabilidadPerder = this.probPerder + "%";
    }
    else{
      this.montoAcumulado = 0;
      this.nMax = 98;
      this.ganancia = 0.5;
      this.montoAcumulado = 0;
      this.apuesta = 0;
      this.ganancia = 0.5;
      this.probPerder = 2;
      this.probabilidadPerder = this.probPerder + "%";
      document.getElementById("apuesta")!.removeAttribute('readonly');
    }

  }

  retirarApuesta(){
    this.guardarPuntosService.puntosCasaApuestas(this.usuarioService.usuario.mail,this.montoAcumulado);
    this.toastrService.success('Sus puntos de esta partida han sido guardados', 'Puntos guardados')
    this.abrirModal();
    this.puntosActuales += this.montoAcumulado;
    this.montoAcumulado = 0;
    this.apuesta = 0;
    this.ganancia = 0.5;
    this.probPerder = 2;
    this.nMax = 98;
    this.probabilidadPerder = this.probPerder + "%";
    document.getElementById("apuesta")!.removeAttribute('readonly');

  }

  apostar(){

    document.getElementById("apuesta")!.setAttribute('readonly', 'true');
    this.puntosActuales -= this.apuesta;
  }

  ngOnInit(): void {
    this.probabilidadPerder = this.probPerder + "%";
  }

  abrirModal(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      usuario: this.usuarioService.usuario.mail,
      title: 'Encuesta juego Casa de Apuestas',
      juego: 'Casa de Apuestas'
    };
    this.matDialog.open(EncuestaComponent, dialogConfig);
  }

}
