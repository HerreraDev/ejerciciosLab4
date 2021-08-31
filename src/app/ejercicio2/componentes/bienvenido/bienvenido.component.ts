import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  

  constructor() { }
  // lg = new LoginComponent();
  // usuario = this.lg.usuarioT;
    
  ngOnInit(): void {
  }



}
