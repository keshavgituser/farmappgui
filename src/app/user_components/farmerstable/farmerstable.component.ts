import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';




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
   displayedColumns = ["userName","loginName","phone"];
   role="ROLE_FARMER";
  constructor(private userService3:UserService) { }


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

}
