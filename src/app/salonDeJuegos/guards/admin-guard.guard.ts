import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router, private toastr: ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usuarioService.usuario.mail === 'admin@mail.com'){
        return true;
      }else{
        this.toastr.error('Solo los usuarios administradores pueden ver los resultados de las encuestas','Accedo denegado');
        return false;
      }
  }
  
}
