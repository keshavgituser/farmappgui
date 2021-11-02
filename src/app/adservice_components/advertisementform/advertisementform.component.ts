import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-advertisementform',
  templateUrl: './advertisementform.component.html',
  styleUrls: ['./advertisementform.component.css']
})
export class AdvertisementformComponent implements OnInit {

  username=localStorage.getItem("loggedinusername");;

  ad_data={  
    createdby:this.username,
    title:"",
    adId:"",
    adStock:"",
    adDescription:""
  }

  url='';
  constructor(private snak:MatSnackBar) { 

  }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
    console.log("Trying to create advertisement");
    console.log("Data ",this.ad_data);

    if(this.ad_data.createdby==''||this.ad_data.title==''||
    this.ad_data.adStock==''||this.ad_data.adId==''||
    this.ad_data.adDescription=='')
    {
      this.snak.open("Fields Cannot be Empty","OK");
      
    }

    


 
    

  }

  

  
}
