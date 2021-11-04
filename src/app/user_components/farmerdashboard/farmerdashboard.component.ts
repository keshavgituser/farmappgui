import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-farmerdashboard',
  templateUrl: './farmerdashboard.component.html',
  styleUrls: ['./farmerdashboard.component.css']
})
export class FarmerdashboardComponent implements OnInit {

  userdata:any;
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
        console.log(error.error);
        this.userdata=error.error;
        
        
      }
    )
  }
}
