import { Component, inject } from '@angular/core';
import { Route } from '@angular/router';
import { BooksService } from './books.service';
import { CommonModule, AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.html',
  // styleUrls: ['./books.css'],
})
export class Books {
  books$ = inject(BooksService).getBooks();
}

export const BooksRoutes: Route[] = [
  {
    path: '',
    component: Books,
  },
];
