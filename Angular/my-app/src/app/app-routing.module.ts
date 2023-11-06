import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { FoodsComponent } from './foods/foods.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/books', component: BooksComponent},
  {path: 'home/movies', component: MoviesComponent},
  {path: 'home/foods', component: FoodsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
