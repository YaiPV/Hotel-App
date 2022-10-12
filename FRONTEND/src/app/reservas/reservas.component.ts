import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../services/reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  user = {
    nombre:'',
    acompanante:'',
    email:'',
    dias:'',
    fecha:'',
    sugerencias:'',
  }

  constructor(private ReservasService: ReservasService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  reserva(){

    console.log(this.user)
    this.ReservasService.reservas(this.user)

    .subscribe(
       res => {
        console.log(res)
        this.router.navigate([''])
       },
    )
    
  }

}
