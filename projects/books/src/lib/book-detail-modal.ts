import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService, Book } from './books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail-modal.html',
})
export class BookDetailModal {
  @Input() bookTitle!: string;
  @Output() close = new EventEmitter<void>();

  private booksService = inject(BooksService);

  book$!: Observable<Book>;

  ngOnChanges() {
    if (this.bookTitle) {
      this.book$ = this.booksService.getBookByTitle(this.bookTitle);
    }
  }

  closeModal() {
    this.close.emit();
  }
}
