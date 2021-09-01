import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/ejercicio2/componentes/login/login.component';
import { Usuario } from '../../clases/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeGamesComponent implements OnInit {
  constructor() { }

  deslogueado:boolean = true;

  ngOnInit(): void {
 
  }

}
