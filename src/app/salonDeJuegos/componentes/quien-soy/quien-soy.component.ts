import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario.model';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css'],
  providers: []
})
export class QuienSoyComponent implements OnInit {

  constructor() {

   }
   
   lista:string = '';
   name='';
   user = {name:''};
   test(){
    this.lista = localStorage.getItem('usuario') || "";
    this.user.name = (this.lista);
   }
   clearStorage(){
     localStorage.clear();
   }
  ngOnInit(): void {
    this.test();
    this.name=this.user.name;
  }

}
