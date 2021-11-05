import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ViewadstableDataSource, ViewadstableItem } from './viewadstable-datasource';

@Component({
  selector: 'app-viewadstable',
  templateUrl: './viewadstable.component.html',
  styleUrls: ['./viewadstable.component.css']
})
export class ViewadstableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ViewadstableItem>;
  dataSource: ViewadstableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ViewadstableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(): void {

    console.log("works");
    
  }

  getAllAdvertisements(){

    
  }
  
}