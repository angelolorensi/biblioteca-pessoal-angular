import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookService: BookService,
    private router:Router,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  //Quando ativada a função exclui um livro, fecha o dialog e abre um snackbar confirmando a exclusão.
  confirm(){
    this.bookService.delete(this.data).subscribe(
      data => {
        this.dialogRef.close();
        this.snackBar.open('Livro excluido com sucesso!','close', {duration:2000})
        this.router.navigateByUrl('/home');
      }
    );
  }

}
