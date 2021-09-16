import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private userService:UsuarioService) { }

  goJuegos(){
    this.router.navigateByUrl('salonDeJuegos/home');
  }
  goChat(){
    if(this.userService.usuario.mail === ''){
      this.router.navigateByUrl('salonDeJuegos/login');
      alert("Debe estar logueado para ingresar al chat");
    }
    else{
      this.router.navigateByUrl('salonDeJuegos/chat');
    }
  }
  ngOnInit(): void {
  }

}
