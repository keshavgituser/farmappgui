import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementformComponent } from './adservice_components/advertisementform/advertisementform.component';
import { HomeComponent } from './adservice_components/home/home.component';
import { ViewadvertiseComponent } from './adservice_components/viewadvertise/viewadvertise.component';
import { AdmindashboardComponent } from './user_components/admindashboard/admindashboard.component';
import { DealerdashboardComponent } from './user_components/dealerdashboard/dealerdashboard.component';
import { FarmerdashboardComponent } from './user_components/farmerdashboard/farmerdashboard.component';
import { LoginformComponent } from './user_components/loginform/loginform.component';
import { RegisterformComponent } from './user_components/registerform/registerform.component';



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
  },
  {
    //to do add `${userrole}` before the 
    path:"register",
    component:RegisterformComponent,
    pathMatch:"full"

  },
  {
    
    path:"login",
    component:LoginformComponent,
    pathMatch:"full"

  },
  {
    path:"admindashboard",
    component:AdmindashboardComponent,

  },
  {
    path:"dealerdashboard",
    component:DealerdashboardComponent,

  },
  {
    path:"farmerdashboard",
    component:FarmerdashboardComponent,

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
