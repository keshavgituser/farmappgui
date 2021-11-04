import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';




@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {


  userdata:any;
  
  

  constructor(private userService:UserService) { }

  
  ngOnInit(): void {
    this.getUserDetails();
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
        this.userdata=error.error;
        
        
      }
    )
  }


}
