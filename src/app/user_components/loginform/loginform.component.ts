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
            console.log("Success",response.jwt);
            this.loginservice.loginUser(response.jwt);
            

          },
          error=>{
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
