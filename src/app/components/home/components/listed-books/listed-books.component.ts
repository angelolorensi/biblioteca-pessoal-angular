import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { BookService } from 'src/app/services/book/book.service';
import { DialogCommunicationService } from 'src/app/services/dialog-communication/dialog-communication.service';
import { GoogleBooksService } from 'src/app/services/google-books/google-books.service';
import { Book } from 'src/app/shared/model/Book';

@Component({
  selector: 'app-listed-books',
  templateUrl: './listed-books.component.html',
  styleUrls: ['./listed-books.component.css']
})
export class ListedBooksComponent implements OnInit {

  private dialogClosedSubscription;

  allBooks?: Book[];
  page: number = 1;

  constructor(
    private bookService: BookService,
    private googleBooksService:GoogleBooksService,
    private router:Router,
    private dialogService: DialogCommunicationService) {
      //Chama loadBooks para atualizar lista de livros quando livro é adicionado pelo dialog de adição
      this.dialogClosedSubscription = this.dialogService.dialogClosed$.subscribe(() => {
        this.loadBooks();
      });
    }

  //carrega os livros ao inicializar a pagina
  ngOnInit(): void {
    this.loadBooks();
  }

  //Carrega os livros no array 'allBooks' e adiciona a imagem dado o titulo e buscando no google books api via service.
  async loadBooks() {
    try {
      const booksObservable = this.bookService.getAll();
      if (!booksObservable) {
        return;
      }
      const books = await booksObservable.toPromise();
      if (!books) {
        return;
      }
      const booksWithImages = await Promise.all(
        books.map(async (book) => {
          const imageUrl = await this.googleBooksService.searchBookImage(book.titulo).toPromise();
          return {
            ...book,
            imageUrl: imageUrl || 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg',
          };
        })
      );
      this.allBooks = booksWithImages;
    } catch (error) {
      console.error(error);
    }
  }

  //Navega para a pagina do livro
  goToBookPage(bookId: number){
    this.router.navigate(['/book', bookId]);
  }

  ngOnDestroy() {
    this.dialogClosedSubscription.unsubscribe();
  }


}





