import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';



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
  constructor(private userService1:UserService,private snackbar:MatSnackBar) { }


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
}
