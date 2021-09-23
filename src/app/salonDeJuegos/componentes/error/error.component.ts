import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorGamesComponent implements OnInit {

  
  constructor( private router:Router) { }
  irLogin(){
    this.router.navigateByUrl("administracion/login");
  }
  ngOnInit(): void {
  }

}
