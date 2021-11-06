import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementformComponent } from './adservice_components/advertisementform/advertisementform.component';
import { HomeComponent } from './adservice_components/home/home.component';
import { ViewadstableComponent } from './adservice_components/viewadstable/viewadstable.component';
import { ViewadvertiseComponent } from './adservice_components/viewadvertise/viewadvertise.component';
import { AboutusComponent } from './complaint_components/aboutus/aboutus.component';
import { AddcomplaintComponent } from './complaint_components/addcomplaint/addcomplaint.component';
import { ComplainttableComponent } from './complaint_components/complainttable/complainttable.component';
import { AuthGuard } from './services/auth.guard';
import { AdmindashboardComponent } from './user_components/admindashboard/admindashboard.component';
import { AdminpanelComponent } from './user_components/adminpanel/adminpanel.component';
import { DealerdashboardComponent } from './user_components/dealerdashboard/dealerdashboard.component';
import { FarmerdashboardComponent } from './user_components/farmerdashboard/farmerdashboard.component';
import { LoginformComponent } from './user_components/loginform/loginform.component';
import { RegisterformComponent } from './user_components/registerform/registerform.component';
import { RegistertabComponent } from './user_components/registertab/registertab.component';


const routes: Routes = [

  {
    path:"createad",
    component:AdvertisementformComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"viewallcomplaints",
    component:ComplainttableComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]

  },
  {
    path:"viewad",
    component:ViewadvertiseComponent,
    pathMatch:"full"
  },
  {
    path:"viewallads",
    component:ViewadstableComponent,
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
    canActivate:[AuthGuard],

  },
  {
    path:"dealerdashboard",
    component:DealerdashboardComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"farmerdashboard",
    component:FarmerdashboardComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"aboutus",
    component:AboutusComponent,
    pathMatch:"full"

  },
  {
    path:"addcomplaint",
    component:AddcomplaintComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"registertab",
    component:RegistertabComponent,
    pathMatch:"full"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
