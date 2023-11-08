import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'students', component: StudentsComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
