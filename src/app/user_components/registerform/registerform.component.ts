import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  registerForm={
    id:null,
    role:'',
    Username:'',
    Loginname:'',
    pwd:'',
    phoneno:''
  }

  ngOnInit(): void {
  }

  hide:boolean = true;

  submitForm(){
    console.log("Form submitted");
    //console.log("DAta ",this.form.value);
    
  }

  
  // saveForm(){
  //   console.log('Form data is',this.profileForm.value);
    
  // }
}
