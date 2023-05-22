import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { HomepageCarouselComponent } from "./homepage/homepage-carousel/homepage-carousel.component";
import { HomepageIntroductionComponent } from "./homepage/homepage-introduction/homepage-introduction.component";
import { HomepageTestimonialsComponent } from "./homepage/homepage-testimonials/homepage-testimonials.component";
import { HomepageSchoolFeaturesComponent } from "./homepage/homepage-school-features/homepage-school-features.component";
import { HomepageSchoolStatisticsComponent } from "./homepage/homepage-school-statistics/homepage-school-statistics.component";
import { HomepageCoursesOfferedComponent } from "./homepage/homepage-courses-offered/homepage-courses-offered.component";
import { HeaderComponent } from "./header.component";
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HomepageComponent,
        HomepageCarouselComponent,
        HomepageTestimonialsComponent,
        HomepageSchoolFeaturesComponent,
        HomepageSchoolStatisticsComponent,
        HomepageCoursesOfferedComponent,
        HeaderComponent,
        HomepageIntroductionComponent,
        CoursesComponent,
        GalleryComponent,
        AboutComponent,
        ContactComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
