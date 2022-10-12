import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private URL = 'http://localhost:3001/api/reserva';

  constructor(private http:HttpClient) { }
  
 reservas(user: { nombre: string; acompanante: string; email: string;  dias: string; fecha: string; sugerencias: string; }) {
    return this.http.post<any>(this.URL,user);
  }

}