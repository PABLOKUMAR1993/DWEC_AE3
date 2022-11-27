import { Component, OnInit } from '@angular/core';
import { VideoJuegos } from 'src/app/entidades/videoJuegos';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})


export class VideoGamesComponent implements OnInit {

  ngOnInit(): void {
    
    let videoGame: VideoJuegos;

    videoGame = new VideoJuegos(
      "Red DeadRedemption 2",
      "Rock Star",
      "https://images.g2a.com/1024x768/1x1x0/red-dead-redemption-2-pc-rockstar-key-global-i10000174280024/5da85be37e696c2b755a1612",
      4 );

  }

}
