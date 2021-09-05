import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/ejercicio2/componentes/login/login.component';
import { Usuario } from '../../clases/usuario.model';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeGamesComponent implements OnInit {
  constructor(private userService:UsuarioService) {
    this.testing();
    console.log("s");
   }
   deslogueado:boolean = true;
   testing(){
      if(this.userService.usuario.mail !== ''){
        this.deslogueado = false;
      }
   }
 ngOnInit(): void {
 }

}
