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



  loginUser(token:any,role:any)
  {
    localStorage.setItem("token",token);
    localStorage.setItem("role",role);
    return true;
  }

  //to check user is logged in or not
  isLoggedin()
  {
    let token=localStorage.getItem("token");
    let role=localStorage.getItem("role");
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  isLoggedinasAdmin()
  {
    let token=localStorage.getItem("token");
    let role=localStorage.getItem("role");
    console.log(role);
    
    if(token==undefined || token==='' || token==null && role!="[ROLE_ADMIN]")
    {
      return false;
    }
    else{
      return true;
    }
  }

  isLoggedinasDealer()
  {
    let token=localStorage.getItem("token");
    let role=localStorage.getItem("role");
    if(token==undefined || token==='' || token==null && role=="[ROLE_DEALER]")
    {
      return false;
    }
    else{
      return true;
    }
  }

  isLoggedinasFarme()
  {
    let token=localStorage.getItem("token");
    let role=localStorage.getItem("role");
    if(token==undefined || token==='' || token==null && role=="[ROLE_FARMER]")
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
    localStorage.removeItem('role');
    return true; 
  }


  //For getting jwt token
  getToken()
  {
    return localStorage.getItem("token");
  }
}
