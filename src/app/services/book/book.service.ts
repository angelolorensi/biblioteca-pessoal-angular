import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/model/Book';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //Classe de servico que se comunica com o backend

  constructor(private http:HttpClient) { }

  //Retorna todos livros
  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(environment.apiAddress + 'livros');
  }

  //Retorna livro correspondente ao ID
  public getById(bookId:number): Observable<Book>{
    return this.http.get<Book>(environment.apiAddress + 'livros/' + bookId);
  }

  //Salva livro
  public createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(environment.apiAddress + 'livros', book);
  }

  //Atualiza livro
  public updateBook(bookId:number, book:Book): Observable<Book>{
    return this.http.put<Book>(environment.apiAddress + 'livros/' + bookId, book);
  }

  //Exclui livro
  public delete(bookId: number): Observable<void>{
    return this.http.delete<void>(environment.apiAddress + 'livros/' + bookId);
  }
}
