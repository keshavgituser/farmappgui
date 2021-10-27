import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newdealerform',
  templateUrl: './newdealerform.component.html',
  styleUrls: ['./newdealerform.component.css']
})
export class NewdealerformComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  btnClick()
  {
    console.log("btn click");
    this.snack.open("Hey Welcome To Dealer registration form","Cancel");
    
    
  }

}
