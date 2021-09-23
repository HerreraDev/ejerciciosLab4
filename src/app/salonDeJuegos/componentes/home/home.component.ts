import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/ejercicio2/componentes/login/login.component';
import { Usuario } from '../../clases/usuario.model';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeGamesComponent implements OnInit {
  constructor(private userService:UsuarioService, private router:Router) {
    this.testing();
    console.log("s");
   }
   deslogueado:boolean = true;
   testing(){
      if(this.userService.usuario.mail !== ''){
        this.deslogueado = false;
      }
   }
   irAhorcado(){
     this.router.navigateByUrl('juegos/ahorcado');
   }
   irMayMen(){
    this.router.navigateByUrl('juegos/mayormenor');
   }
 ngOnInit(): void {
 }

}
