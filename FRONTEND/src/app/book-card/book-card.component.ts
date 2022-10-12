import { Component, Input, OnInit } from '@angular/core';

import {restaurants} from '../models/restaurante.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() restaurants: restaurants = {
    _id: "",
    plato_entrada: "",
    plato_fuerte: "",
    postre: "",
    valor: 0,
    date: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
