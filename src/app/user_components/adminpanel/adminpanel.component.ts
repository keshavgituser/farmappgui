import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})

export class AdminpanelComponent implements OnInit {
  
  panelOpenState = false;

  userrole=localStorage.getItem("role");
  //show data fields
  paneldata={
    userId: null,
    userName:'',
    loginName:'',
    pwd:'',
    phone:'',
    role:''
  }

  //submit new data
  userdata={


    userId: null,
    userName:'',
    loginName:'',
    pwd:'',
    phone:'',
    role:this.userrole
  }

  update=false;

  constructor(private snack:MatSnackBar,private router:Router,private userService:UserService) { }

  ngOnInit(): void {

    this.getUserDetails();
  }

  hide = true;
  updateUser()
  {
    // this.snack.open("form submitted");
    this.update=true;
  }
  cancelUpdate(){
    // this.snack.open("Canceled");
    this.update=false;

  }
  getUserDetails(){
    
    this.userService.getUser().subscribe(
      user=>{
        //console.log();
        console.log(user);

        


      },
      error=>{
        console.log(error);
        console.log(error.error);
        //assign  data to sow in disabled fields
        this.paneldata=error.error;

        //assign data in enabled fields
      this.userdata=this.paneldata;
      //null the password to be edited
      this.userdata.pwd='';
        
        
      }
    )
  }

  updateUserDetails(){
    // this.snack.open("Update Successfull");
    console.log(this.userdata);

    this.userService.updateUser(this.userdata).subscribe(
      response=>{
        console.log(response);
        this.snack.open("Updated Successfully Please Login ","OK")
        this.router.navigate(['login']);
        window.location.reload
        
      },
      error=>{
        console.log(error);
        console.log(error.status);
        // this.snack.open("Error");
        
        

      }
    )

    

    


    
  }

}
