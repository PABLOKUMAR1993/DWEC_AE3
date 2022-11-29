import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})


export class AboutUsComponent {


  /////////////////
  // Constructor.//
  /////////////////


  /**
   * Método Constructor que mediante @param title le asigna un título a la pestaña del navegador.
   */
  constructor( title: Title ) { title.setTitle( "Sobre Nosotros" ); }


}
