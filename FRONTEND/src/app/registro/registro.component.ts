import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = {
    name:'',
    email:'',
    password:'',
    apellido:'',
    identificacion:'',
    celular:'',
  }

  constructor(private AuthService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  registro(){

    console.log(this.user)
    this.AuthService.registro(this.user)

    .subscribe(
       res => {
        console.log(res)
        this.router.navigate(['/restaurante'])
       },
    )
    
  }

}
