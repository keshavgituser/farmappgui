import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  view_user:any={
    userName:'',
    loginName:'',
    pwd:'',
    phone:null,
    role:'',
    userId:null

  }
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.getUser(localStorage.getItem("viewloginname"));
  }


  
  getUser(loginName:any){

    this.userservice.getUserbyName(loginName).subscribe(

      user=>{
        //  console.log(user);
        // this.view_user=response;
        

      },
      error=>{
         this.view_user=error.error;
         ;
        // console.log(this.view_user);
        
      console.log(error.error);
        
      }
    )

  }

  
  

}
