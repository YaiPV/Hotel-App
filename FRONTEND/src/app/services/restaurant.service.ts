import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restaurants } from '../models/restaurante.model';

interface getallrestaurantdate{

    restaurants: restaurants[];
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private URL = 'http://localhost:3001/api/restaurant';

  constructor(private http:HttpClient) { }

  getallrestaurant(){

      return this.http.get<getallrestaurantdate>('http://localhost:3001/api/restaurant');
  }

}
