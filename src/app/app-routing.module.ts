import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementformComponent } from './adservice_components/advertisementform/advertisementform.component';
import { HomeComponent } from './adservice_components/home/home.component';
import { ViewadvertiseComponent } from './adservice_components/viewadvertise/viewadvertise.component';


const routes: Routes = [

  {
    path:"createad",
    component:AdvertisementformComponent,
    pathMatch:"full"
  },
  {
    path:"viewad",
    component:ViewadvertiseComponent,
    pathMatch:"full"
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
