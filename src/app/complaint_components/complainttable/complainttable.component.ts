import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { ComplaintService } from 'src/app/services/complaint.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ComplaintItem {
  complainDescription:string;
	createdBy:string;
	createdAt:string;
}

let COMP_DATA: ComplaintItem[] = [
];

@Component({
  selector: 'app-complainttable',
  templateUrl: './complainttable.component.html',
  styleUrls: ['./complainttable.component.css']
})
export class ComplainttableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource=new _MatTableDataSource<ComplaintItem>(COMP_DATA);


  /**
   * complainDescription:"string",
    createdBy:"string",
    createdAt:"string"
   */
  displayedColumns = ["createdBy","createdAt","complainDescription","actions"];


  constructor(private compService:ComplaintService,private snak:MatSnackBar) { }

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.getAllComplaints();

  }


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAllComplaints();

  }


  getAllComplaints(){
    // console.log("all complaints");

    let resp=this.compService.getAllComplaints();

    resp.subscribe(complaint=>this.dataSource.data=complaint as ComplaintItem[])


    
  }
  deleteData(complaintId:any){
  // console.log("Deleted",complaintId);

  this.compService.deleteComplaint(complaintId).subscribe(

    response=>{
        console.log("response",response);
        
    },
    error=>{
      console.log("error",error);
      
    }
    
  )
  
  window.location.reload();
  this.snak.open("Deleted Successfully");
  }

}


/*
	 * @param complainDescription
	 * @param createdBy
	 * @param createdAt
	 */