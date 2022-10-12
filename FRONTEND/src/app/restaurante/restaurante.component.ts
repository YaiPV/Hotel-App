import { Component, OnInit } from '@angular/core';

import { restaurants } from '../models/restaurante.model';
import { RestaurantService } from '../services/restaurant.service';




@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurant: restaurants[] = [];

  constructor(
    private restaurantservice:RestaurantService
  ) { }

  ngOnInit(): void {
      this.restaurantservice.getallrestaurant()
      .subscribe ( data => {
         this.restaurant=data.restaurants;
         console.log(data.restaurants);
      }
      )

  }

}
