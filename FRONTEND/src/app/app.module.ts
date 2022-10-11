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
import { BookCardComponent } from './book-card/book-card.component';


import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth.guard';


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
    BookCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
   
     
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
