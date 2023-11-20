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
import { FormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HeroEditFormComponent } from './hero-edit-form/hero-edit-form.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
