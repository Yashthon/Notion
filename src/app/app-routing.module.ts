import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { SeriesComponent } from './components/series/series.component';
import { DramaComponent } from './components/drama/drama.component';
import { ScienceComponent } from './components/science/science.component';
import { NewsComponent } from './components/news/news.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { FoodComponent } from './components/food/food.component';
import { TravelComponent } from './components/travel/travel.component';
import { FilmComponent } from './components/film/film.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { PoliticsComponent } from './components/politics/politics.component'
import { EducationComponent } from './components/education/education.component';
import { JournalComponent } from './components/journal/journal.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FavComponent } from './components/fav/fav.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome)

  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'drama',
    component: DramaComponent,
  },
  {
    path: 'science',
    component: ScienceComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'fashion',
    component: FashionComponent,
  },
  {
    path: 'food',
    component: FoodComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'film',
    component: FilmComponent,
  },
  {
    path: 'fav',
    component: FavComponent,
  },
  {
    path: 'comedy',
    component: ComedyComponent,
  },
  {
    path: 'politics',
    component: PoliticsComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'journal',
    component: JournalComponent,
  },
  {
    path: 'newsletter',
    component: NewsletterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
