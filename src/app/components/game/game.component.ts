import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent {

  
  ///////////////
  // Atributos.//
  ///////////////


  gameId: number;
  gameTitle: string;
  gameCompany: string;
  gameImg: string;
  gameReview: number;
  userName: string;


  /////////////////
  // Constructor.//
  /////////////////


  /**
   * Método constructor que mediante @param title le pone un título a la pestaña del navegador.
   * Mediante @param route recibe diversos datos por la URL para mostrarlos en la página.
   */
  constructor( private route: ActivatedRoute, title: Title ) {

    this.gameId = route.snapshot.params[ 'id' ];
    this.gameTitle = route.snapshot.params[ 'title' ];
    this.gameCompany = route.snapshot.params[ 'company' ];
    this.gameImg = route.snapshot.params[ 'img' ];
    this.gameReview = route.snapshot.params[ 'review' ];
    this.userName = route.snapshot.params[ 'userName' ];
    title.setTitle( this.gameTitle );

  }

}
