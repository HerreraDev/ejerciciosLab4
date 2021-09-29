import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaApuestasComponent } from 'src/app/salonDeJuegos/componentes/casa-apuestas/casa-apuestas.component';
import { JuegoAhorcadoComponent } from 'src/app/salonDeJuegos/componentes/juego-ahorcado/juego-ahorcado.component';
import { MayorMenorComponent } from 'src/app/salonDeJuegos/componentes/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from 'src/app/salonDeJuegos/componentes/preguntados/preguntados.component';
import { JuegosComponent } from './juegos.component';

const routes: Routes = [
  { path: 'mayormenor', component: MayorMenorComponent },
  { path: 'ahorcado', component: JuegoAhorcadoComponent},
  { path: 'preguntados', component:PreguntadosComponent},
  { path: 'casaApuestas', component:CasaApuestasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
