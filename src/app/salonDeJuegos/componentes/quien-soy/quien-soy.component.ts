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

   test(){
    this.lista = localStorage.getItem('lista') || "";
    console.log(JSON.parse(this.lista));
    
   }
   
  ngOnInit(): void {
    this.test();
  }

}
