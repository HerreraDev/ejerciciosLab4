import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGamesComponent } from './salonDeJuegos/componentes/home/home.component';

const routes:Routes = [
  {
    path:'home',
    component: HomeGamesComponent
  },
  {
    
  }
]

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
