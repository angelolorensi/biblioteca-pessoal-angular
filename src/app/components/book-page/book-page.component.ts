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

   }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.route.params.subscribe(params => {
      const bookId = +params['id'];
      this.bookService.getById(bookId).subscribe(
        data => {
          this.book = data;
          this.bookRating = data.classificacao;
          this.loadBookCover(data.titulo, data.imageUrl);

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

  //Carrega a capa do livro
  loadBookCover(title: string, imageUrl:string){
    this.googleBooksService.searchBookImage(title).subscribe(
      image => {
        if(image){
          this.book!.imageUrl = image;
        }
      }
    )
  }

  //Mostra a pagina de edição do livro
  editBook(){
    this.edit = !this.edit;
  }

  //Envia as alterações do livro e retorna para a pagina de demonstração
  submitUpdatedBook(bookId: number){
    this.bookService.updateBook(bookId, this.editForm.value).subscribe(
     data => {
       this.snackbar.open('Livro editado com sucesso!', 'X', {duration: 5000})
       this.edit = !this.edit;
       this.getBook();
     }
    );

  }

  //Muda o valor da classificação no formulario para depois ser salvo
  onRatingChanged(newRating: number):void{
    this.editForm.get('classificacao')?.setValue(newRating);
  }

  //Abre o dialog de exclusão de livro
  removeBook(bookId:number){
    this.dialog.open(ConfirmationDialogComponent, {data: bookId});
  }

}
