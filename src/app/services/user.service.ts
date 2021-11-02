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
}
