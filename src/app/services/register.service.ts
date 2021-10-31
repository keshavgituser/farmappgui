import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterformComponent } from './../user_components/registerform/registerform.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl:string="http://localhost:8081/secureuser";
  constructor(private http:HttpClient) { }
  
  registerUser(urole:any,registerForm:any){

    
    // /farmer/register
    return this.http.post(`${this.baseUrl}/${urole}/register`,registerForm);
    
  }
}
