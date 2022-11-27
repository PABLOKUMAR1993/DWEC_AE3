import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'videogames', component: VideoGamesComponent },
  { path: 'videogames/:userName', component: VideoGamesComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'about/:userName', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:userName', component: ContactComponent },
  { path: 'login', component: LoginComponent }

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule {}
