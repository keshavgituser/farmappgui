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
    return this.http.post(`${this.baseUrl}/create`,ad_data);
  }


  getAllAdvertisements()
  {
    return this.http.get(`${this.baseUrl}/all`);
  }
  deleteAdvertise(advertiseIdentifier:any)
  {
    return this.http.delete(`${this.baseUrl}/${advertiseIdentifier}`);
  }

}
