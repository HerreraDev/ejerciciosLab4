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
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { QuienSoyComponent } from './salonDeJuegos/componentes/quien-soy/quien-soy.component';
import { HomeGamesComponent} from './salonDeJuegos/componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGamesComponent } from './salonDeJuegos/componentes/login/login.component';
import { HeaderComponent } from './salonDeJuegos/componentes/header/header.component';
import {ErrorGamesComponent} from './salonDeJuegos/componentes/error/error.component';
import { MenuPrincipalComponent } from './salonDeJuegos/componentes/menu-principal/menu-principal.component';
import { FooterComponent } from './salonDeJuegos/componentes/footer/footer.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RegistroComponent } from './salonDeJuegos/componentes/registro/registro.component';
import { ChatComponent } from './salonDeJuegos/componentes/chat/chat.component';
import { JuegoAhorcadoComponent } from './salonDeJuegos/componentes/juego-ahorcado/juego-ahorcado.component';
import { MayorMenorComponent } from './salonDeJuegos/componentes/mayor-menor/mayor-menor.component';


@NgModule({
  declarations: [
    AppComponent,
    Ejercicio2Component,
    Ejercicio1Component,
    HomeComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    QuienSoyComponent,
    LoginGamesComponent,
    HomeGamesComponent,
    HeaderComponent,
    QuienSoyComponent,
    MenuPrincipalComponent,
    FooterComponent,
    RegistroComponent,
    ChatComponent,
    JuegoAhorcadoComponent,
    MayorMenorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
