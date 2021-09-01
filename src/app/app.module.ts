import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './ejercicio2/componentes/login/login.component';
import { BienvenidoComponent } from './ejercicio2/componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './ejercicio2/componentes/error/error.component';

//FB
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database/angular-fire-compat-database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  ,
  {
    path:'ej2/login',
    component: LoginComponent
  }
  ,
  {
    path:'ej2/bienvenido',
    component: BienvenidoComponent
  },
  {
    path:'ej2/error',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio2Component,
    Ejercicio1Component,
    HomeComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
