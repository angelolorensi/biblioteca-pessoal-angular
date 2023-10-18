import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;
  bookRating!: number;
  @Output() bookAdded = new EventEmitter();

  constructor(
    private fb:FormBuilder,
    private bookService:BookService,
    private dialogRef: MatDialogRef<AddBookComponent>,
    private snackBar:MatSnackBar
    ) {
    this.bookForm = fb.group({
      titulo: [''],
      autor: [''],
      classificacao: [''],
      resenha: ['']
    })
   }

  ngOnInit(): void {
  }

  submitNewBook(){
    console.log(this.bookForm.value)
    this.bookService.createBook(this.bookForm.value).subscribe(
      data => {
        this.snackBar.open('Livro adicionado com sucesso!', 'X', {duration:5000});
        this.dialogRef.close();
        this.bookAdded.emit();
      }
    )
  }

  onRatingChanged(newRating: number):void{
    this.bookForm.get('classificacao')?.setValue(newRating);
  }
}
