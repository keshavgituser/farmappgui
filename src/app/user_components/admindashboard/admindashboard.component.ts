import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {


  user:any;

  constructor(private userService:UserService) { }

  
  ngOnInit(): void {
  }

  getUserDetails(){
    
    this.userService.getUser().subscribe(
      user=>{
        //console.log();
        console.log(user);
        


      },
      error=>{
        console.log(error);
        
        
      }
    )
  }


}
