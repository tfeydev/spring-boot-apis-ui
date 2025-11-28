import { Component, inject } from '@angular/core';
import { Route } from '@angular/router';
import { BooksService } from './books.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { BookDetailModal } from './book-detail-modal';

@Component({
  selector: 'lib-books',
  standalone: true,
  imports: [CommonModule, BookDetailModal, AsyncPipe],
  templateUrl: './books.html',
  // styleUrls: ['./books.css'],
})
export class Books {
  books$ = inject(BooksService).getBooks();
  selectedBookTitle: string | null = null;

  openBookModal(title: string) {
    this.selectedBookTitle = title;
  }

  closeBookModal() {
    this.selectedBookTitle = null;
  }
}

export const BooksRoutes: Route[] = [
  {
    path: '',
    component: Books,
  },
];
