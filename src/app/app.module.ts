import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './adservice_components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './adservice_components/home/home.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, NgControl, FormBuilder, FormGroup, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { ViewadvertiseComponent } from './adservice_components/viewadvertise/viewadvertise.component';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RegisterformComponent } from './user_components/registerform/registerform.component';
import { LoginformComponent } from './user_components/loginform/loginform.component';
import { RegisterService } from './services/register.service';
import { AdmindashboardComponent } from './user_components/admindashboard/admindashboard.component';
import { DealerdashboardComponent } from './user_components/dealerdashboard/dealerdashboard.component';
import { FarmerdashboardComponent } from './user_components/farmerdashboard/farmerdashboard.component';
import { AboutusComponent } from './complaint_components/aboutus/aboutus.component';
import { AddcomplaintComponent } from './complaint_components/addcomplaint/addcomplaint.component';
import { LoginService } from './services/login.service';
import { ComplaintService } from './services/complaint.service';
import { AuthinterceptorService } from './services/authinterceptor.service';
import { RegistertabComponent } from './user_components/registertab/registertab.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './adservice_components/footer/footer.component';
import { AdminpanelComponent } from './user_components/adminpanel/adminpanel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MainNavComponent } from './complaint_components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ViewadstableComponent } from './adservice_components/viewadstable/viewadstable.component';
import { ComplainttableComponent } from './complaint_components/complainttable/complainttable.component';
import { DealerstableComponent } from './user_components/dealerstable/dealerstable.component';
import { FarmerstableComponent } from './user_components/farmerstable/farmerstable.component';
import { AdminstableComponent } from './user_components/adminstable/adminstable.component';
import { NewadComponent } from './adservice_components/newad/newad.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateadComponent } from './adservice_components/updatead/updatead.component';
// For MDB Angular Free
// import { CarouselModule, WavesModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ViewadvertiseComponent,
    RegisterformComponent,
    LoginformComponent,
    AdmindashboardComponent,
    DealerdashboardComponent,
    FarmerdashboardComponent,
    AboutusComponent,
    AddcomplaintComponent,
    RegistertabComponent,
    FooterComponent,
    AdminpanelComponent,
    MainNavComponent,
    ViewadstableComponent,
    ComplainttableComponent,
    DealerstableComponent,
    FarmerstableComponent,
    AdminstableComponent,
    NewadComponent,
    UpdateadComponent,
    
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    HttpClientModule,    
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    LayoutModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatDialogModule


  ],
  providers: 
  [MatSnackBar,RegisterService,LoginService,ComplaintService,[
    {provide: HTTP_INTERCEPTORS,useClass:AuthinterceptorService,multi:true }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
