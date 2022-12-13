import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { JournalComponent } from './components/journal/journal.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './components/profile/profile.component'
import { getFirestore } from 'firebase/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { SeriesComponent } from './components/series/series.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DramaComponent } from './components/drama/drama.component';
import { ScienceComponent } from './components/science/science.component';
import { NewsComponent } from './components/news/news.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { FoodComponent } from './components/food/food.component';
import { TravelComponent } from './components/travel/travel.component';
import { FilmComponent } from './components/film/film.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { EducationComponent } from './components/education/education.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FavComponent } from './components/fav/fav.component';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MostLikedComponent } from './components/most-liked/most-liked.component';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SeriesComponent,
    DramaComponent,
    FilmComponent,
    ScienceComponent,
    NewsComponent,
    FashionComponent,
    FavComponent,
    FoodComponent,
    TravelComponent,
    ComedyComponent,
    PoliticsComponent,
    EducationComponent,
    NavComponent,
    FooterComponent,
    SideNavComponent,
    ScrollToTopComponent,
    HorizontalScrollComponent,
    NewsletterComponent,
    JournalComponent,
    MostLikedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTooltipModule,
    FormsModule,
    MatTabsModule,
    FlexLayoutModule,
    MatStepperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
