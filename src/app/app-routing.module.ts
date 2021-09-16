import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './salonDeJuegos/componentes/chat/chat.component';
import { ErrorGamesComponent } from './salonDeJuegos/componentes/error/error.component';
import { HomeGamesComponent } from './salonDeJuegos/componentes/home/home.component';
import { JuegoAhorcadoComponent } from './salonDeJuegos/componentes/juego-ahorcado/juego-ahorcado.component';
import { LoginGamesComponent } from './salonDeJuegos/componentes/login/login.component';
import { MayorMenorComponent } from './salonDeJuegos/componentes/mayor-menor/mayor-menor.component';
import { QuienSoyComponent } from './salonDeJuegos/componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './salonDeJuegos/componentes/registro/registro.component';

const rutas: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'salonDeJuegos/login'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'salonDeJuegos/home',
    component: HomeGamesComponent
  },
  {
    path:'salonDeJuegos/quienSoy',
    component: QuienSoyComponent
  },
  {
    path:'salonDeJuegos/login',
    component: LoginGamesComponent
  },
  {
    path:'salonDeJuegos/registro',
    component: RegistroComponent
  },
  { path: 'salonDeJuegos/juegos/ahorcado', 
    component: JuegoAhorcadoComponent
  },
  {
    path: 'salonDeJuegos/chat',
    component: ChatComponent
  },
  {
    path:'salonDeJuegos/juegos/mayMen',
    component: MayorMenorComponent
  },
  {
    path:'salonDeJuegos/chat',
    component: ChatComponent
  }
  ,
  {
    path:'**',
    component: ErrorGamesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
