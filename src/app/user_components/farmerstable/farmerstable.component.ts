import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewuserComponent } from '../viewuser/viewuser.component';




export interface FarmerItem {
  userName:string;
	loginName:string;
	pwd:string;
	phone:string;
  
}

let DEALER_DATA:FarmerItem[] = [
];
@Component({
  selector: 'app-farmerstable',
  templateUrl: './farmerstable.component.html',
  styleUrls: ['./farmerstable.component.css']
})
export class FarmerstableComponent implements AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource=new _MatTableDataSource<FarmerItem>(DEALER_DATA);



   /*
   * @param userName
	 * @param loginName
	 * @param pwd
	 * @param phone
   */
   displayedColumns = ["userName","loginName","phone","actions"];
   role="ROLE_FARMER";
   urole:any;
  public isadmin=false;
  public isdealer=false;
  public isfarmer=false;
  loggedin=false;
  constructor(private userService3:UserService,private snackbar:MatSnackBar,private loginservice:LoginService,public dialog: MatDialog) { }


  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.getAllFarmers();

  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAllFarmers();
  }
  getAllFarmers(){
    // console.log("inside dealers");

    let resp=this.userService3.getAllByRole(this.role);

    resp.subscribe(dealer=>this.dataSource.data=dealer as FarmerItem[]);
  }

  deleteUser(loginName:any)
  {
    this.userService3.deleteUser(loginName).subscribe(

      response=>{
        console.log(response);
        
      }
      ,
      error=>{
        console.log(error);
        

      }
    )

    window.location.reload();
    this.snackbar.open("Farmer Deleted Successfully","OK");
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
