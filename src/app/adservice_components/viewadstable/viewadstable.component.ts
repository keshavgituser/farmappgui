import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, _MatTableDataSource } from '@angular/material/table';
import { AdvertiseService } from 'src/app/services/advertise.service';
// import { ViewadDataSource } from './viewadstable-datasource';
// import { ViewadItem, ViewadDataSource, ViewadstableItem } from './viewadstable-datasource';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { NewadComponent } from '../newad/newad.component';
import { LoginService } from 'src/app/services/login.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateadComponent } from './../updatead/updatead.component';

export interface ViewadItem {
  advertiseId:number;
  advertiseIdentifier:string;
  availableStock:string;
  offerDescription:string;
  postedBy:string;
}

let AD_DATA: ViewadItem[] = [
];


@Component({
  selector: 'app-viewadstable',
  templateUrl: './viewadstable.component.html',
  styleUrls: ['./viewadstable.component.css']
})
export class ViewadstableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<ViewadItem>;
  dataSource=new _MatTableDataSource<ViewadItem>(AD_DATA);
  // dataSource=ViewadDataSource;
  loggedin=false;

  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. 
   * "advertiseId","advertiseIdentifier","availableStock","offerDescription","postedBy"
  */
  displayedColumns = ["advertiseId","title",
  "advertiseIdentifier","availableStock",
  "offerDescription","postedBy","actions"];


  ad_data={  
    
    // title:'',
    // advertiseIdentifier:'',
    // offerDescription:'',
    // availableStock:'',
    // postedBy:'',
  }
  urole:any;
  public isadmin=false;
  public isdealer=false;
  public isfarmer=false;
  constructor(private snack:MatSnackBar,private loginservice:LoginService,private adservice:AdvertiseService,public dialog: MatDialog) {
    
  }
  opencreateDialog() {
    this.loggedin=this.loginservice.isLoggedin();
    this.dialog.open(NewadComponent);
  }
  openupdateDialog(title:any) {
    this.loggedin=this.loginservice.isLoggedin();
    console.log(title);
    localStorage.setItem("title",title);
    this.dialog.open(UpdateadComponent);
  }

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.urole=localStorage.getItem("role");
    this.checkUserType(this.urole);

    // this.table.dataSource = this.dataSource;
    this.getAllAdvertisements();

  }

  ngOnInit(): void {

    this.getAllAdvertisements();
    this.urole=localStorage.getItem("role");
    this.checkUserType(this.urole);
    AD_DATA.forEach(element => {
      
    });
    
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

  getAllAdvertisements(){

    let resp=this.adservice.getAllAdvertisements();

    resp.subscribe(ad=>this.dataSource.data=ad as ViewadItem[])

      


  }
  
  deleteAd(advertiseIdentifier:any){

    this.adservice.deleteAdvertise(advertiseIdentifier).subscribe(
      response=>{
        console.log(response);
        
      },error=>{
          console.log(error);
          
      }
    )

    window.location.reload();
    this.snack.open("Deleted Successfully","OK")
  }
}


/**
 * 
 *  <!-- ad identifier -->
    <ng-container matColumnDef="advertiseIdentifier">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>adIdentifier</th>
      <td mat-cell *matCellDef="let row">{{row.advertiseIdentifier}}</td>
    </ng-container>

    <!-- ad Stock -->
    <ng-container matColumnDef="availableStock">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Stock</th>
      <!-- <td mat-cell *matCellDef="let row">{{row.name}}</td> -->
    </ng-container>
  
    <!-- ad Description -->
    <ng-container matColumnDef="offerDescription">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>
      <!-- <td mat-cell *matCellDef="let row">{{row.name}}</td> -->
    </ng-container>

    <!-- ad  postedBy -->
    <ng-container matColumnDef="postedBy">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>postedBy</th>
      <!-- <td mat-cell *matCellDef="let row">{{row.name}}</td> -->
    </ng-container>

    <!-- ad title -->
    <ng-container matColumnDef="title">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>title</th>
      <!-- <td mat-cell *matCellDef="let row">{{row.name}}</td> -->
    </ng-container>

 */