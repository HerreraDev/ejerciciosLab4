import { Component } from '@angular/core';
import { Usuario } from './ejercicio2/clases/usuario';

//CLASE QUE TIENE LA LOGICA DE LA PAGINA HTML
@Component({
  //nuevo tag html
  selector: 'app-root',
  //pagina q aplicar logica
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}
