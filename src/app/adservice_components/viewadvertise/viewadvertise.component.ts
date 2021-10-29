import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewadvertise',
  templateUrl: './viewadvertise.component.html',
  styleUrls: ['./viewadvertise.component.css']
})
export class ViewadvertiseComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  updatebtnClick()
  {
    this.snack.open("Clicked on Update btn","Cancel");
  }

  deletebtnClick()
  {
    this.snack.open("Clicked on Delete btn","Cancel");
  }
}
