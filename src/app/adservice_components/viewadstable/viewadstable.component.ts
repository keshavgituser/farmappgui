import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, _MatTableDataSource } from '@angular/material/table';
import { AdvertiseService } from 'src/app/services/advertise.service';
// import { ViewadDataSource } from './viewadstable-datasource';
// import { ViewadItem, ViewadDataSource, ViewadstableItem } from './viewadstable-datasource';
import { DataSource } from '@angular/cdk/collections';

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

  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. 
   * "advertiseId","advertiseIdentifier","availableStock","offerDescription","postedBy"
  */
  displayedColumns = ["advertiseId","title","advertiseIdentifier","availableStock","offerDescription","postedBy"];


  ad_data={  
    
    // title:'',
    // advertiseIdentifier:'',
    // offerDescription:'',
    // availableStock:'',
    // postedBy:'',
  }
  constructor(private adservice:AdvertiseService) {
    
  }

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.getAllAdvertisements();

  }

  ngOnInit(): void {

    this.getAllAdvertisements();
    AD_DATA.forEach(element => {
      
    });
    
  }

  getAllAdvertisements(){

    let resp=this.adservice.getAllAdvertisements();

    resp.subscribe(ad=>this.dataSource.data=ad as ViewadItem[])

      


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