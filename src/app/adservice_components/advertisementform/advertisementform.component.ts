import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdvertiseService } from 'src/app/services/advertise.service';

@Component({
  selector: 'app-advertisementform',
  templateUrl: './advertisementform.component.html',
  styleUrls: ['./advertisementform.component.css']
})
export class AdvertisementformComponent implements OnInit {

  options: FormGroup;
  adIdControl=new FormControl('',Validators.pattern("^[a-zA-Z]{1,2}[0-9]{1,4}$"));
  stockControl = new FormControl(0, [
    Validators.min(1),
    Validators.max(999)]);
  offerdescControl=new FormControl('',Validators.pattern("^[a-zA-Z0-9 %$@]{5,100}$"));
  adtitleControl=new FormControl('',Validators.pattern("^[A-Z ]{1}[a-z ]{2,10}$"));


  username=localStorage.getItem("loggedinusername");


  // @param title
  // * @param advertiseIdentifier
  // * @param offerDescription
  // * @param availableStock
  // * @param postedBy

  ad_data={  
    
    title:'',
    advertiseIdentifier:'',
    offerDescription:'',
    availableStock:'',
    postedBy:this.username,
  }

  url='';
  constructor(fb: FormBuilder,private snak:MatSnackBar,private adservice:AdvertiseService) { 

    this.options = fb.group({
      title:this.adtitleControl,
      advertiseIdentifier:this.adIdControl,
      offerDescription:this.offerdescControl,
      availableStock:this.stockControl,
      postedBy:this.username
    });

  }

  ngOnInit(): void {
  }

  getStock() {
    return Math.max(10, this.stockControl.value);
  }
  doSubmitForm()
  {
    // console.log("Trying to create advertisement");
   
    console.log("Data ",this.ad_data);


    this.ad_data.availableStock=this.ad_data.availableStock.toString();
    this.adservice.createAdvertisement(this.ad_data).subscribe(

      response=>{
        console.log(response);
        
      },
      error=>{
        console.log(error);
        
      }

   
      
      
      
      )
  }

  

  
}
