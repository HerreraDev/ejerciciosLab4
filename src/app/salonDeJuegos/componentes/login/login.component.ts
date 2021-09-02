import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario.model';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { collection, getDocs } from '@firebase/firestore';
import { QuerySnapshot } from '@firebase/firestore-types';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-games',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginGamesComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) {
  }

  usuario='';
  contrasenia='';
  student = new Usuario('','');
  fallo:boolean = false;

  async login(){
    var usersArray:Array<Usuario> = await this.getUsers();

    var found=0;
    for(var i=0; i<usersArray.length;i++){
      if(this.usuario == usersArray[i].nombre){
        if(this.contrasenia == usersArray[i].clave){
          found = 1;
          this.fallo=false;
          this.succes(usersArray[i]);
          break;
        }
      }
    } 
    if(found==0){
      this.fallo=true;
    }
  }
 
    
  async getUsers(){
    var fallox = 0;
    var user: Usuario;
    var usersArray: Array<Usuario> = [];

    let userRef = this.firestore.collection("usuarios").ref;

     await userRef.get()
     .then(res => res.forEach(userDoc => {
       user = userDoc.data() as Usuario;
       usersArray.push(user);
     }));

     return usersArray;
  };

  succes(user:Usuario){
      localStorage.setItem('usuario',user.nombre);
      this.router.navigateByUrl('salonDeJuegos/quienSoy');
    }
  ngOnInit(): void {
  }

}
