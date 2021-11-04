import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-viewallads',
  templateUrl: './viewallads.component.html',
  styleUrls: ['./viewallads.component.css']
})
export class ViewalladsComponent implements OnInit {


  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    // 
  }


}

