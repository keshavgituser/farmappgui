import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private userService2:UserService,private snackbar:MatSnackBar) { }

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.getAllDealers();

  }
  ngOnInit(): void {  
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.getAllDealers();
    
    
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
    console.log(loginName);
    
  }
}

