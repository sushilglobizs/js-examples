import { CoursesComponent } from './courses/courses.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponent } from './students/students.component';
import { BtechComponent } from './btech/btech.component';
import { BscComponent } from './bsc/bsc.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/btech', component: BtechComponent},
  {path: 'courses/bsc', component: BscComponent},
  {path: 'posts', component: PostsComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
