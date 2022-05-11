import { Component, OnInit } from '@angular/core';
import { GuardarEncuestaService } from '../../servicios/guardar-encuesta.service';
@Component({
  selector: 'app-encuesta-resultados',
  templateUrl: './encuesta-resultados.component.html',
  styleUrls: ['./encuesta-resultados.component.css']
})
export class EncuestaResultadosComponent implements OnInit {

  constructor(public resultadoService:GuardarEncuestaService) { }

  ngOnInit(): void {
    this.resultadoService.getEncuestasAhorcado();
    this.resultadoService.getEncuestasCasaApuestas();
    this.resultadoService.getEncuestasMayorMenor();
    this.resultadoService.getEncuestasPreguntados();
  }

}
