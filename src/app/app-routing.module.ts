import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { GameComponent } from './components/game/game.component';


const routes: Routes = [

  { path: 'games/:userName', component: VideoGamesComponent },
  { path: 'game/:id/:title/:company/:img/:review/:userName', component: GameComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent }

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule {}
