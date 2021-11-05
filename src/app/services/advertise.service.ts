import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  loginName=localStorage.getItem("loggedinusername");
  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:9092/advertisement";
  

  createAdvertisement(ad_data:any){
    
  }


  getAllAdvertisements()
  {
    return this.http.get(`${this.baseUrl}/all`);
  }

}
