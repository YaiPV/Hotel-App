import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3001/api/user';

  constructor(private http:HttpClient) { }
  
  registro(user: { name: string; email: string; password: string;  apellido: string; identificacion: string; celular: string; }) {
    return this.http.post<any>(this.URL + '/register',user);
  }

  ingreso (user: {email: string; password: string;}){
      return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


}
