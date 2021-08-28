import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'ejercicio-one';
  edadUno ='';
  edadDos = '';
  prom = '';
  suma = '';

  limpiar(){
    this.edadUno = '';
    this.edadDos = '';
    this.prom = '';
    this.suma = '';
  }

  calcular(){
    this.suma= (parseInt(this.edadUno)+parseInt(this.edadDos)).toString();
    this.prom= (parseInt(this.suma)/2).toString();
  }
}
