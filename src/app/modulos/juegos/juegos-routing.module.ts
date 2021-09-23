import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoAhorcadoComponent } from 'src/app/salonDeJuegos/componentes/juego-ahorcado/juego-ahorcado.component';
import { MayorMenorComponent } from 'src/app/salonDeJuegos/componentes/mayor-menor/mayor-menor.component';
import { JuegosComponent } from './juegos.component';

const routes: Routes = [
  { path: 'mayormenor', component: MayorMenorComponent },
  { path: 'ahorcado', component: JuegoAhorcadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
