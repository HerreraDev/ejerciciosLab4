import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario;
  constructor() {
    this.usuario= new Usuario('','','','');
   }

}
