import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  title: string;
  author: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class BooksService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getBooks(category?: string): Observable<Book[]> {
    const url = category ? `${this.apiUrl}?category=${category}` : this.apiUrl;
    return this.http.get<Book[]>(url);
  }

  getBookByTitle(title: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${title}`);
  }

  createBook(book: Book): Observable<void> {
    return this.http.post<void>(this.apiUrl, book);
  }

  updateBook(title: string, book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${title}`, book);
  }

  deleteBook(title: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${title}`);
  }
}
