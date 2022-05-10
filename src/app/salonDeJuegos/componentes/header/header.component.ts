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
    if(this.userService.usuario.mail === ''){
      this.router.navigateByUrl('**');
    }
    else{
      this.router.navigateByUrl('principal/home');
    }
  }
  goChat(){
    if(this.userService.usuario.mail === ''){
      this.router.navigateByUrl('**');
    }
    else{
      this.router.navigateByUrl('principal/chat');
    }
  }
  goQuienSoy(){
    this.router.navigateByUrl('principal/infoCreador');
  }
  goResultados(){
    this.router.navigateByUrl('juegos/resultados');
  }
  ngOnInit(): void {
  }

}
