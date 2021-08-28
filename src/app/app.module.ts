import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const rutas: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'ej1',
    component: Ejercicio1Component
  },
  {
    path:'ej2',
    component: Ejercicio2Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio2Component,
    Ejercicio1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
