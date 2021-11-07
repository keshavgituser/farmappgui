import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewuserComponent } from '../viewuser/viewuser.component';

export interface DealerItem {
  userId:number
  userName:string;
	loginName:string;
	pwd:string;
	phone:string;
  
}

let DEALER_DATA:DealerItem[] = [
];


@Component({
  selector: 'app-dealerstable',
  templateUrl: './dealerstable.component.html',
  styleUrls: ['./dealerstable.component.css']
})
export class DealerstableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource=new _MatTableDataSource<DealerItem>(DEALER_DATA);


  /*
   * @param userName
	 * @param loginName
	 * @param pwd
	 * @param phone
   */
  displayedColumns = ["userName","loginName","phone","actions"];
  role="ROLE_DEALER";
  urole:any;
  public isadmin=false;
  public isdealer=false;
  public isfarmer=false;
  loggedin=false;
  constructor(private userService2:UserService,private snackbar:MatSnackBar,private loginservice:LoginService,public dialog: MatDialog) { }

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    
    this.urole=localStorage.getItem("role");
    this.checkUserType(this.urole);
    this.getAllDealers();

  }
  ngOnInit(): void {  
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.getAllDealers();
    
    
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

  getAllDealers(){
    // console.log("inside dealers");

    let resp=this.userService2.getAllByRole(this.role);

    resp.subscribe(dealer=>this.dataSource.data=dealer as DealerItem[]);
  }


  deleteUser(loginName:any)
  {
    this.userService2.deleteUser(loginName).subscribe(

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
  viewUser(loginName:any){
    //  console.log(loginName);
    this.loggedin=this.loginservice.isLoggedin();
    localStorage.setItem("viewloginname",loginName);
    this.dialog.open(ViewuserComponent);
    // localStorage.setItem("viewloginname",loginName);
    
  }
}

