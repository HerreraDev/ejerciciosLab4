import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario.model';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css'],
  providers: []
})
export class QuienSoyComponent implements OnInit {

  constructor(private userService:UsuarioService,
    private router:Router) {
    this.name = userService.usuario.nombre;
    this.mail = userService.usuario.mail;
   }
   
   name='';
   mail='';

   logout(){
    this.router.navigateByUrl('');
   }
  ngOnInit(): void {
  }

}
