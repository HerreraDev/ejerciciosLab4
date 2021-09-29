import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario.model';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { collection, getDocs } from '@firebase/firestore';
import { QuerySnapshot } from '@firebase/firestore-types';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { PreguntadosServiceService } from '../../servicios/preguntados-service.service';

@Component({
  selector: 'app-login-games',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginGamesComponent implements OnInit {
  
  constructor(
    private firestore: AngularFirestore, 
    private router: Router,
    private userService:UsuarioService,
    private shService:PreguntadosServiceService) {
      this.shService.obtenerPaises().subscribe((paises:any)=>
      {
        console.log(paises[1].flag);
        this.paisX = paises[1];
      }
      , error=>{console.log(error)});
  }
  paisX!:any;
  usuario='';
  contrasenia='';
  student = new Usuario('','','','');
  fallo:boolean = false;

  async login(){
    var usersArray:Array<Usuario> = await this.getUsers();
    var found=0;
    for(var i=0; i<usersArray.length;i++){
      if(this.usuario == usersArray[i].mail){
        if(this.contrasenia == usersArray[i].clave){
          found = 1;
          this.fallo=false;
          this.succes(usersArray[i]);
          this.log(usersArray[i]);
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
       user.id = userDoc.id;
       usersArray.push(user);
     }));
     return usersArray;
  };

  succes(user:Usuario){
      this.userService.usuario.id=user.id;
      this.userService.usuario.nombre=user.nombre;
      this.userService.usuario.clave=user.clave;
      this.userService.usuario.mail=user.mail;
      var modelo = this;

      sessionStorage.setItem('usuarioLogueado', JSON.stringify(user));
      setTimeout(function(){
        modelo.router.navigateByUrl('principal/home');
      }, 1000);
    }

  log(user:Usuario){
    const newId = this.firestore.createId();
    this.firestore.collection('logLogin').doc(newId).set({
      usuario:user.id,
      fechaHora: new Date()
    });
  }

  loginAdmin(){
    this.usuario = 'admin@mail.com';
    this.contrasenia = 'admin';
  }
  loginTester(){
    this.usuario = 'tester@mail.com';
    this.contrasenia = 'tester';
  }
  ngOnInit(): void {
    sessionStorage.clear();
  }

}
