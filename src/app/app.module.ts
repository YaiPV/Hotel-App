import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

import { IngresoComponent } from './ingreso/ingreso.component';
import { CheckInComponent } from './check-in/check-in.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ReservasComponent} from './reservas/reservas.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngresoComponent,
    CheckInComponent,
    RestauranteComponent,
    ReservasComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'navbar', component:NavbarComponent},
      {path: 'ingreso', component:IngresoComponent},
      {path: 'registro', component:RegistroComponent},
      {path: 'check-in', component:CheckInComponent},
      {path: 'reservas', component:ReservasComponent},
      {path: 'restaurante', component:RestauranteComponent},
    ])
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
