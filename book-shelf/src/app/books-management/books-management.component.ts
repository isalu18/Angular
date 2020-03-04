import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.sass']
})
export class BooksManagementComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().then((books: Book[]) => {
      this.books = books;
    });
  }

  deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId).then((result) => {
      this.getBooks();
    }).catch((error) => {
      console.log(error);
    });
  }

  editBook(bookId: string) {
    this.router.navigate(['books', bookId, 'update']);
    //this.router.navigate([`books/${bookId}/update`]);
  }
}
