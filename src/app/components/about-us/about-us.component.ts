import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})


export class AboutUsComponent {


  ///////////////
  // Atributos.//
  ///////////////


  userName:string = "";


  /////////////////
  // Constructor.//
  /////////////////


  constructor( private route: ActivatedRoute ) {

    this.userName = route.snapshot.params[ "userName" ];

  }

}
