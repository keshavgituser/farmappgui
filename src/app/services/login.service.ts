import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8081/secureuser";
  constructor(private http:HttpClient) { }


  generateToken(credentials:any){

    return this.http.post(`${this.baseUrl}/login`,credentials);
  }



  loginUser(token:any)
  {
    localStorage.setItem("token",token);
    return true;
  }

  //to check user is logged in or not
  isLoggedin()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  //to logout user
  logout(){
    localStorage.removeItem('token');
    return true; 
  }


  //For getting jwt token
  getToken()
  {
    return localStorage.getItem("token");
  }
}
