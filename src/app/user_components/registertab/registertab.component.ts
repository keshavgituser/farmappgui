import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { LoginformComponent } from '../loginform/loginform.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registertab',
  templateUrl: './registertab.component.html',
  styleUrls: ['./registertab.component.css']
})
export class RegistertabComponent implements OnInit {

  options: FormGroup;
  userNameControl=new FormControl('',Validators.pattern("^[A-Z]{1}[a-z]{1,9}$"));
  loginNameControl=new FormControl('',Validators.pattern("^[a-z_.0-9]{1,9}$"));
  phoneControl=new FormControl('',[Validators.pattern("^[0-9]{10}$"),Validators.maxLength(10)]);
  pwdControl=new FormControl('',Validators.pattern("^[A-Za-z0-9!@#$%&]{5,10}$"));

  private urole:string="";
  registerForm={
    
    userName:'',
    loginName:'',
    pwd:'',
    phone:null,
    role:`${this.urole}`,
   
  }
  private registersuccess:boolean=false;

  

  constructor(fb: FormBuilder,private register:RegisterService,private router:Router,private snak:MatSnackBar) { 

    this.options = fb.group({
      userName:this.userNameControl,
      loginName:this.loginNameControl,
      phone:this.phoneControl,
      pwd:this.pwdControl

    });
  }

  ngOnInit(): void {
    this.urole="";
    console.log(this.urole);
    
  }
  hide:boolean = true;

  submitFormasDealer(){
    console.log("Form submitted");
    console.log("DAta ",this.registerForm);

    this.urole="dealer"
    this.register.registerUser(this.urole,this.registerForm).subscribe(
      (response:any)=>{

        console.log(response);
        
        this.registersuccess=true;
        this.snak.open("Registered Successfully","OK")
        this.router.navigate(['login']);
        
      },
      error=>{
          console.log(error);
          console.log(error.status);
          if(error.status==409)
          {
            this.snak.open("User Already Exist Please Login","OK")
            this.router.navigate(['login']);
          }
          this.registersuccess=false;
          
      }
    )
    window.location.reload();
    this.snak.open("Registered Successfully");
  }

  submitFormasFarmer(){
    console.log("Form submitted");
    console.log("DAta ",this.registerForm);

    this.urole="farmer"
    this.register.registerUser(this.urole,this.registerForm).subscribe(
      response=>{

        console.log(response);
        this.registersuccess=true;
        this.snak.open("Registered Successfully","OK")
        this.router.navigate(['login']);
        
      },
      error=>{
          console.log(error);
          
          console.log(error.status);
          if(error.status==409)
          {
            this.snak.open("User Already Exist Please Login","OK")
            this.router.navigate(['login']);
          }
          this.registersuccess=false;
          
      }
    )


    window.location.reload();
    this.snak.open("Registered Successfully");
    // if(this.registersuccess==true)
    // {
    //   this.snak.open("Farmer Registered Successfully");
    // }
  }

  submitFormasAdmin(){
    console.log("Form submitted");
    console.log("Data ",this.registerForm);

    this.urole="admin"
    this.register.registerUser(this.urole,this.registerForm).subscribe(
      response=>{
        this.registersuccess=true;
        console.log(response);
        this.snak.open("Registered Successfully","OK")
        this.router.navigate(['login']);
        
        
      },
      error=>{
          console.log(error);
          console.log(error.status);
          if(error.status==409)
          {
            this.snak.open("User Already Exist Please Login","OK")
            this.router.navigate(['login']);
          }
          this.registersuccess=false;
          
      }
    )
    window.location.reload();
    this.snak.open("Registered Successfully");

   
  }

}
