import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public loggedin=false;
  public loggedinusername=localStorage.getItem("loggedinusername");;
  public userrole=localStorage.getItem("role");

  constructor(private breakpointObserver: BreakpointObserver,private loginservice:LoginService,private router:Router) {}

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
