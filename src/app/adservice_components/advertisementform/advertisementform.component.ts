import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-advertisementform',
  templateUrl: './advertisementform.component.html',
  styleUrls: ['./advertisementform.component.css']
})
export class AdvertisementformComponent implements OnInit {

  createdBy="Username";

  ad_data={  
    createdby:this.createdBy,
    title:"",
    adId:"",
    adStock:"",
    adDescription:""
  }

  
  constructor(private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
    console.log("Try to Submit form");
    console.log("DAta ",this.ad_data);

    if(this.ad_data.createdby==''||this.ad_data.title==''||
    this.ad_data.adStock==''||this.ad_data.adId==''||
    this.ad_data.adDescription=='')
    {
      this.snak.open("Fields Cannot be Empty","OK");
      
    }

 
    

  }

  

  
}
