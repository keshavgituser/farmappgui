import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginformComponent } from './../../user_components/loginform/loginform.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedin=false;
  public loggedinusername=localStorage.getItem("loggedinusername");;

  // public loggedinasadmin=false;
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.loggedin=this.loginservice.isLoggedin();
    
    //Enable the below code for reference in hiding menu bar
    // this.loggedinasadmin=this.loginservice.isLoggedinasAdmin();
    // console.log(this.loggedinasadmin);
  }

  logoutUser(){
    this.loginservice.logout();
    location.reload();
  }
}
