import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CorouselComponent } from './corousel/corousel.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SchoolFeaturesComponent } from './school-features/school-features.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SchoolStatisticsComponent } from './school-statistics/school-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    NavBarComponent,
    CorouselComponent,
    TestimonialsComponent,
    SchoolFeaturesComponent,
    IntroductionComponent,
    SchoolStatisticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
