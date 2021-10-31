import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../services/login.service';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  credentials={

    username:'',
    password:''
  }

  constructor(private loginservice:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  hide = true;

  SubmitLoginForm(){
    // this.snack.open("Form Submitted","Ok");
    if((this.credentials.username!='') &&
        (this.credentials.password!='') &&
        (this.credentials.username!=null) &&
        (this.credentials.password!=null)
    )
    {
        // console.log("We have to Submit the Form");

        //generate token
        //console.log(this.credentials);
        
        this.loginservice.generateToken(this.credentials).subscribe(
          (response:any)=>{
            //success
            console.log("Success",response);
            this.loginservice.loginUser(response.jwt,response.userrole);

            // Check the role and Redirect on basis of role

            if(response.userrole=="[ROLE_ADMIN]")
            {
              console.log("Redirecting to admin Dashboard");
              
              window.location.href="/admindashboard"
            }
            else
            if(response.userrole=="[ROLE_DEALER]")
            {
              console.log("Redirecting to Dealer Dashboard");
              window.location.href="/dealerdashboard"
            }
            else
            if(response.userrole=="[ROLE_FARMER]")
            {
              console.log("Redirecting to Farmer Dashboard");
              window.location.href="/farmerdashboard"
            }

            

          },
          (error:any)=>{
            console.log("error",error);
            
            //error
          }
        )
        
    }
    else{
      // console.log("Empty fields");
      
    }
    
  }


}
