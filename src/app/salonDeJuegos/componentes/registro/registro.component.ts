import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario.model';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private firestore:AngularFirestore,
    private router:Router,
    private userService:UsuarioService
  ) { }
  
  mail='';
  nombre='';
  contrasenia='';

  fallo:boolean = false;
  
  async registro(){
    if(this.checkInputs()){
      this.fallo=true;
    }
    else{
      var usersArray:Array<Usuario> = await this.getUsers();

      var found=0;
      for(var i=0; i<usersArray.length;i++){
        if(this.mail == usersArray[i].mail){
            found = 1;
            this.fallo=true;
            break;
        }
      } 
      if(found==0){
        const newId = this.firestore.createId();
        this.firestore.collection('usuarios').doc(newId).set({
          mail: this.mail,
          nombre: this.nombre,
          clave: this.contrasenia
        });
        this.login();
      }
      else{
        this.fallo = true;
      }
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

  checkInputs(){
    if(this.mail == '' || this.nombre == '' || this.contrasenia == '' || this.mail.valueOf().indexOf('@') < 0){
      return 1;
    }
    return 0;
  }

  succes(user:Usuario){
    this.userService.usuario.id=user.id;
    this.userService.usuario.nombre=user.nombre;
    this.userService.usuario.clave=user.clave;
    this.userService.usuario.mail=user.mail;
    var modelo = this;
    // this.firestore.collection('usuarios').doc(user.id).update({xs:'x'});
    setTimeout(function(){
      modelo.router.navigateByUrl('salonDeJuegos/home');
    }, 2000);
  }

  async login(){
    var usersArray:Array<Usuario> = await this.getUsers();

    var found=0;
    for(var i=0; i<usersArray.length;i++){
      if(this.mail == usersArray[i].mail){
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

  log(user:Usuario){
    const newId = this.firestore.createId();
    this.firestore.collection('logLogin').doc(newId).set({
      usuario:user.id,
      fechaHora: new Date()
    });
  }
  ngOnInit(): void {
  }

}
