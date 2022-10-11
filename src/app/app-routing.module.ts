import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { HomeComponent } from './home/home.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ingreso', component: IngresoComponent},
  {path: 'check-in', component:CheckInComponent},
  {path: 'reservas', component:ReservasComponent},
  {path: 'restaurante', component:RestauranteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }