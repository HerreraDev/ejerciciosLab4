import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorGamesComponent } from './salonDeJuegos/componentes/error/error.component';

const rutas: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'administracion'
  },
  { path: 'administracion', loadChildren: () => import('./modulos/administracion/administracion.module').then(m => m.AdministracionModule) },
  { path: 'juegos', loadChildren: () => import('./modulos/juegos/juegos.module').then(m => m.JuegosModule) },
  { path: 'principal', loadChildren: () => import('./modulos/principal/principal.module').then(m => m.PrincipalModule) },
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
