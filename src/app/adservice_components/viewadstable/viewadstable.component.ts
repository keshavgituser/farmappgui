import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, _MatTableDataSource } from '@angular/material/table';
import { AdvertiseService } from 'src/app/services/advertise.service';
// import { ViewadDataSource } from './viewadstable-datasource';
// import { ViewadItem, ViewadDataSource, ViewadstableItem } from './viewadstable-datasource';
import { ViewadItem } from './viewad-item';
import { DataSource } from '@angular/cdk/collections';




@Component({
  selector: 'app-viewadstable',
  templateUrl: './viewadstable.component.html',
  styleUrls: ['./viewadstable.component.css']
})
export class ViewadstableComponent implements AfterViewInit {
  AD_DATA: ViewadItem[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ViewadItem>;
  dataSource=new _MatTableDataSource<ViewadItem>(this.AD_DATA);
  // dataSource=ViewadDataSource;

  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["advertiseId","advertiseIdentifier","availableStock","offerDescription","postedBy"];


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
    this.table.dataSource = this.dataSource;

  }

  ngOnInit(): void {

    this.getAllAdvertisements();
    
  }

  getAllAdvertisements(){

    let resp=this.adservice.getAllAdvertisements();

    resp.subscribe(ad=>this.dataSource.data=ad as ViewadItem[])

      


  }
  
}
