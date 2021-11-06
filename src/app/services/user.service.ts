import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginName=localStorage.getItem("loggedinusername");
  baseUrl="http://localhost:8081/secureuser";

  constructor(private http:HttpClient) { }


  getUser(){

    return this.http.get(`${this.baseUrl}/profile/${this.loginName}`);
  }

  updateUser(user_data:any){
    return this.http.put(`${this.baseUrl}/profile/update`,user_data);
  }

  getAllByRole(role:any){
    return this.http.get(`${this.baseUrl}/profiles/allbyrole/${role}`);
  }
  
  getAllUsers(){
    return this.http.get(`${this.baseUrl}/profiles/all`);

  }
}
