import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { ViewuserComponent } from '../viewuser/viewuser.component';



export interface AdminItem {
  userName:string;
	loginName:string;
	pwd:string;
	phone:string;
  
}

let FARMER_DATA:AdminItem[] = [
];
@Component({
  selector: 'app-adminstable',
  templateUrl: './adminstable.component.html',
  styleUrls: ['./adminstable.component.css']
})
export class AdminstableComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource=new _MatTableDataSource<AdminItem>(FARMER_DATA);
   /*
   * @param userName
	 * @param loginName
	 * @param pwd
	 * @param phone
   */
   displayedColumns = ["userName","loginName","phone","actions"];
   role="ROLE_ADMIN";
   urole:any;
  public isadmin=false;
  public isdealer=false;
  public isfarmer=false;
  loggedin=false;
  constructor(private userService1:UserService,private snackbar:MatSnackBar,private loginservice:LoginService,public dialog: MatDialog) { }


  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.getAllAdmins();

  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAllAdmins();
  }
  getAllAdmins(){
    // console.log("inside dealers");

    let resp=this.userService1.getAllByRole(this.role);

    resp.subscribe(dealer=>this.dataSource.data=dealer as AdminItem[]);
  }

  deleteUser(loginName:any)
  {
    this.userService1.deleteUser(loginName).subscribe(

      response=>{
        console.log(response);
        
      }
      ,
      error=>{
        console.log(error);
        

      }
    )

    window.location.reload();
    this.snackbar.open("Dealer Deleted Successfully","OK");
  }

  checkUserType(urole:string){

    if(this.urole=="[ROLE_ADMIN]")
    {
      this.isadmin=true;
      return
      
    
    }
    if(this.urole=="[ROLE_DEALER]")
    {
      this.isdealer=true;
      return
    }
    if(this.urole=="[ROLE_FARMER]")
    {
      this.isfarmer=true;
      return
    }


  }
  viewUser(loginName:any){
    //  console.log(loginName);
    this.loggedin=this.loginservice.isLoggedin();
    localStorage.setItem("viewloginname",loginName);
    this.dialog.open(ViewuserComponent);
    // localStorage.setItem("viewloginname",loginName);
    
  }


}
