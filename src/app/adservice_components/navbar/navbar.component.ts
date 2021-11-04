import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public userrole=localStorage.getItem("role");


  // public loggedinasadmin=false;
  constructor(private loginservice:LoginService,private router:Router) { }

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

  userDashboard(){
    
    console.log(this.userrole);
    if(this.userrole=="[ROLE_ADMIN]")
    {
      this.router.navigate(['admindashboard']);
      
    
    }
    if(this.userrole=="[ROLE_DEALER]")
    {
      this.router.navigate(['dealerdashboard']);
      return
    }
    if(this.userrole=="[ROLE_FARMER]")
    {
      this.router.navigate(['farmerdashboard']);
      return
    }



  }

}
