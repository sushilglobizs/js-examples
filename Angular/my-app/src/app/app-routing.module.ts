import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './districts/districts.component';

const routes: Routes = [
  {path: 'countries', component: CountriesComponent},
  {path: 'countries/states', component: StatesComponent},
  {path: 'countries/states/districts', component: DistrictsComponent},
  {path: '', redirectTo: 'countries', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
