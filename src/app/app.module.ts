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
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngresoComponent,
    CheckInComponent,
    RestauranteComponent,
    ReservasComponent,
    RegistroComponent,
    HomeComponent,
    FooterComponent,
    ServiciosComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
