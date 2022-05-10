import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(public resultadoService:ResultadosService) { }

  ngOnInit(): void {
    this.resultadoService.getResultadosAhorcado();
    this.resultadoService.getResultadosCasaApuestas();
    this.resultadoService.getResultadosMayorMenor();
    this.resultadoService.getResultadosPreguntados();
  }

}
