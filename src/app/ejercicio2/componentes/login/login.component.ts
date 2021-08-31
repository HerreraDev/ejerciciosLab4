import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { collection, getDocs } from '@firebase/firestore';
import { QuerySnapshot } from '@firebase/firestore-types';
import { observable, Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firestore: AngularFirestore) {
    //let student = new Usuario('','');
   }

  users = [
    {
      user:'graxman',
      pass:'1234'
    },
    {
      user:'jose',
      pass:'1234'
    }
  ]

  usuario='';
  contrasenia='';
  student = new Usuario('','');


  // login(){
  //   this.student = new Usuario('','');
  //   this.student.nombre = this.usuario;
  //   this.student.clave = this.contrasenia;
    
  //   this.firestore.collection("usuarios").doc('jugadores').set({
  //     nombre: this.student.nombre,
  //     clave: this.student.clave
  //   });

  //   //return this.firestore.collection('usuarios').snapshotChanges();

    
  // };

  // login(){
  //   for(var i=0; i<this.users.length; i++){
  //     if(this.usuario == this.users[i].user){
  //       if(this.contrasenia == this.users[i].pass){
  //         this.usuarioT.nombre = this.usuario;
  //         this.usuarioT.clave = this.contrasenia;
  //       }
  //     }
  //   }
  // }
  login(){
    this.student = new Usuario('','');
    this.student.nombre = this.usuario;
    this.student.clave = this.contrasenia;
    
    this.firestore.collection("usuarios").add({
      nombre: this.student.nombre,
      clave: this.student.clave
    });

    ///////////////////////////////
    var user: Usuario;

    let userRef = this.firestore.collection("usuarios").ref;

    userRef.get().then(res => res.forEach(userDoc => {

      user = userDoc.data() as Usuario; // since email IDs are unique, I want the 0th element.
      
     // has the data

      // return user; // doesn't work, not the right thing
      console.log(user);
    }))
  }

  ngOnInit(): void {
    //console.log(this.firestore.collection('usuarios').doc('jugadores'));
  }

}
