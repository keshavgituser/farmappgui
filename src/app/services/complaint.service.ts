import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginformComponent } from './../user_components/loginform/loginform.component';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  username=localStorage.getItem("loggedinusername");
  // /{loginName}/addComplaint
  private baseUrl:string="http://localhost:9091/complaint";
  constructor(private http:HttpClient) { }

  registerComplaint(comp_data: any) {
    //this.loginform.getloggedInUsername

    return this.http.post(`${this.baseUrl}/${this.username}/addComplaint`, comp_data);
  }


  getAllComplaints(){
    return this.http.get(`${this.baseUrl}/viewAllComplaint`);
  }

  deleteComplaint(complaintId:any){
    return this.http.delete(`${this.baseUrl}/${complaintId}`);
  }
}
