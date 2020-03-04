import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from 'src/models/book.model';

declare let $: any;
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {

    $('.materialboxed').materialbox();
    const bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.getBook(bookId);
  }

  getBook(bookId: string) {
    this.bookService.getBook(bookId).then((book: Book) => {
      console.log(book);
      this.book = book;
    }).catch((error) => {
      console.log(error);
      this.router.navigate(['']);
    });
  }
}
