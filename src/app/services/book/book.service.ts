import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/model/Book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(environment.apiAddress + 'livros');
  }

  public getById(bookId:number): Observable<Book>{
    return this.http.get<Book>(environment.apiAddress + 'livros/' + bookId);
  }

  public createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(environment.apiAddress + 'livros', book);
  }

  public updateBook(bookId:number): Observable<Book>{
    return this.http.put<Book>(environment.apiAddress + 'livros/', bookId);
  }

  public delete(bookId: number): Observable<void>{
    return this.http.delete<void>(environment.apiAddress + 'livros/' + bookId);
  }
}
