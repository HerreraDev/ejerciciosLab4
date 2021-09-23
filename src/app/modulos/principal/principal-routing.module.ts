import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from 'src/app/salonDeJuegos/componentes/chat/chat.component';
import { HomeGamesComponent } from 'src/app/salonDeJuegos/componentes/home/home.component';
import { QuienSoyComponent } from 'src/app/salonDeJuegos/componentes/quien-soy/quien-soy.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  { path: 'home', component: HomeGamesComponent },
  { path: 'quienSoy', component: QuienSoyComponent},
  { path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
