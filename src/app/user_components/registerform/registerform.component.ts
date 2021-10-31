import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { LoginformComponent } from '../loginform/loginform.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  private urole:string="dealer";

  

  registerForm={
    
    userName:'',
    loginName:'',
    pwd:'',
    phone:'',
    role:`${this.urole}`,
   
  }
  private registersuccess:boolean=false;

  constructor(private register:RegisterService,private snak:MatSnackBar){ }

  ngOnInit(): void {
    
  }

  hide:boolean = true;

  

  submitForm(){
    console.log("Form submitted");
    console.log("DAta ",this.registerForm);

    
    
    this.register.registerUser(this.urole,this.registerForm).subscribe(
      response=>{

        console.log(response);
        this.registersuccess=true;
        
      },
      error=>{
          console.log(error);
          this.registersuccess=true;
          
      }
    )


    if(this.registersuccess==true)
    {
      this.snak.open("Registered Successfully");
    }
  }

}