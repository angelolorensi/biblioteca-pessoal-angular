import { BookService } from 'src/app/services/book/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/model/Book';
import { GoogleBooksService } from 'src/app/services/google-books/google-books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService:BookService,
    private googleBooksService: GoogleBooksService) {
    this.route.params.subscribe(params => {
      const bookId = +params['id'];
      this.bookService.getById(bookId).forEach(
        data => {
          this.book = data;
          this.loadBookCover(data.titulo, data.imageUrl);
        }
      )
    });
   }

  ngOnInit(): void {
    console.log(this.book);
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



}
