import { UserComponent } from './user/user.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponent } from './students/students.component';
import { BtechComponent } from './btech/btech.component';
import { BscComponent } from './bsc/bsc.component';
import { PostsComponent } from './posts/posts.component';
import { CompanyComponent } from './company/company.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/btech', component: BtechComponent},
  {path: 'courses/bsc', component: BscComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UserComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: '', redirectTo: 'heroes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
