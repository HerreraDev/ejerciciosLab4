import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

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
import { InfoQuienSoyComponent } from './salonDeJuegos/componentes/info-quien-soy/info-quien-soy.component';
import { HttpClientModule } from '@angular/common/http';
import { PreguntadosComponent } from './salonDeJuegos/componentes/preguntados/preguntados.component';
import { CasaApuestasComponent } from './salonDeJuegos/componentes/casa-apuestas/casa-apuestas.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

import { ToastrModule } from 'ngx-toastr';

import {MatDialogModule} from "@angular/material/dialog";

import { EncuestaComponent } from './salonDeJuegos/componentes/encuesta/encuesta.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { ResultadosComponent } from './salonDeJuegos/componentes/resultados/resultados.component';
import { EncuestaResultadosComponent } from './salonDeJuegos/componentes/encuesta-resultados/encuesta-resultados.component';
@NgModule({
  declarations: [
    AppComponent,
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
    InfoQuienSoyComponent,
    PreguntadosComponent,
    CasaApuestasComponent,
    EncuestaComponent,
    ResultadosComponent,
    EncuestaResultadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EncuestaComponent]
})
export class AppModule { }
