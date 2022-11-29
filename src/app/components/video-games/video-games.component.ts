import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoJuegos } from 'src/app/entidades/videoJuegos';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})


export class VideoGamesComponent {


  ///////////////
  // Atributos.//
  ///////////////
  
  
  gamesList: VideoJuegos[] = [];
  gameSelected: VideoJuegos;
  userName: string;


  /////////////////
  // Constructor.//
  /////////////////


  /**
   * Método Constructor que mediante @param title le pone un título a la pestaña del navegador.
   * Recibe mediante @param route un parametro por la URL.
   * Médiante el objeto @param videoJuegos crea 5 juegos Demo para mostrar en la página.
   */
  constructor( route: ActivatedRoute, title: Title ) {

    this.userName = route.snapshot.params[ 'userName' ];
    title.setTitle( "Video Juegos" );

    let videoGame: VideoJuegos;

    videoGame = new VideoJuegos(
      "Red DeadRedemption 2",
      "Rock Star",
      "https://images.g2a.com/1024x768/1x1x0/red-dead-redemption-2-pc-rockstar-key-global-i10000174280024/5da85be37e696c2b755a1612",
      4.9 );
    this.gamesList.push( videoGame );
    videoGame = new VideoJuegos(
      "The Witcher 3",
      "CD Proyect Red",
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      4.6 );
    this.gamesList.push( videoGame );
    videoGame = new VideoJuegos(
      "Halo Infinite",
      "343 Industries",
      "https://store-images.s-microsoft.com/image/apps.21536.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.68796bde-cbf5-4eaa-a299-011417041da6",
      5 );
    this.gamesList.push( videoGame );
    videoGame = new VideoJuegos(
      "Rome 2",
      "Total War",
      "https://media.vandal.net/m/16311/total-war-rome-ii-20131216201815_1.jpg",
      4.7 );
    this.gamesList.push( videoGame );
    videoGame = new VideoJuegos(
      "Ark Survival Evolved",
      "Wildcard",
      "https://howlongtobeat.com/games/ARK_Survival_Evolved_header.jpg",
      2.4 );
    this.gamesList.push( videoGame );

  }


  /////////////
  // Métodos.//
  /////////////


  /**
   * Méotodo que mediante @param game recibe un juego concreto,
   * para almacenarlo y poder pasarlo al componente hijo.
   */
  public selected( game: VideoJuegos ): void { this.gameSelected = game; }

  
}
