import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './component/city-list/city-list.component';
import { CityComponent } from './component/city/city.component';

const routes: Routes = [
{path:'',component:CityListComponent},
{path:'city/:id',component:CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }