import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.css']
})
export class AddcomplaintComponent implements OnInit {

  username=localStorage.getItem("loggedinusername");
  comp_data={
    complainDescription:"",
    createdBy:`${this.username}`
  }

  constructor(private complaint:ComplaintService, private snak:MatSnackBar) { 
  }
  
  ngOnInit(): void {
    
  }
  doSubmitForm(){
    console.log("Trying to submit complaint form");
    console.log("Complaint is", this.comp_data);

    // if(this.comp_data.createdby==''|| this.comp_data.compDescription=='')
    if(this.comp_data.complainDescription=='')
    {
    this.snak.open("Fields Cannot be Empty !!","OK");
    return;
    }
    // this.comp_data.createdBy=this.userloginname;
    this.complaint.registerComplaint(this.comp_data).subscribe(
      response=>{
        console.log(response)
      },
      error=>{
        console.log(error);
      }
    )
   
  }

}
