import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../services/login.service';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  options: FormGroup;
  loginNameControl=new FormControl('',[Validators.required, Validators.pattern("^[a-z_.0-9]{1,9}$")]);
  pwdControl=new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9!@#$%&]{5,10}$")]);
  credentials={

    username:'',
    password:''
  }


  loggedinusername="";
  constructor(fb: FormBuilder,private loginservice:LoginService,private snack:MatSnackBar) { 
    this.options = fb.group({
      username:this.loginNameControl,
      password:this.pwdControl

    });
  }

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
            //setting user loginame  after sucessfull login
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
            this.snack.open("Invalid Credentials","Ok");
            console.log("error",error);
            
            //error
          }
        )
        
    }
    else{
       //console.log("Empty fields");
    }
    
  }


}
