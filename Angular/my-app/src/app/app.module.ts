import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { BtechComponent } from './btech/btech.component';
import { BscComponent } from './bsc/bsc.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroEditFormComponent } from './heroes/hero-edit-form/hero-edit-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './team/player/player.component';
import { LanguageComponent } from './language/language.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    StudentsComponent,
    CoursesComponent,
    BtechComponent,
    BscComponent,
    PostsComponent,
    UserComponent,
    CompanyComponent,
    CreatePostComponent,
    HeroesComponent,
    HeroComponent,
    HeroEditFormComponent,
    EmployeeComponent,
    TeamComponent,
    PlayerComponent,
    LanguageComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
