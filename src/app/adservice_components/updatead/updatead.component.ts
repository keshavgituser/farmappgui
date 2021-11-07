import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdvertiseService } from 'src/app/services/advertise.service';
@Component({
  selector: 'app-updatead',
  templateUrl: './updatead.component.html',
  styleUrls: ['./updatead.component.css']
})
export class UpdateadComponent implements OnInit {


  options: FormGroup;
  adIdControl=new FormControl('',Validators.pattern("^[a-zA-Z]{1,2}[0-9]{1,4}$"));
  stockControl = new FormControl(0, [
    Validators.min(1),
    Validators.max(999)]);
  offerdescControl=new FormControl('',Validators.pattern("^[a-zA-Z0-9 %$@]{5,100}$"));
  adtitleControl=new FormControl('',Validators.pattern("^[A-Z ]{1}[a-z ]{2,10}$"));


  username=localStorage.getItem("loggedinusername");

  // show_data={  
    
  //   title:'',
  //   advertiseIdentifier:'',
  //   offerDescription:'',
  //   availableStock:'',
  //   postedBy:this.username,
  // }


  show_data:any={  
    
    title:'',
    advertiseIdentifier:'',
    offerDescription:'',
    availableStock:'',
    postedBy:'',
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

    this.getAdvertisement(localStorage.getItem("title"));
  }

  getStock() {
    return Math.max(10, this.stockControl.value);
  }
  doSubmitForm()
  {
     console.log("Trying to update advertisement");
   
    // console.log("Data ",this.show_data);


    this.show_data.availableStock=this.show_data.availableStock.toString();
    this.show_data;
    this.adservice.updateAdvertisement(this.show_data).subscribe(

      response=>{
        console.log(response);
        
      },
      error=>{
        console.log(error);
        
      }
      )
      localStorage.removeItem("title")
      window.location.reload();
      this.snak.open("Updated Successfully","OK")
  }

  getAdvertisement(title:any){
    // console.log(localStorage.getItem("title"));
    

    this.adservice.getAdvertise(title).subscribe(

      response=>{
        // console.log(response);
        this.show_data=response;
        

      },
      error=>{
        console.log(error);
        
      }
    )

    

    
    


    
  }
}
