import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {


  ///////////////
  // Atributos.//
  ///////////////

  userName:string = "";


  /////////////////
  // Constructor.//
  /////////////////

  constructor( route:ActivatedRoute ) {

    this.userName = route.snapshot.params["userName"];

  }
  
}
