import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginformComponent } from './../../user_components/loginform/loginform.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedin=false;
  public loggedinusername=localStorage.getItem("loggedinusername");;
  public userrole=localStorage.getItem("role");
  public urole:any;


  public isadmin=false;
  public isdealer=false;
  public isfarmer=false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // public loggedinasadmin=false;
  constructor(private breakpointObserver: BreakpointObserver,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loggedin=this.loginservice.isLoggedin();
    this.urole=localStorage.getItem("role");
    
    this.checkUserType(this.urole);
  
    
    //Enable the below code for reference in hiding menu bar
    // this.loggedinasadmin=this.loginservice.isLoggedinasAdmin();
    // console.log(this.loggedinasadmin);
  }

  logoutUser(){
    this.loginservice.logout();
    location.reload();
  }

  checkUserType(urole:string){

    if(this.userrole=="[ROLE_ADMIN]")
    {
      this.isadmin=true;
      return
      
    
    }
    if(this.userrole=="[ROLE_DEALER]")
    {
      this.isdealer=true;
      return
    }
    if(this.userrole=="[ROLE_FARMER]")
    {
      this.isfarmer=true;
      return
    }


  }

  userDashboard(){
    
    // console.log(this.userrole);
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
