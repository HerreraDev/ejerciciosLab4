import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGamesComponent } from 'src/app/salonDeJuegos/componentes/login/login.component';
import { RegistroComponent } from 'src/app/salonDeJuegos/componentes/registro/registro.component';
import { AdministracionComponent } from './administracion.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginGamesComponent},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
