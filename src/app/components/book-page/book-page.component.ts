import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/model/Book';
import { GoogleBooksService } from 'src/app/services/google-books/google-books.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book?: Book;
  edit: boolean = false;
  editForm!: FormGroup;
  bookRating!: number;

  constructor(
    private route: ActivatedRoute,
    private bookService:BookService,
    private googleBooksService: GoogleBooksService,
    private fb:FormBuilder,
    private snackbar: MatSnackBar,
    private dialog: MatDialog) {

    this.route.params.subscribe(params => {
      const bookId = +params['id'];
      this.bookService.getById(bookId).subscribe(
        data => {
          this.book = data;
          this.bookRating = data.classificacao;
          //this.loadBookCover(data.titulo, data.imageUrl);

          this.editForm = this.fb.group({
            titulo: [this.book?.titulo],
            autor: [this.book?.autor],
            classificacao: [this.bookRating],
            resenha: [this.book?.resenha]
          })
        }
      )
    });
   }

  ngOnInit(): void {

  }

  loadBookCover(title: string, imageUrl:string){
    this.googleBooksService.searchBookImage(title).subscribe(
      image => {
        if(image){
          imageUrl = image;
        }
      }
    )
  }

  editBook(){
    this.edit = !this.edit;
  }

  submitUpdatedBook(bookId: number){
    this.bookService.updateBook(bookId, this.editForm.value).subscribe(
     data => {
       this.snackbar.open('Livro editado com sucesso!', 'close', {duration: 2000})
       this.edit = !this.edit;
       location.reload();
     }
    );

  }

  onRatingChanged(newRating: number):void{
    this.editForm.get('classificacao')?.setValue(newRating);
  }

  removeBook(bookId:number){
    this.dialog.open(ConfirmationDialogComponent, {data: bookId});
  }

}
