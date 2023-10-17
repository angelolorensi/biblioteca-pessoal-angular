import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { BookService } from 'src/app/services/book/book.service';
import { GoogleBooksService } from 'src/app/services/google-books/google-books.service';
import { Book } from 'src/app/shared/model/Book';

@Component({
  selector: 'app-listed-books',
  templateUrl: './listed-books.component.html',
  styleUrls: ['./listed-books.component.css']
})
export class ListedBooksComponent implements OnInit {

  allBooks?: Observable<Book[]>;

  constructor(
    private bookService: BookService,
    private googleBooksService:GoogleBooksService,
    private router:Router) { }

  //carrega os livros ao inicializar a pagina
  ngOnInit(): void {
    //this.loadBooks();
    this.loadBooksWithoutImage();
  }

  loadBooksWithoutImage(){
    this.allBooks = this.bookService.getAll();
  }

  //Carrega os livros no array 'allBooks' e adiciona a image dado o titulo e buscando no google books api via service.
  loadBooks() {
    this.allBooks = this.bookService.getAll().pipe(
      switchMap(books => {
        const booksWithImagePromises = books.map(book => {
          return this.googleBooksService.searchBookImage(book.titulo).toPromise().then(imageUrl => ({
            ...book,
            imageUrl: imageUrl || 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
          }));
        });
        return Promise.all(booksWithImagePromises);
      })
    );
  }

  goToBookPage(bookId: number){
    this.router.navigate(['/book', bookId]);
  }


}





