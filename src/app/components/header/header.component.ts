import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { DialogCommunicationService } from 'src/app/services/dialog-communication/dialog-communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private dialogService: DialogCommunicationService) { }

  ngOnInit(): void {
  }

  addBook() {
    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.dialogService.emitDialogClosed();
    });
  }

}
