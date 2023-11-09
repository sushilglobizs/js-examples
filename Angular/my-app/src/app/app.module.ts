import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { BtechComponent } from './btech/btech.component';
import { BscComponent } from './bsc/bsc.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    StudentsComponent,
    CoursesComponent,
    BtechComponent,
    BscComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
