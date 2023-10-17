import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  private apiKey = 'AIzaSyDFrd6YV2KZ8QwbluuOWPD2YOXYqP-BThM';
  private cache = new Map<string, Observable<string | undefined>>();

  constructor(private http: HttpClient) {}

  searchBookImage(title: string): Observable<string | undefined> {
    // Checa se há resultado em cache
    if (this.cache.has(title)) {
      return this.cache.get(title)!;
    }

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${this.apiKey}`;

    const request$ = this.http.get(apiUrl).pipe(
      map((response: any) => {
        if (response.items && response.items.length > 0) {
          const book = response.items[0];
          const imageLinks = book.volumeInfo.imageLinks;
          if (imageLinks && imageLinks.thumbnail) {
            return imageLinks.thumbnail;
          }
        }
        return undefined;
      }),
      catchError((error) => {
        console.error('Error fetching book image:', error);
        return of(undefined);
      }),
      shareReplay(1)
    );
    this.cache.set(title, request$);

    return request$;
  }

}

