import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addBook(){
    this.dialog.open(AddBookComponent);
  }

}
