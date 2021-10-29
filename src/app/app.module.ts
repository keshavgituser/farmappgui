import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './adservice_components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertisementformComponent } from './adservice_components/advertisementform/advertisementform.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NewdealerformComponent } from './user_components/newdealerform/newdealerform.component';
import { HomeComponent } from './adservice_components/home/home.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ViewadvertiseComponent } from './adservice_components/viewadvertise/viewadvertise.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdvertisementformComponent,
    NewdealerformComponent,
    HomeComponent,
    ViewadvertiseComponent,
    
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
    

  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
