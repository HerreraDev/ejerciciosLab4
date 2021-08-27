import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

//CLASE QUE TIENE LA LOGICA DE LA PAGINA HTML
@Component({
  //nuevo tag html
  selector: 'app-root',
  //pagina q aplicar logica
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
